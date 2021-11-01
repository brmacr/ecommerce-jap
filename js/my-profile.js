let usuario = {};
function guardarDatos(nombre, mail, edad, telefono) {
    usuario.nombreUsuario = nombre;
    usuario.correo = mail;
    usuario.edad = edad;
    usuario.telefono = telefono;
    localStorage.setItem("usuario", JSON.stringify(usuario));
}

function rellenarDatos(nombre, mail, edad, telefono) {
    if(mail==(localStorage.getItem("correo"))) {
    document.getElementById("nombreUsuarioCompleto").value = nombre;
    document.getElementById("mailUs").value = mail
    document.getElementById("edad").value = edad;
    document.getElementById("telefono").value = telefono;
}
}   


document.addEventListener("DOMContentLoaded", function (e) {
    if (localStorage.getItem("usuario") !== null ) { 
        usuario = JSON.parse(localStorage.getItem("usuario"));
        rellenarDatos(usuario.nombreUsuario, usuario.correo, usuario.edad, usuario.telefono);
        localStorage.setItem(usuario.correo,"correo")
    }
    document.getElementById("formularioLindo").addEventListener("submit", function (e) {
        e.preventDefault();
        let nombre = document.getElementById("nombreUsuarioCompleto").value;
        let mail = document.getElementById("mailUs").value;
        let edad = document.getElementById("edad").value;
        let telefono = document.getElementById("telefono").value;

        guardarDatos(nombre, mail, edad, telefono);

    })
});