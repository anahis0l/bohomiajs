// Variables Globales
const contenedorProductos = document.getElementById("productos");
let carrito = [];
let baseDatos;
let results;
let datos;
const UrlJson = ('./data.json');

// creador de cards / traer objetos de json
mostrarProductos(baseDatos)
async function mostrarProductos(array){
  datos = await $.getJSON(UrlJson, function(response, estado){
  if (estado === "success"){
     results = response
     baseDatos = results.map((element) => {
            let aux = {
                id: element.id,
                nombre: element.nombre,
                precio: element.precio,
                imagen: element.imagen,
                categoria: element.categoria,
                stock: element.stock,
                cantidad: element.cantidad,
            }
            return aux;
        }); 
        let acumulador = ``;
        array.forEach( (baseDatos) => {
  
            acumulador += `<div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100 rounded shadow-sm">
            <a href="#"><img class="card-img-top animate__animated animate__fadeIn" src="./imagenes/${baseDatos.imagen}.jpg" alt=""></a>
            <div class="card-body">
            <h4 class="card-title">${baseDatos.nombre}</h4>
            <h5> $${baseDatos.precio}</h5>
            <i>${baseDatos.categoria}</i>
            <p class="card-text">Apto vegano - Cruelty Free -  Productos sin sulfatos / organicos y sustentables </p>
            </div>    
            <div class="card-footer">
            <button class="rounded comprar" onclick="agregarAlCarrito(${baseDatos.id})"><i class="icon-cart"></i> Agregar al carrito</button>
            <small class="text-muted"></small>
            </div>
            </div>
            </div>`;
    });
        $("#productos").html(acumulador);
    };
})
return datos;
};

// funcion agregar al carrito y actualizarlo 

function agregarAlCarrito (itemId) {

      let itemCarrito = carrito.find (el => el.id == itemId)
      if (itemCarrito){
        itemCarrito.cantidad += 1
      } else {
        let {id, nombre, precio, cantidad, imagen} = baseDatos.find ( el => el.id == itemId )
        carrito.push ({id:id, nombre:nombre, precio: precio, cantidad:cantidad, imagen:imagen});
      }
          localStorage.carrito = JSON.stringify(carrito);

          actualizarCarrito() 
}

const storage_carrito = localStorage.getItem("carrito")
  if (storage_carrito != null) {
    carrito = JSON.parse(storage_carrito);
  } else {
    carrito = [];
  }
 
/// funciones para filtrar 

$('.todos').on('click', () => {
  mostrarProductos(baseDatos); 
})

$('.dental').on('click', () => {
  const valorDental = baseDatos.filter( (el) => el.categoria.includes('Cuidado Dental'));
  console.log(valorDental)
  return mostrarProductos(valorDental);

})

$('.pelo').on('click', () => {
  const valorPelo = baseDatos.filter( el => el.categoria == 'Cuidado del pelo');
  console.log(valorPelo)
  mostrarProductos(valorPelo)
})

  $('.fem').on('click', () => {
  const valorFem = baseDatos.filter( el => el.categoria == 'Cuidado Femenino');
  console.log(valorFem)
  mostrarProductos(valorFem);
  
 })

///// Elementos modal

const contenedorModal = document.getElementsByClassName('modal-contenedor') [0]
const botonAbrir = document.getElementById ('boton-carrito')
const botonCerrar = document.getElementById ('carritoCerrar')

botonAbrir.addEventListener('click', ()=> {
    contenedorModal.classList.add('modal-active')
})

botonCerrar.addEventListener('click', ()=>{
    contenedorModal.remove('modal-active')
})

// modal funcion
const contenedorCarrito = document.getElementById('carrito-contenedor')
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')


function actualizarCarrito (){
  contenedorCarrito.innerHTML = ''

  carrito.forEach ( (baseDatos) =>{

    const div = document.createElement('div')
    div.classList.add('productoEnCarrito')
    div.innerHTML = `
                    <div class="container">
                        <div class="row">
                            <div class="col-1">
                             <p class="itemCantidad">${baseDatos.cantidad}x</p>
                            </div>
                            <div class="col-8">
                                <h5>${baseDatos.nombre}</h5>
                                <i>$${baseDatos.precio * baseDatos.cantidad}</i> 
                                </div>
                            <div class="col-2">
                                <img class="animate__animated animate__fadeIn" src="./imagenes/${baseDatos.imagen}.jpg" alt="" with="100px" height="100px"> 
                            </div>
                                <div class="col-1 d-flex align-items-center">
                                <button onclick=eliminarproducto(${baseDatos.id}) id="botonEliminar"><i class="icon-remove " id="remove"></i></button> 
                                </div>
                            </div>
                    </div>          
                    `
                    contenedorCarrito.appendChild(div) 
                    })
        contadorCarrito.innerText = carrito.length
        precioTotal.innerText = carrito.reduce ( (acc,el) => acc += (el.precio * el.cantidad), 0)
       
}

// funcion para eliminar los productos del modal

function eliminarproducto(id){
    let productoAEliminar = carrito.find( el => el.id == id )

    productoAEliminar.cantidad--

    if (productoAEliminar.cantidad == 0) {
        let indice = carrito.indexOf(productoAEliminar)
        carrito.splice(indice, 1)
    }
    actualizarCarrito()
}
