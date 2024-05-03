console.groupCollapsed("tipos de datos")

let variable1=156
let variable2="854"
let variable3="hola mundo"
let variable4=true
let variable5=undefined
let variable6=null
let variable7=[1,2,3,"hola"]
let variable8={"hola":4,"hola:":"caracter"}
let variable9=function name(){}



console.log(typeof("variable 1:",variable1))
console.log(typeof("variable 2:",variable2))
console.log(typeof("variable 3",variable3))
console.log(typeof("variable 4:", variable4))
console.log(typeof("variable 5:", variable5))
console.log(typeof("variable 6:", variable6))
console.log(typeof("variable 7:", variable7))
console.log(typeof("variable 8:", variable8))
console.groupEnd()

//operadores aritmeticos
console.groupCollapsed("operadores aritmeticos")
let numero1=15
let numero2=4

let suma=numero1 + numero2
let resta=numero1-numero2
let multiplicacion = numero1*numero2
let division= numero1/numero2
let potencia= numero1**numero2
let residuo= numero1%numero2


console.log("suma: ", suma)
console.log("resta:", resta)
console.log("multiplicacion: ", multiplicacion)
console.log("division", division)
console.log("potencia", potencia)
console.log("residuo", residuo)
console.groupEnd()

//operadores de incremento y decremento
console.groupCollapsed("operadores de incremento")
let numdeincremento=10
let numdedecenso=100
// document.write(numdeincremento)
numdeincremento++//11
numdeincremento++//12
numdeincremento++//13
numdeincremento++//14
numdeincremento++//15
numdeincremento+=2//17
numdeincremento+=2//19
numdeincremento++//20
console.log(numdeincremento)
numdedecenso--
numdedecenso--
numdedecenso--
numdedecenso-=40
numdedecenso-=40
numdedecenso-=40
console.log(numdedecenso)
console.groupEnd()

//operadores de comparacion
console.groupCollapsed("operadores de comparacion")
console.log(5+9==20)//false
//comparador de igualdad
console.log(4==4)//true
console.log(4== "4")//true
console.log(4==="4")//false
console.log("hola mundo"=="Hola mundo")//false

//coparador de diferencia
console.log(2!=9)
console.log(2!=2)

console.log(2 !== "2")//false

// const contraseña="12345"
// const contraseñaconfirmacion="12345"

// if(contraseña==contraseñaconfirmacion){
// console.error("usuario registrado")
// }
// let numerofactura="12458"
// numerofactura=parseInt(numerofactura)
// console(numerofactura ===12458)

//comparador mayor que

console.log(8 > 5)//true
console.log(8 < 8)//false
console.log(8 <= 8)//true

// let edad=12
// if(edad<18){
//     console.error("tienes peligro de que te hagarre la policia")

// } else if(edad>=18){
//     console.warn("puedes ingerir alchool,pero tambien te agarra el ejecito")
// }
console.groupEnd()



//operadores de comparacion
console.groupCollapsed("operadores de comparacion")
//operador AND
//          true    false=false
console.log(1<5 && 8>2)
//            false                 true 
console.log("usuario"=="admin" && "1234"==1234 && "rol"==true)

//operador OR

console.log(1 > 6|| 5 < 1 || 8>2 || 9>50)
// con una sola de verdadera ya es verdadera

console.log(("usuario"=="usuario" && 5>2) || ("rol"==="rol" && 6==="6"))

// operador not
let variable= false
console.log(!variable)//true invierte el valor booleano !
console.groupEnd()

