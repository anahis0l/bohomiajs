let acumulador = ``;
let totalCarrito = 0;
let totalCompra = 0;

class Producto {
  constructor (nombre, precio, imagen, categoria, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.categoria = categoria;
    this.stock = stock;
  }

}

//* Variables objetos*/
const baseDatosProductos = []; 

baseDatosProductos.push(new Producto ('Cepillo Dientes - Bambu',  250, 'img1','Cuidado Dental',3));
baseDatosProductos.push(new Producto('Hilo dental Vegano',  450,'img2', 'Cuidado Dental', 2));
baseDatosProductos.push (new Producto('Pasta dental Ayurvedica',  350,'img3','Cuidado Dental',4));
baseDatosProductos.push (new Producto ('Shampoo Sólido',  580, 'img4','Cuidado del pelo', 2));
baseDatosProductos.push (new Producto('Acondicionador Sólido',  590,'img5','Cuidado del pelo', 3));
baseDatosProductos.push (new Producto ('Jabón Vegeano', 390, 'img6', 'Cuidado del pelo', 4));
baseDatosProductos.push (new Producto ('Copita Menstrual', 1500, 'img7', 'Cuidado Femenino' ,3));
baseDatosProductos.push (new Producto ('Agua de rosas', 750, 'img8','Cuidado Femenino' ,2));
baseDatosProductos.push (new Producto ('Pads desmaquillantes',  720,'img9','Cuidado Femenino',2));

localStorage.setItem ('Productos', JSON.stringify(baseDatosProductos));
console.log (JSON.parse (localStorage. getItem ('Productos')));

const contenedorProductos = document.getElementById("productos")
// creador de cards 
mostrarProductos (baseDatosProductos);
$("#productos").html(acumulador);

  function mostrarProductos (array){

  contenedorProductos.innerHTML = ''

        array.forEach( (baseDatosProductos) => {

              acumulador += `<div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100 rounded shadow-sm">
                <a href="#"><img class="card-img-top animate__animated animate__fadeIn" src="./imagenes/${baseDatosProductos.imagen}.jpg" alt=""></a>
                <div class="card-body">
                <h4 class="card-title">${baseDatosProductos.nombre}</h4>
                <h5> $${baseDatosProductos.precio}</h5>
                <b>${baseDatosProductos.categoria}</b>
                <p class="card-text">Apto vegano - Cruelty Free -  Productos sin sulfatos / organicos y sustentables </p>
                  <label>Cantidad:</label>
                  <select id="cantidad">
                      <option value="1" selected="selected">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                  </select>
                <i> Stock : ${baseDatosProductos.stock}</i>
                </div>    
                <div class="card-footer">
                <button class="rounded comprar" onclick="agregarAlCarrito('${baseDatosProductos.precio}')"><i class="icon-cart"></i> Agregar al carrito</button>
                <small class="text-muted"></small>
                </div>
                </div>
                </div>`;

        });

      }


let carrito = [];
const unidades = document.getElementById('cantidad').value
// funcion agregar al carrito y actualizarlo 
function agregarAlCarrito (precio) {
  let inputValue = unidades.value
  let productoElegido = baseDatosProductos.find( el => el.precio == precio )
  if ( inputValue == '1'){   
     console.log('Se agrego un nuevo producto al carrito. El total es: $ '+  precio)
    } else if (inputValue == '2') {
        console.log('Se agregaron 2 productos al carrito. El total es: $ '+ 2*precio)
      }else {
        console.log('Se agregaron 3 productos al carrito. El total es: $ '+ 3*precio)
      }
  
  
      carrito.push (productoElegido);
      localStorage.carrito = JSON.stringify(carrito);
      console.log (carrito);

      function sumarIva (precio) {
        return unidades.value =(precio * 1.21) }
        console.log ('El precio del producto seleccionado + iva es $: ' + sumarIva (precio * 1.21) + ' por unidad');
   
        actualizarCarrito()   
}

const storage_carrito = localStorage.getItem("carrito")
  if (storage_carrito != null) {
    carrito = JSON.parse(storage_carrito);
  } else {
    carrito = [];
  }
 
/// funciones para filtrar 

$('#todos').on('click', () => {
  mostrarProductos(baseDatosProductos);
  
})

$('#dental').on('click', () => {
  const valorDental = baseDatosProductos.filter( (el) => el.categoria.includes('Cuidado Dental'));
  console.log(valorDental)
  return mostrarProductos(baseDatosProductos.filter( (el) => el.categoria.includes('Cuidado Dental')));


})

$('#pelo').on('click', () => {
  const valorPelo = baseDatosProductos.filter( el => el.categoria == 'Cuidado del pelo');
  console.log(valorPelo)
  mostrarProductos(valorPelo)
})


  $('#fem').on('click', () => {
  const valorFem = baseDatosProductos.filter( el => el.categoria == 'Cuidado Femenino');
  console.log(valorFem)
  mostrarProductos(baseDatosProductos.filter( el => el.categoria == 'Cuidado Femenino'));
  
 }
  )


/// funciones filtrar
const todos = document.getElementById('todos')
const dental = document.getElementById('dental')
const pelo = document.getElementById('pelo')
const fem = document.getElementById('fem')

function filtrar (baseDatosProductos){
  const valorDental = baseDatosProductos.filter( (el) => el.categoria.includes('Cuidado Dental'));
  if ( todos == 'all'){
  mostrarProductos(baseDatosProductos);}
  else { 
    mostrarProductos(valorDental);

  }


}