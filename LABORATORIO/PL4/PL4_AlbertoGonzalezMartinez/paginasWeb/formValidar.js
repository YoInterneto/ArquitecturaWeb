function validarPC() {

    var ok = true;
    var alerta = "Corrija los siguientes campos: \n";

    var email = document.getElementById("correo").value;
    var texto = document.getElementById("presupuesto").value;

    if(!validarEmail(email)){
        ok = false;
        alerta += "  -Email no válido\n";
    }

    if(!validarLongitud(texto, 500)){
        ok = false;
        alerta += "  -Texto excede carácteres máximos\n";
    }

    if(!ok){
        alert(alerta);
    }
}

function validarOpina(){

    var ok = true;
    var alerta = "Corrija los siguientes campos: \n";

    var texto = document.getElementById("opinion").value;

    if(!validarLongitud(texto, 500)){
        ok = false;
        alerta += "  -Texto excede carácteres máximos\n";
    }

    if(!ok){
        alert(alerta);
    }
}

function validarQueja(){

    var ok = true;
    var alerta = "Corrija los siguientes campos: \n";

    var email = document.getElementById("correo").value;
    var texto = document.getElementById("mensaje").value;
    var eleccion = document.getElementById("razon").value;

    if(!validarEmail(email)){
        ok = false;
        alerta += "  -Email no válido\n";
    }

    if(!validarLongitud(texto, 500)){
        ok = false;
        alerta += "  -Texto excede carácteres máximos\n";
    }

    if(eleccion == 0){
        ok = false;
        alerta += "  -Elija un motivo\n";
    }

    if(!ok){
        alert(alerta);
    }

}

function validarEmail(valor) {

    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (emailRegex.test(valor)){
        return true;
    } else {
        return false;
    }
}

function validarLongitud(valor, longitud){
    if(valor.length <= longitud){
        return true;
    } else {
        return false;
    }
}