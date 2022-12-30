/** Función Validar nombre*/

function validarNombre(){

    var Nombre = nombre.value.length;
    var contenidoNombre = nombre.value;
    
    
    if ( Nombre > 50 ) {
        textoNombre.textContent = " máximo 50 caracteres";
        return nombreValido = false;
    } else if(contenidoNombre == null || Nombre == 0) {
        textoNombre.textContent = " Escriba su nombre";
        return nombreValido = false;
    }else if(Nombre > 0 && Nombre < 50 ){
        textoNombre.textContent = "";
        return nombreValido = true;
    }
}

/** Función Validar e-mail */
function validarEmail(){

    var Email = email.value.length;
    var contenidoEmail = email.value;
    var conArroba = contenidoEmail.includes('@');
    
    if(contenidoEmail == null || Email == 0) {
        textoEmail.textContent = " Email no puede estar vacio";
        return emailValido = false;
    }else if ( !conArroba) {
        textoEmail.textContent = " debe tener '@' ";
        return emailValido = false;
    }else if(Email > 0 && Email < 50 && conArroba){
        textoEmail.textContent = "";
        return emailValido = true;
    }
}

/** Función Validar asunto */
function validarAsunto(){

    var Asunto = asunto.value.length;
    var contenidoAsunto = asunto.value;
    
    
    if ( Asunto > 50 ) {
        textoAsunto.textContent = " máximo 50 caracteres"
        return asuntoValido = false;
    } else if(contenidoAsunto == null || Asunto == 0) {
        textoAsunto.textContent = " Escriba su mensaje";
        return asuntoValido = false;
    } else if(Asunto > 0 && Asunto < 50 ){
        textoAsunto.textContent = "";
        return asuntoValido = true;
    }

}

/** Función Validar mensaje a enviar */
function validarMensaje(){

    var Mensaje = mensaje.value.length;
    var contenidoMensaje = mensaje.value;
    
    
    if ( Mensaje > 300 ) {
        mensajeAEnviar.textContent = " máximo 300 caracteres"
        return mensajeValido = false;
    } else if(contenidoMensaje == null || Mensaje == 0) {
        mensajeAEnviar.textContent = " Mensaje Incompleto";
        return mensajeValido = false;
    }else if(Mensaje > 0 && Mensaje < 300 ){
        mensajeAEnviar.textContent = "";
        return mensajeValido = true;
    }
}


/**Función activar boton enviar */
function activarBoton(){
    if(nombreValido && emailValido && asuntoValido && mensajeValido){
        btnEnviarMensaje.style.display="block";
    }else{
        btnEnviarMensaje.style.display="none";

    }
}

var nombre = document.getElementById("nombre");
var textoNombre = document.getElementById("textoNombre");
nombre.addEventListener("input", () =>{
    validarNombre();
    activarBoton();
});
var nombreValido = false;

var email = document.getElementById("email");
var textoEmail = document.getElementById("textoEmail");
email.addEventListener("input", ()=>{
    validarEmail();
    activarBoton();
});
var emailValido = false;

var asunto = document.getElementById("asunto");
var textoAsunto = document.getElementById("textoAsunto");
asunto.addEventListener("input",()=>{
    validarAsunto();
    activarBoton();
} );
var asuntoValido = false;

var mensaje = document.getElementById("mensaje");
var mensajeAEnviar = document.getElementById("mensajeAEnviar");
mensaje.addEventListener("input", ()=>{
    validarMensaje();
    activarBoton();
});
var mensajeValido = false;

var btnEnviarMensaje = document.getElementById("enviarMensaje");
    btnEnviarMensaje.style.display="none";

   