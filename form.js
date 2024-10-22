const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('userEmail');
const pais = document.getElementById('pais');
const form = document.getElementById('form');
const adver = document.getElementById('warnings');

form.addEventListener("submit", e=> {
    e.preventDefault()
    let warnings = "";
    let admitido = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(nombre.value.length < 2){
        warnings += '* Es campo nombre no es valido <br>'
        admitido = true;
    }
    if(apellido.value.length == 0){
        warnings += '* El campo apellido no es valido <br>'
        admitido = true;
    }    
    if(!regexEmail.test(email.value)){
        warnings += '* El email ingreado no es valido <br>'
        admitido = true;
    }
    if(pais.value.length < 2){
        warnings += '* El pais de residencia es obligatorio <br>'
        admitido = true;
    }
    if(admitido){
        adver.innerHTML = warnings;
    } else {
        adver.innerHTML = "Formulario enviado exitosamente";
    }
});


