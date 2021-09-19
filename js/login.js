// Validar datos y Redireccionar a index.html:
let boton = document.getElementById('tellevo');
boton.addEventListener("click", function bienvenido(e) {
e.preventDefault()
    validacion = document.getElementById("correo").value;
    validacion2 = document.getElementById("password").value;
    if(validacion.length == 0 || /^\s+$/.test(validacion)){
        alert("Debes completar todos los campos para continuar!!");
        return false;
    }
    
    if(validacion2.length == 0 || /^\s+$/.test(validacion2)){ 
        alert("Debes completar todos los campos para continuar!");
        return false;
    }
    else{ 
        let correo = document.getElementById('correo').value;
        localStorage.setItem("correo", correo)
        let contraseña = document.getElementById('password').value;
        localStorage.setItem('password', contraseña)
        window.location.href="index.html";  
    }
});

document.getElementById("btn_iniciar-sesion").addEventListener("click",iniciarSesion);
document.getElementById("btn_registrarse").addEventListener("click",registro);

let contenedor_login_registro = document.querySelector(".contenedor_login-registro");
let formulario_login = document.querySelector(".formulario_login");
let formulario_registro = document.querySelector(".formulario_registro");
let primer_caja_login = document.querySelector(".primer_caja-login");
let primer_caja_registro = document.querySelector(".primer_caja-registro");

function iniciarSesion(){
    formulario_registro.style.display = "none";
    contenedor_login_registro.style.left ="10px";
    formulario_login.style.display="block";
    primer_caja_registro.style.opacity="1";
    primer_caja_login.style.opacity="0";
}

function registro(){
    formulario_registro.style.display = "block";
    contenedor_login_registro.style.left ="410px";
    formulario_login.style.display="none";
    primer_caja_registro.style.opacity="0";
    primer_caja_login.style.opacity="1";
}

// //Función que se ejecuta una vez que se haya lanzado el evento de
// //que el documento se encuentra cargado, es decir, se encuentran todos los
// //elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});