function saludar(){
    alert("Hola usuario!!!");
}

function sumar(){
    var a = 112;
    var b = 10;

    var result = a % b;

    // + sumar
    // - restar    
    // * multiplicaci+on
    // / division
    // % módulo 

    alert(result);
}

function comparar(){
    var a = 34;
    var b = 33;

    if(a < b){
        alert("A es menor");
    } else {
        alert("A es mayor")
    }
}

function mayoriaEdad(){
    var edad = 18;

    if(edad => 18){
        alert("Puedes entrar");
    } else {
        alert("Vuelve cuando seas mayor");
    }

    // < Menor que
    // > Mayor que
    // == es igual
    // => igual o mayor que
    // =< igual o menor que
}

function password(){
    var clave = "12345qwerty";
    
    if(clave == "12345qwerty"){
        alert("Bienvenido");
    } else {
        alert("Contraseña incorrecta");
    }
}

function repetir(){
    for(i=0; i<4; i++){
        console.log("EDAD" + i); 
    }
    // contador: una variable auxiliar que nos permite CONTAR
}

function par(){
    var numero = 3;
    var residuo = numero % 2;

    if(residuo == 0){
        console.log("Par");
    } else {
        console.log("Impar")
    }
}

function parAvanzado(){
    var limite = 9;
    
    for(i=0; i<limite; i++){
        console.log(i);
        var residuo = i % 2;

        if(residuo == 0){
            console.log("Par");
        } else {
            console.log("Impar");
        }
    }
}

function sumaAvanzada(){
    var a = 0;
    var b = 0;

    a = document.getElementById("numeroA").value;
    b = document.getElementById("numeroB").value;

    var aFinal = parseInt(a);
    var bFinal = parseInt(b);

    var result = aFinal + bFinal;

    console.log(result);

    document.getElementById("resultCalculadora").innerHTML = result;
}

function restaAvanzada(){
    var a = 0;
    var b = 0;

    a = document.getElementById("numeroA").value;
    b = document.getElementById("numeroB").value;

    var aFinal = parseInt(a);
    var bFinal = parseInt(b);

    var result = aFinal - bFinal;

    console.log(result);

    document.getElementById("resultCalculadora").innerHTML = result;
}

function multiplicacionAvanzada(){
    var a = 0;
    var b = 0;

    a = document.getElementById("numeroA").value;
    b = document.getElementById("numeroB").value;

    var aFinal = parseInt(a);
    var bFinal = parseInt(b);

    var result = aFinal * bFinal;

    console.log(result);

    document.getElementById("resultCalculadora").innerHTML = result;
}

function divisionAvanzada(){
    var a = 0;
    var b = 0;

    a = document.getElementById("numeroA").value;
    b = document.getElementById("numeroB").value;

    var aFinal = parseInt(a);
    var bFinal = parseInt(b);

    var result = aFinal / bFinal;

    console.log(result);

    document.getElementById("resultCalculadora").innerHTML = result;
}

// No solo quiero sumar, quiero suimar, restar, mult, y dividir.

function barAvanzado(){
    var name = "";
    var year = 0;
    var mensaje = "";

    // Info del usuario
    name = document.getElementById("nombre").value;
    year = document.getElementById("anho").value;
    yearNacimiento = parseInt(year);

    var e = document.getElementById("mes");
    var mesNacimiento = e.value;

    console.log("Información que puso el usuario: " + name + year + mesNacimiento);

    // Fecha del día de hoy
    var fechaDeHoy = new Date();
    var mesActual = fechaDeHoy.getMonth() + 1;

    console.log("Mes actual: " + mesActual);

    // Calcular edad
    var userAge = 2023-yearNacimiento;

    if(mesNacimiento >= mesActual){
        userAge = userAge-1;
    }

    console.log("Edad del usuario: " + userAge);

    // Tomamos la decision
    if(userAge >= 18){
        mensaje = "Te damos la bienvenida " + name + " tienes " + userAge + " años, puedes pasar al bar. ✅";
        document.getElementById("resultBar").innerHTML = mensaje;
    } else {
        mensaje = "Lo siento " + name + ", solo tienes " + userAge + " así que no puedes entrar. ❌";
        document.getElementById("resultBar").innerHTML = mensaje;
    }
}


// Crear una app que saque provecho del FOR

function contar() { 
    var limiteParaContar = document.getElementById("limite").value;

    for(var i=0; i<=limiteParaContar; i++){
        console.log(i);
    }
}

function cine() {
    var entradas = document.getElementById("entradas").value; //3
    var palomitas = document.getElementById("palomitas").value;
    var refrescos = document.getElementById("refrescos").value;

    var entradasEntregadas = "";
    var palomitasEntregadas = "";
    var refrescosEntregados = "";

    console.log("Entradas: " + entradas);
    console.log("palomitas: " + palomitas);
    console.log("refrescos: " + refrescos);

    for(var i=0; i < entradas; i++){
        entradasEntregadas = entradasEntregadas + "🎫";
    }

    for(var j=0; j < palomitas; j++){
        palomitasEntregadas = palomitasEntregadas + "🍿";
    }

    for(var k=0; k < refrescos; k++){
        refrescosEntregados = refrescosEntregados + "🥤";
    }

    document.getElementById("resultCine").innerHTML = entradasEntregadas + palomitasEntregadas + refrescosEntregados;

    if(entradas >= 3){
        document.getElementById("promos").innerHTML = "Completa tu compra pronto, hay pocos lugares";
        document.getElementById("promos").classList.add("advertencia");
    } else { 
        document.getElementById("promos").innerHTML = "";
    }
}