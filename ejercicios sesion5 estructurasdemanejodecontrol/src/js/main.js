// Exercise 1 Verifica si un número es positivo y negativo.
console.groupCollapsed("Exercise 1 and 2")
let numberOne=Number(prompt("entered a number"))
if(numberOne>0){
    console.log(`el numero ingresado ${numberOne} es positivo`)
}else if(numberOne==0){
    console.log(`el numero ingresado no es ni positivo ni negativo es: ${numberOne}`)
}else{
    console.log(`el numero ingresado es negativo:${numberOne}`)
}
console.groupEnd()

// Exercise 3 Comprueba si un número es par o impar
console.groupCollapsed("Exercise 3 and 4")
if(numberOne%2==0){
    console.log(`el numero ${numberOne} es par`)
    
}else{
    console.log(`el numero es impar`
)
}
console.groupEnd()

// Exercise 5  Determina si un número es múltiplo de 5. 
console.groupCollapsed("Exercise 5")
if(numberOne%5===0){
console.log("el numero es multiplo de 5")
}else{
    console.log("el numero no es multiplo de 5")
}
console.groupEnd()

// Exercise 6 Verifica si un número es divisible entre 3. 
console.groupCollapsed("Exercise 6")
if(numberOne%3==0){
    console.log(`el numero ${numberOne} si es divisible entre 3`)
}else{
    console.log(`el numero ${numberOne} no es divisible entre 3`)
}
console.groupEnd()

// Exercise 7 Determina si un número es mayor que 100.
console.groupCollapsed("Exercise 7")
if(numberOne>100){
    console.log(`el numero ${numberOne} es mayor que 100`)
}else{
    console.log(`el numero ${numberOne} es menor que 100`)
}
console.groupEnd()

// Exercise 8 Verifica si un número es menor que -50.
console.groupCollapsed("Exercise 8")
if(numberOne<(-50)){
    console.log(`el numero ${numberOne} es menor que -50`)
}else{
    console.log(`el numero ${numberOne} es mayor que -50`)
}
console.groupEnd()

// Exercise 9 Comprueba si un número está en el rango de 20 a 50

console.groupCollapsed("Exercise 9")
if((numberOne>=20)&&(numberOne<=50)){
    console.log(`el numero ${numberOne} si esta en el rango de 20 a 50`)
}else{
    console.log(`el numero ${numberOne} no esta en el rango de 20 a 50`)
}
console.groupEnd()

// Exercise 10
console.groupCollapsed("Exercise 10")
if(numberOne===0){
    console.log(`el numero ${numberOne} es igual a 0`)
}else{
    console.log(`el numero no es igual a 0`)
}
console.groupEnd()

// Exercise 11 Verifica si un número es mayor que -10 y menor que 10.
console.groupCollapsed("Exercise 11")
if((numberOne>-10)&&(numberOne<10)){
    console.log(`el numero ${numberOne} es mayor que -10 y menor que 10`)
}else{
    console.log(`el numero ${numberOne} no mayor que -10 o no es menor que 10`)
}
console.groupEnd()

// Exercise 12 Determina si un número es un año bisiesto
console.groupCollapsed("Exercise 12")
if((numberOne%4==0)&&(numberOne%100!=0)){
    console.log(`el año ${numberOne} es un año bisiesto`)
}else{
    console.log(`el año ${numberOne} no es un año bisisesto`)
}
console.groupEnd()

// Exercise 13 1 Verifica si una persona es mayor de edad (mayor o igual a 18 años)
console.groupCollapsed("Exercise 13")
if(numberOne>=18){
    console.log(`la persona es mayor de edad su edad es: ${numberOne}`)
}else{
    console.log(`la persona no es mayor de edad su edad es: ${numberOne}`)
}
console.groupEnd()

// Exercise 15 Verifica si un número es un cuadrado perfecto
console.groupCollapsed("Exercise 15")
if((Math.sqrt(numberOne)===Math.floor(Math.sqrt(numberOne)))){
    console.log(`el numero ${numberOne} es un cuadrado perfecto`)
}else{
    console.log(`el numero ${numberOne} no es un cuadrado perfecto`)
}
console.groupEnd()

// Exercise 16 Determina si un número es un número de Fibonacci.
console.groupCollapsed("Exercise 16")
numerosdeserie=[0,1]
while(numerosdeserie[numerosdeserie.length-1]<numberOne){
    numerosdeserie.push(numerosdeserie[numerosdeserie.length-1]+numerosdeserie[numerosdeserie.length-2])
}
console.log(`el numero ${numberOne} es de fibonacci? R/= ${numerosdeserie.includes(numberOne)}`)
console.groupEnd()

// Exercise 17  Verifica si un número es una potencia de 2.
console.groupCollapsed("Exercise 17")
if(numberOne > 0 && (numberOne & (numberOne - 1)) === 0){
    console.log(`el numero ${numberOne} es potencia de dos`)

}else{
    console.log(`no es potencia de dos`)
}
console.groupEnd()

// Exercise 18 Determina si un número es un palíndromo.
console.groupCollapsed("Exercise 15")

console.groupEnd()

// Exercise 19
console.groupCollapsed("Exercise 19")
let cadena="JavaScript es un lenguaje popular"
console.log(`contiene la palbar java script? ${cadena.toLocaleLowerCase().includes("javascript")}`)
console.groupEnd()

// Exercise 20
console.groupCollapsed("Exercise 20")
if(cadena.length>10){
    console.log("la cadena tiene mas de 10 caracteres")
}else{console.log("la cadena tiene menos de 10 caracteres")}
console.groupEnd()

// Exercise 21
console.groupCollapsed("Exercise 21")
if(cadena===cadena.toLocaleLowerCase()){
    console.log("la cadena esta en minuscula")
}else{
    console.log("la cadena tiene mayusculas")
}
console.groupEnd()

