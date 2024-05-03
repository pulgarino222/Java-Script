//if-else con uso de operadores de comparación, Operadores de asignación con Resta y asignación, y algún método de string:

let number1 = Number(prompt("entered the first number"))

let number2 = Number(prompt("entered the second number"))
let resultado
if (number1 > number2) {
    if (number1 >= 0 && number2 >= 0) {
        resultado = number1 - number2
        console.log(resultado)

    } else if (number2 < 0 && number1 > 0) {
        resultado = number1 + number2
        console.log(resultado)
    } else {
        resultado = number1 - number2
        console.log(resultado)
    }

} else {
    console.log("numero1 no es mayor que numero2 ")
}

if (resultado < 0) {
    console.log("el resultado es negativo")
} else if (resultado > 0) {
    console.log("el resultado es positivo")
} else {
    console.log("no es ni positivo ni negativo es 0")
}


//2 switch case con uso de operadores de comparación, Método Math y Number.parseFloat(text):


while (true) {
    let opcion = String(prompt("indique que operacion matematica va a hacer suma, resta, multiplicación o división o presione 4 para salir"))
    switch (opcion) {
        case "suma":
            alert(`la suma de ${number1} y ${number2} es ${number1 + number2}`)
            break;
        case "resta":
            alert(`la resta de ${number1} y ${number2} es: ${number1 - number2}`)
            break;
        case "multiplicacion":
            alert(`la multiplicacion de ${number1} y ${number2} es: ${number1 * number2}`)
            break;
        case "division":
            alert(`la division de ${number1} y ${number2} es ${number1 / number2}`)
            break;

        default:
            break;
    }
    if (opcion === "4") {
        break
    }
}


//3 tabla de multiplicar
let result
for (let i = 1; i <= 10; i++) {
    result = (number1 * i).toString()
    console.log(`${number1} * ${i} = ${result}`)
}

//4

let edad = prompt("ingrese su edad")
let sueño = prompt("¿cuantas horas duerme diariamente?")

if (edad >= 18) {
    console.log(`la persona es mayor de edad su edad es ${edad}`)
} else {
    console.log(`la persona es menor de edad su edad es ${edad}`)
}

if (sueño > 7) {
    console.log(`duermes muy bien diario duermes${Math.round(sueño)} tienes buena salud entre edad y descanso`)
} else {
    console.log(`necesitas mejorar tu sueño no tienes un buen equilibrio ya que tu edad es ${edad} y tu horas de sueño son: ${sueño}`)
}

//5
let dia = prompt("ingrese un dia de la semana")
switch (dia) {
    case "lunes":
        alert(`es un dia laboral es ${dia}`)
        break;

    case "martes":
        alert(`es un dia laboral es ${dia}`)
        break;

    case "miercoles":
        alert(`es un dia laboral es ${dia}`)
        break;

    case "jueves":
        alert(`es un dia laboral es ${dia}`)
        break;

    case "viernes":
        alert(`es un dia laboral es ${dia}`)
        break;

    case "sabado":
        alert(`es un fin de semana ${dia}`)
        break;

    case "domingo":
        alert(`es un fin de semana ${dia}`)
        break;


    default:
        console.log("ingreso un dia no valido")
        break;
}
let primerLetra = dia.substring(0, 1).toUpperCase();
//el signo de ? es igual que un if 
let restoPalabra = dia.slice(1);
console.log(`Hoy es ${primerLetra}${restoPalabra}, por lo tanto ${dia === "sábado" || dia === "domingo" ? "es fin de semana" : "es un día laboral"}.`);

//6
let suma2=0;
for(let i=0 ; i<=number1;i++){
    if(i%2!=0){
        suma2+=i
    }
}
console.log(`la suma de los numeros impares hasta el ${number1} es = ${suma2}`)


//7