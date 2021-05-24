// Ajax comentado porque no te deja usar el resto del codigo 

function traerDatos () {
    $.get("https://api.mercadolibre.com/sites/MLA/search?q=ecofriendly", function(response, estado){
        const results = response.results 
        const productosMl = results.map((element) => {
            let aux = {
                tittle: element.title,
                img: element.thumbnail,
                id: element.id,
                price: element.price,
                stock: element.available_quantity,
                link: element.permalink,
            }
            return aux;
        });
        let acumulador = ``;
        for (let i = 0; i < productosMl.length; i++) {

              acumulador += `<div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100 rounded shadow-sm">
                <a href="#"><img class="card-img-top animate__animated animate__fadeIn" src="${productosMl[i].img}" alt=""></a>
                <div class="card-body">
                <h4 class="card-title">${productosMl[i].tittle}</h4>
                <h5> $${productosMl[i].price}</h5>
                <b>${productosMl[i].id}</b>
                <br>
                <i> Stock : ${productosMl[i].stock}</i>
                </div>    
                <div class="card-footer">
                <button class="rounded comprar"><a href="${productosMl[i].link}"></a><i class="icon-cart"></i> Comprar en ML</button>
                <small class="text-muted"></small>
                </div>
                </div>
                </div>`;
        }
        $("#productos").html(acumulador);
    });
}