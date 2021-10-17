let articles = {};

function mostrarImagenArticulo() {

    let htmlContentToAppend = "";

    for (let i = 0; i < articles.length; i++) {
        let articulo = articles[i];

        htmlContentToAppend += `
        <div class=""item shadow mb-4"">
                <img class=" item-image " src="` + articulo.src + `" alt="">    
        </div>
        `
        document.getElementById("imagenPerra").innerHTML += htmlContentToAppend;
    }
}

function subTotal() {
    let cantidad = document.getElementById("cantidadArticulos").value;
    let precioArticulo = document.getElementById("precioUnidad").value;
    document.getElementById("subTotalCompras").value = cantidad * precioArticulo;
    document.getElementById("suBtotal").innerHTML = cantidad * precioArticulo;
}

function costoEnvios() {
    let subtotal = document.getElementById("subTotalCompras").value;
    let costosEnvio = document.getElementsByName("boton");
    let costo = 0;
    for (let radio of costosEnvio) {
        if (radio.checked) {
            costo = radio.value;
        }
    }
    document.getElementById("costoEnvio").innerHTML = subtotal * costo;
}

function total() {
    let subToTal = parseInt(document.getElementById("subTotalCompras").value);
    let costoEenvio = parseInt(document.getElementById("costoEnvio").innerHTML);
    document.getElementById("total").innerHTML = subToTal + costoEenvio;
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            articles = resultObj.data.articles;

            let nombreArticuloHTML = document.getElementById("articlesName");
            let precioPorUnidadHTML = document.getElementById("articlesPrecioUnidad");
            let precioUnidadHTML = document.getElementById("precioUnidad");
            let cantidadHTML = document.getElementById("cantidadArticulos");
            let moneda2HTML = document.getElementById("moneda2");

            nombreArticuloHTML.innerHTML = articles[0].name;
            precioPorUnidadHTML.innerHTML = articles[0].currency;
            precioUnidadHTML.value = articles[0].unitCost;
            cantidadHTML.value = articles[0].count
            moneda2HTML.innerHTML += articles[0].currency;

            cantidadHTML.addEventListener("change", function (e) {
                subTotal();
                costoEnvios();
                total();
            });
            subTotal();
            costoEnvios();
            total();
            let costosEnvio = document.getElementsByName("boton");
            for (let radio of costosEnvio) {
                radio.addEventListener("click", function(e){
                    costoEnvios();
                    total();
                })
            }
            //Muestro las imagen
            mostrarImagenArticulo();
        }
    });
});