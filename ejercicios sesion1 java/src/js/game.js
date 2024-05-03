function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
let resultado=getRandomInt(10);
console.info(resultado)
// se imprime en consola por si no lo quiere adivinar
// con esto nos va a sacar el numero que le pongamos en el parametro de la funcion 
alert("bienvenido al juego para adivinar numero aleatorios ")
while(true){
    let numero=Number(prompt("ingrese un numero"))
    if (numero==resultado){
        alert("usted ha adivinado el numero")
        break
    }
    else if(numero<resultado){
        alert("debe ingresar un numero mayor al ingresado")
        

    }
    else if(numero>resultado){
        alert("debe ingresar un numero menor ")
    }
    else{
        alert("no ingreso un dato valido ingrese un dato valido")
        console.error("ha ingresado un numero incorrecto ")
    }
    
}





  
  
