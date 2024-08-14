function validarEmail(){
    var emailField = document.getElementById('user-email');

    var validarEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;

    if(validarEmail.test(emailField.value)) {
        alert('El Email ingresado es valido');
        return true;
    } else{
        alert('El email ingresado no es valido. Vuelva a ingresar otro email por favor ');
        return false;
    }
}