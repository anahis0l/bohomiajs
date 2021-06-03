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

function actualizarCarrito (){
  contenedorCarrito.innerHTML = ''

  carrito.forEach ( (baseDeDatosProductos) =>{

    const div = document.createElement('div')
    div.classList.add('productoEnCarrito')
    div.innerHTML = `
                    <div class="container">
                        <div class="row">
                            <div class="col-1">
                                <p>1</p>
                            </div>
                            <div class="col-8">
                                <h5>${baseDeDatosProductos.nombre}</h5>
                                <i>$${baseDeDatosProductos.precio}</i> 
                                </div>
                            <div class="col-2">
                                <img class="animate__animated animate__fadeIn" src="./imagenes/${baseDatosProductos.imagen}.jpg" alt="" with="100px" height="100px"> 
                            </div>
                                <div class="col-1 d-flex align-items-center">
                                <button onclick=eliminarproducto(${baseDeDatosProductos.id}) id="botonEliminar"><i class="icon-remove " id="remove"></i></button> 
                                </div>
                            </div>
                    </div>          
                    `
                    contenedorCarrito.appendChild(div) 
                    })
        contadorCarrito.innerText = carrito.length
        precioTotal.innerText = carrito.reduce ( (acc,el) => acc += el.precio, 0 )
        
}


const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

// funcion para eliminar los productos del modal

function eliminarproducto(id){
    let productoAeliminar = carrito.find( el => el.id == id);
    let indice = carrito.indexOf (productoAeliminar);

    carrito.splice(indice, 1)
    console.log(carrito);
    actualizarCarrito()
}
