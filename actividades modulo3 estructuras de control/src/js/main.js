//ejercicio 1

let numero1= Number(prompt("ingrese un numero"))
let numero2= Number(prompt("ingrese un segundo numero"))

if(numero1>numero2){
    let resta=new String(numero1-numero2)
    if(Math.sign(resta)===1){
        let respuesta=`es ${resta} un positivo`
        console.log(respuesta.toString())

    }else{
        console.log(`es ${resta} un negativo`)
    }

}else{
    console.log("es menor")
}

//ejercicio 2
let operacion =prompt("diga que operacion va a hacer").toLocaleLowerCase()
let respuesta;
switch (operacion) {
    case "sumar":
        respuesta= (numero1+numero2)
        respuesta=parseFloat(Math.round(respuesta))
        console.log(`la suma es ${respuesta.toFixed(1)}`)
        break;
    case "restar":
        respuesta= (numero1-numero2)
        respuesta=parseFloat(Math.round(respuesta))
        console.log(`la resta es ${respuesta}`)
        break;

    case "multiplicar":
        respuesta= (numero1*numero2)
        respuesta=parseFloat(Math.round(respuesta))
        console.log(`la multiplicacion es ${respuesta}`)
        break;

    case "dividir":
        respuesta= (numero1/numero2)
        respuesta=parseFloat(Math.round(respuesta))
        console.log(`la division es ${respuesta}`)
        break;

    default:
        break;
}

// ejercicio 

