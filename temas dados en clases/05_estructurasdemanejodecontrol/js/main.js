
console.groupCollapsed("if , if else, if")



let hora=13

if(hora<8 && hora<17){
    console.info("estoy en mi jornada laboral")
}else{
    console.info("no estoy en mi jornada laboral")
}

// let mes=Number(prompt("ingresa el numero del mes actual"))
// if(mes<4&& mes>0){
//     console.info("esta en el primer trimestre")
// }else if(mes<7){
//     console.info("esta en el segundo trimestre")
// }else if(mes<9){
//     console.info("esta en el tercer semestre")
// }else if(mes<13){
//     console.info("esta en el cuarto trimestre")

// }else{
//     console.info("no ingreso ningun numero de mes valido")
// }

//desarrolla un algoritmo que muestre un menu de un restaurante y luego le presente al usuario estas opciones 1 solicitar almuerzo, 2 solicitar domicilio, 3 cancelar orden finalizar el programa



    // alert("bienvenido al restaurante nuestras opciones son 1 solicitar almuerzo 2domicilio 3 cancelar orden 4 salir sin elegir opcion")
    // let opcion=parseInt(prompt("ingrese una opcion"))
//     switch(opcion){
//     case 1:
//         alert("el menu que puede solicitar es: arroz con papa, sopa, tomate , y carne o bandeja paisa")
//         break;
//     case 2:
//         alert("se esta tomando su domicilio ")
//         break;
//     case 3:
//         alert("usted va a cancelar pedido")
//         break;
//     case 4:
//         alert("saliendo de el programa")
//         break;
//     default:
//         alert("ingresa una opcion correcta")
//     break;
// }
console.groupEnd()

console.groupCollapsed("bucles")

// for(let i=0; i<=10 ; i++){

//  console.log("hola mundo", i)

// }
//imprimir las tabals de multiplicar


console.groupCollapsed("tablas de mutliplicar con for")
function tablas(){
    
    let resultado=0
    for(let numero=0; numero<=10; numero++){
     console.log("la tabla del"+" "+numero+ " " +"es:")
    
     for (let i=0; i<10; i++){
         resultado=numero*i
         console.log(numero+"*"+i+" "+"="+" "+resultado)
     }
 }
 }
tablas()
console.groupEnd()
console.groupCollapsed("tablas con while")
let i=1
let resultado=0
while(i<=10){
    resultado= 9*i
    console.info("9"+"*"+i+" = "+ resultado)
}
console.log("")

console.groupEnd()

