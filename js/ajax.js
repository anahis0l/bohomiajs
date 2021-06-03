function traerDatos(){
    $.getJSON(UrlJson, function(response, estado){
if (estado === "success"){
    const results = response;
    for ( let item of results) {
        console.log(item)
    }    
    const baseDatos = [results].map((element) => {
            let aux = {
                id: element.id,
                nombre: element.nombre,
                precio: element.precio,
                imagen: element.imagen,
                categoria: element.categoria,
                stock: element.stock,
            }
            return aux;
        }); 
        let acumulador = ``;
        for (let i = 0; i < baseDatos.length; i++) {

              acumulador += `<div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100 rounded shadow-sm">
                <a href="#"><img class="card-img-top animate__animated animate__fadeIn" src="./imagenes/${baseDatos[i].imagen}.jpg" alt=""></a>
                <div class="card-body">
                <h4 class="card-title">${baseDatos[i].nombre}</h4>
                <h5> $${baseDatos[i].precio}</h5>
                <i>${baseDatos[i].categoria}</i>
                <br>
                </div>    
                <div class="card-footer">
                <button class="rounded comprar"><i class="icon-cart"></i> Comprar</button>
                <small class="text-muted"></small>
                </div>
                </div>
                </div>`;
        }
        $("#productos").html(acumulador);
    };
})


// console.log (response);
// const results = response
// const baseDatos = results.map((element) => {
//             let aux = {
//                 id: element.id,
//                 nombre: element.nombre,
//                 precio: element.precio,
//                 imagen: element.imagen,
//                 categoria: element.categoria,
//                 stock: element.stock,
//             }
//             return aux;
//         });
//         baseDatos;


    //     const results = response.results 
    //     const productosMl = results.map((element) => {
    //         let aux = {
    //             tittle: element.title,
    //             img: element.thumbnail,
    //             id: element.id,
    //             price: element.price,
    //             stock: element.available_quantity,
    //             link: element.permalink,
    //         }
    //         return aux;
    //     });
    //     let acumulador = ``;
    //     for (let i = 0; i < productosMl.length; i++) {

    //           acumulador += `<div class="col-lg-4 col-md-6 mb-4">
    //             <div class="card h-100 rounded shadow-sm">
    //             <a href="#"><img class="card-img-top animate__animated animate__fadeIn" src="${productosMl[i].img}" alt=""></a>
    //             <div class="card-body">
    //             <h4 class="card-title">${productosMl[i].tittle}</h4>
    //             <h5> $${productosMl[i].price}</h5>
    //             <b>${productosMl[i].id}</b>
    //             <br>
    //             <i> Stock : ${productosMl[i].stock}</i>
    //             </div>    
    //             <div class="card-footer">
    //             <button class="rounded comprar"><a href="${productosMl[i].link}"></a><i class="icon-cart"></i> Comprar en ML</button>
    //             <small class="text-muted"></small>
    //             </div>
    //             </div>
    //             </div>`;
    //     }
    //     $("#productos").html(acumulador);
//     });
