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

  carrito.forEach ( (baseDatosProductos) =>{


  const div = document.createElement('div')
  div.classList.add('productoEnCarrito')
  div.innerHTML = `<p>${selectNum.value}</p>
                  <p>${baseDatosProductos.nombre}</p>
                  <p>${baseDatosProductos.precio}</p>                 
                 `
                 contenedorCarrito.appendChild(div) 
                })
        contadorCarrito.innerText = carrito.length
        precioTotal.innerText = carrito.reduce ( (acc,el) => acc += el.precio, 0 )
        
}


const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

