// función para imprimir booleano
// const respuesta = confirm("Hola mundo") //DESCOMENTAR PARA PROBAR
// console.log(respuesta); //DESCOMENTAR PARA PROBAR

//### FUNCIÓN DECLARATIVA ###
//función
//parametro
//Argumento
function saludar(grupo) {
    console.log(`Hola ${grupo} hoy es un nuevo dia`)
}
saludar("enrmeras")
saludar("policias")
saludar("coders")

// Ejercicio imprimir hola y hasta luego con un booleano
function notification(name) {
    let question = confirm(`Hola ${name} `)

    if (question === false) {
        alert(`Hasta luego ${name} `)
    }
}
// notification("Alexis") //DESCOMENTAR PARA PROBAR

//Ejemplo Sumar 2 números
function sumarDosNumeros(numero1, numero2) {
    let respuesta = numero1 + numero2
    return respuesta
}
let total = sumarDosNumeros(2, 6)
console.log(`la suma dio un total de ${ total}`);

//Ejercicio 3
//usuario y contraseña, si el usuario "admin" y la contraseña es 12345 
//debo mostrar el mesaje "bienvenido NombreDelUsuario"
//En caso de que el login no sea correto debe mostrar por consola y por alerta una mesaje de error
function login(){
    let usuario = prompt("ingrese su usuario");
    let password = prompt("ingrese contraseña");

    if (usuario == "admin" && password == "12345"){
        // alert(`bienvenido ${usuario}`); //DESCOMENTAR PARA PROBAR
    }
    else{
        // alert("usuario o contraseña incorrectos"); //DESCOMENTAR PARA PROBAR
    }
}

login();

//Diferencia entre función declarativa y expresiva es que la declarativa se puede llamar antes de crearla sin que saque error.
//La función expresiva solo se puede llamar después de crearla y se crea dntro de una variable el resulta al final es igual.

//EJEMPLO DE FUNCIÓN DECLARATIVA LLAMÁNDOLA ANTES DE CREARLA // uno()
uno()
function uno(params) {
    console.log(`esta es una función declarativa`);
}


//EJEMPLO DE FUNCIÓN EXPRESIVA LLAMÁNDOLA DESPUÉS DE CREARLA // dos()
const dos=  function (params) {
    console.log(`esta es una función expresiva`);
}

dos()