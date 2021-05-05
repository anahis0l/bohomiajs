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
baseDatosProductos.push (new Producto('Acondicionador Sólido',  590,'img5','Cuidado Dental', 3));
baseDatosProductos.push (new Producto ('Jabón Vegeano', 390, 'img6', 'Cuidado de la piel', 4));
baseDatosProductos.push (new Producto ('Copita Mensatural', 1500, 'img7', 'Cuidado Femenino' ,3));
baseDatosProductos.push (new Producto ('Agua de rosas', 750, 'img8','Cuidado Femenino' ,2));
baseDatosProductos.push (new Producto ('Pads desmaquillantes',  720,'img9','Cuidado Femenino',2));

localStorage.setItem ('Productos', JSON.stringify(baseDatosProductos));
console.log (JSON.parse (localStorage. getItem ('Productos')));

// baseDatosProductos.forEach ((Producto) => {
//   Producto.stock()
// })
// console.log (baseDatosProductos);


// // find
// const Stocks = baseDatosProductos.find ( (el)=> el.stock === 9) 
// console.log (Stocks);



for (let i = 0; i < baseDatosProductos.length; i++) {


  acumulador += `<div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100 rounded shadow-sm">
    <a href="#"><img class="card-img-top" src="./imagenes/${baseDatosProductos[i].imagen}.jpg" alt=""></a>
    <div class="card-body">
    <h4 class="card-title">${baseDatosProductos[i].nombre}</h4>
    <h5> $${baseDatosProductos[i].precio}</h5>
    <b>${baseDatosProductos[i].categoria}</b>
    <p class="card-text">Apto vegano - Cruelty Free -  Productos sin sulfatos / organicos y sustentables </p>
      <label>Cantidad:</label>
      <select id="cantidad">
          <option value="1" selected="selected">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
      </select>
    <i class="text-right"> Stock: ${baseDatosProductos[i].stock}</i>
    </div>    
    <div class="card-footer">
    <button class="rounded" onclick="agregarAlCarrito('${baseDatosProductos[i].precio}')">Agregar al carrito</button>
    <small class="text-muted"></small>
    </div>
    </div>
    </div>`;
}

document.getElementById("productos").innerHTML = acumulador;


// Bienvenida y pedir e-mail  ---- esta ok 

// let bienvenidos = prompt ('Deseas suscribirte a nuestro Newsletter? Escribe si o no');
// let emailSi = "si"
// let emailNo = "no"
//   if (bienvenidos==emailSi){
//     let email =  prompt ('Dejanos tu E-mail, para recibir todas nuestras Ofertas!');
//     alert ('Gracias por suscribirte! te enviaremos un mail a tu casilla: ' + email );

//     const emailUsuario = email;
//     localStorage.setItem( 'e-mail del usuario', email );

//     const usuarioLocal = localStorage.getItem ('e-mail del usuario');
//     console.log (usuarioLocal);
//   }
 
// Saludo personalizado -- esta ok

// const titulo = document.getElementById('titulo')
// const usuario = prompt('Hola, ingrese su nombre')
// titulo.innerText = `¡Bienvenido ${usuario}!` 


const selectNum = document.getElementById('cantidad');

let carrito = [];

function agregarAlCarrito (precio) {
  let productoElegido = baseDatosProductos.find( el => el.precio == precio )
  if (precio){   
      alert ('Se agrego un nuevo producto al carrito. El total es: $ '+  precio);}

      carrito.push (productoElegido);
      localStorage.carrito = JSON.stringify(carrito);
      console.log (carrito);

      function sumarIva (precio) {
        return selectNum.value =(precio * 1.21) }
        console.log ('El precio del producto seleccionado + iva es $: ' + sumarIva (precio * 1.21) + ' por unidad');
       
}

function mostrarTotal() {
  console.log( carrito.reduce((acc, el) => acc += el.precio, 0));
}

document.getElementById('cantidad').addEventListener('input', stockCantidad);

function stockCantidad(event){
  console.log(event)
  console.log(event.target.value)
let unidades = document.getElementById('cantidad').value;
    if (unidades < baseDatosProductos.stock){
    console.loge ("Tenemos stock");
    } else {
    console.log ("No tenemos stock suficiente"); 
  }
}



