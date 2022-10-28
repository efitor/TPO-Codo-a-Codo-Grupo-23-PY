var nombre = document.getElementById('fname');
var mail = document.getElementById('email');
var error = document.getElementById('error');
var correcto = document.getElementById('correcto');
var form = document.getElementById('Form');

form.addEventListener('submit',function(self){
    self.preventDefault();
    var mensajeError = [];
    var mensajeCorrecto= [];
    var enviar;

    if(nombre.value === null || nombre.value === ''){
        mensajeError.push('Por favor escribe tu nombre 😊');
        enviar=false;
    }
    else if(mail.value === null || mail.value === ''){
        mensajeError.push('Por favor escribe tu mail 😊');
        enviar=false;
    }
    else{
        mensajeCorrecto.push('Gracias por tu comentario! 👍')
        enviar=true;
    }
    if(enviar == false){
        error.innerHTML = mensajeError.join(', ')
    }
    else{
        error.outerHTML = mensajeError
        correcto.innerHTML = mensajeCorrecto
    }
});