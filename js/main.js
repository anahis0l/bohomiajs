// Variables Globales
const contenedorProductos = document.getElementById("productos");
let carrito = [];
const datosProductos = []; 

// // Creador de objetos 

// class Producto {
//   constructor (id, nombre, precio, imagen, categoria, stock){
//     this.id = id;
//     this.nombre = nombre;
//     this.precio = precio;
//     this.imagen = imagen;
//     this.categoria = categoria;
//     this.stock = stock;
    
//   }

// }
// //* Variables objetos*/
// 
// baseDatosProductos.push(new Producto (1, 'Cepillo Dientes - Bambu',  250, 'img1','Cuidado Dental',10));
// baseDatosProductos.push(new Producto(2, 'Hilo dental Vegano',  450,'img2', 'Cuidado Dental', 10));
// baseDatosProductos.push (new Producto(3, 'Pasta dental Ayurvedica',  350,'img3','Cuidado Dental',10));
// baseDatosProductos.push (new Producto (4, 'Shampoo Sólido',  580, 'img4','Cuidado del pelo', 10));
// baseDatosProductos.push (new Producto(5, 'Acondicionador Sólido',  590,'img5','Cuidado del pelo', 10));
// baseDatosProductos.push (new Producto (6, 'Jabón Vegeano', 390, 'img6', 'Cuidado del pelo', 10));
// baseDatosProductos.push (new Producto (7, 'Copita Menstrual', 1500, 'img7', 'Cuidado Femenino' ,10));
// baseDatosProductos.push (new Producto (8, 'Agua de rosas', 750, 'img8','Cuidado Femenino' ,10));
// baseDatosProductos.push (new Producto (9, 'Pads desmaquillantes',  720,'img9','Cuidado Femenino',10));



// Creador de objetos 
class Productos {
  constructor (id, nombre, precio, imagen, categoria, stock){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.categoria = categoria;
    this.stock = stock;
    
  }

}

async function baseDeDatos () {
  let datosProductos = await fetch('./data.json').then(response => response.json()); 
  datosProductos = datosProductos.map(element => {
      return Object.assign(new Productos(), element);
  })
  mostrarProductos(datosProductos);
  console.log(datosProductos)
}
baseDeDatos();
//Guardar productos en el storage
localStorage.setItem ('Productos', JSON.stringify(datosProductos));
console.log (JSON.parse (localStorage. getItem ('Productos')));


// creador de cards 

function mostrarProductos (array){

  let acumulador = ``;
  contenedorProductos.innerHTML = ''

        array.forEach( (datosProductos) => {

              acumulador += `<div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100 rounded shadow-sm">
                <a href="#"><img class="card-img-top animate__animated animate__fadeIn" src="./imagenes/${datosProductos.imagen}.jpg" alt=""></a>
                <div class="card-body">
                <h4 class="card-title">${datosProductos.nombre}</h4>
                <h5> $${datosProductos.precio}</h5>
                <i>${datosProductos.categoria}</i>
                <p class="card-text">Apto vegano - Cruelty Free -  Productos sin sulfatos / organicos y sustentables </p>
                </div>    
                <div class="card-footer">
                <button class="rounded comprar" onclick="agregarAlCarrito('${datosProductos.precio}')"><i class="icon-cart"></i> Agregar al carrito</button>
                <small class="text-muted"></small>
                </div>
                </div>
                </div>`;
        });
        $("#productos").html(acumulador);
      }
      mostrarProductos (datosProductos);


// funcion agregar al carrito y actualizarlo 
function agregarAlCarrito (precio) {
  let productoElegido = datosProductos.find( el => el.precio == precio )
  let stockProducto = datosProductos.find( el => el.stock == 'stock' )
if (stockProducto > 1) {
  console.log ("Se agrego un nuevo producto al carrito")
}  else {
  console.log ("No tenemos stock suficiente")
}
      carrito.push (productoElegido);
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
  mostrarProductos(datosProductos); 
})

$('.dental').on('click', () => {
  const valorDental = datosProductos.filter( (el) => el.categoria.includes('Cuidado Dental'));
  console.log(valorDental)
  return mostrarProductos(valorDental);


})

$('.pelo').on('click', () => {
  const valorPelo = datosProductos.filter( el => el.categoria == 'Cuidado del pelo');
  console.log(valorPelo)
  mostrarProductos(valorPelo)
})


  $('.fem').on('click', () => {
  const valorFem = datosProductos.filter( el => el.categoria == 'Cuidado Femenino');
  console.log(valorFem)
  mostrarProductos(valorFem);
  
 }
  )

