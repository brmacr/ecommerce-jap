let product = {};
let products = {};
let comentariosLindos = {};


function showImagesGallery(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productosLocos").innerHTML = htmlContentToAppend;
    }
}

function mostrarComentarios() {
    let htmlContentToAppend = "";

    for (let i = 0; i < comentariosLindos.length; i++) {
        let estrellasEndemoniadas = "";
        let com = comentariosLindos[i];

        for (let i = 0; i < com.score; i++) {
            estrellasEndemoniadas += ` <span class="fa fa-star checked"></span>`;
        };

        for (let i = 0; i < 5 - com.score; i++) {
            estrellasEndemoniadas += ` <span class="fa fa-star"></span>`;
        };

        htmlContentToAppend += `
    <div class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col">
                <p>`+ com.description + `</p>
                <div class="d-flex w-100 justify-content-between">
                <small>` + com.user + `</small>
                </div>
                <small>` + estrellasEndemoniadas + `</small><br>
                <small class="text-muted" >` + com.dateTime + `</small>
            </div>
        </div>
    </div>
    `
    }
    document.getElementById("comentarios").innerHTML = htmlContentToAppend;
}

function mostrarProductosRelacionados() {

    let htmlContentToAppend = "";
    for (let i = 0; i < product.relatedProducts.length; i++) {
        let prodct = products[product.relatedProducts[i]];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + prodct.imgSrc + `" alt="">
                <small>` + prodct.name + `</small>
                <small>` + prodct.currency + ` ` + prodct.cost +  `</small>
            </div>
        </div>
        `
    }
    document.getElementById("productosRelacionados").innerHTML = htmlContentToAppend;

}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            product = resultObj.data;

            let productNameHTML = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productSoldCountHTML = document.getElementById("productSoldCount");
            let productCurrencyHTML = document.getElementById("productCurrency");
            let productCategoryHTML = document.getElementById("productCategory");
            let usuario = document.getElementById("usuario");

            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productSoldCountHTML.innerHTML = product.soldCount;
            productCurrencyHTML.innerHTML = product.currency + " " + product.cost;
            productCategoryHTML.innerHTML = product.category;
            usuario.value = localStorage.getItem("correo");

            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);

            getJSONData(PRODUCTS_URL).then(function (resultObj) {
                if (resultObj.status === "ok") {
                    products = resultObj.data;
                    mostrarProductosRelacionados();
                }
            })
        }
    });
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            comentariosLindos = resultObj.data;
            mostrarComentarios();
        }
    })
});