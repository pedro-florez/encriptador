/* 
    Las "llaves" de encriptación que utilizaremos son las siguientes:

    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat" 

    Por ejemplo: 
    "gato" => "gaitober"
    "alura" => "ailufatrai"
*/

const llaves = { 
    e: "enter",
    i: "imes", 
    a: "ai",
    o: "ober",
    u: "ufat"
};

const entradaTexto = document.getElementById('entrada-texto');
const salidaTexto  = document.getElementById('salida-texto');
const imagen       = document.getElementById('imagen');
const mensaje404   = document.getElementById('mensaje-404');
const btnCopiar    = document.getElementById('btnCopiar');

/* Encriptar Texto
-------------------------------------------------- */
function encriptar( mensaje ) {

    mensaje = mensaje.toLowerCase();

    for( const [ key, value ] of Object.entries(llaves) ) {

        // Validar si el mensaje tiene alguna vocal
        if ( mensaje.includes(key) ) {

            // Remplazar mensaje
            mensaje = mensaje.replaceAll(key, value);
        }
    }

    return mensaje;
}

/* Desencriptar Texto
-------------------------------------------------- */
function desencriptar( mensaje ) {

    mensaje = mensaje.toLowerCase();

    for( const [ key, value ] of Object.entries(llaves) ) {

        // Validar si el mensaje tiene algun valor encriptado
        if ( mensaje.includes(value) ) {

            // Remplazar mensaje
            mensaje = mensaje.replaceAll(value, key);
        }
    }

    return mensaje;
}

/* Ocultar Imagen
-------------------------------------------------- */
function mostrarResultado( accion ) {

    let mensaje = entradaTexto.value.trim();

    // Validar que haya texto
    if ( mensaje ) {

        imagen.setAttribute('style', 'display: none;');
        mensaje404.setAttribute('style', 'display: none;');

        salidaTexto.removeAttribute('style');
        btnCopiar.removeAttribute('style');        

        if ( accion === 'encriptar' ) {
            salidaTexto.innerHTML = encriptar( mensaje );          
        }

        if ( accion === 'desencriptar' ) {
            salidaTexto.innerHTML = desencriptar( mensaje );            
        }

    }else {        

        salidaTexto.setAttribute('style', 'display: none;');
        btnCopiar.setAttribute('style', 'display: none;');

        imagen.removeAttribute('style');
        mensaje404.removeAttribute('style');

        alert('Por favor ingrese un texto.');
    }
}

/* Click Button Encriptar
-------------------------------------------------- */
document.getElementById('encriptar').addEventListener('click', function() {

    mostrarResultado( 'encriptar' );    
});

/* Click Button Desencriptar
-------------------------------------------------- */
document.getElementById('desencriptar').addEventListener('click', function() {

    mostrarResultado( 'desencriptar' );
});

/* Click Button Copiar
-------------------------------------------------- */
btnCopiar.addEventListener('click', function() {

    let mensaje = salidaTexto.value.trim();

    navigator.clipboard.writeText(mensaje);    
});
