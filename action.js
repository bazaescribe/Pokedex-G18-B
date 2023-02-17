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
}

// No solo quiero sumar, quiero suimar, restar, mult, y dividir.

function barAvanzado(){
    var name = "";
    var year = 0;

    name = document.getElementById("nombre").value;
    year = document.getElementById("anho").value;

    yearFinal = parseInt(year);

    console.log(name + year);

    var userAge = 2023-yearFinal;
    console.log(userAge)

    if(userAge >= 18){
        console.log("Bienvenido XXXXX, puedes entrar al bar");
    } else {
        console.log("Lo siento XXXXX, no puedes entrar al bar");
    }
}

// Evaluar no solo por año sino tambien por dia y mes de nacimiento.
// Mensaje sea personalizado


// Crear una app que saque provecho del FOR