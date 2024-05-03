// var username="juan felipe"
// el ; se puede usar por buenas practica var no se va a usar
// para declarar variables:
let userName=prompt("ingresa nombre de usuario")
let lastName=prompt("ingresa tu apellido")
const email=prompt("ingresa tu email")
let phone= prompt("ingresa tu numero")
let address=prompt("ingresa tu direccion")

// la variable constante no se puede reutilizar note que username se llama dos veces y se le podria dar un valor diferente en la segunda 
const age= Number(prompt("ingresa tu edad"))

if (typeof(age!=Number)){
    console.error("eso no es un numero")
    alert("ingrese un numero")
}
// console.log(userName)
// console.info(lastName)
// console.warn(age)
// warn es para mensajes de advertencia
// console.error(email)
// console.debug(phone)
// debug no se muestra en consolo o si pero solo se puede ver en el area de bugs son mensajes para nosotros programadores.
// alert(address)
// console.log(`%c${address}`,"background-color:black;borde-radius:50px;color:white")
// con este paso se importo una alerta que ya estaba echa de sweetalert son mas estilizadas
Swal.fire({
    title: "The Internet?",
    text: "That thing is still around?",
    icon: "question"
  });
// console.log(adress)
// console.info("Full name:"+userName+" "+lastName + age)
// console.info("Full name:",userName,lastName, age)
// console.info(`Full name: ${userName} ${lastName} ${age}`)
// con estas tres se obtiene el mismo resultado y estas son las maneras de imprimir en js console.info 
// console.info("information:"+email+ " phone:  "+""+ phone +age)
// console.info("information:",email,"phone: ",phone, age)
// console.info(`information: ${email} phone: ${phone}, ${age}`)

console.group("data basic")
    console.info(userName)
    console.info(lastName)
    console.info(age)
console.groupEnd()

console.group("data contact")
    console.info(address)
    console.info(phone)
    console.info(email)
console.groupEnd()
// de la manera anterior se agrupa

const coders=["lupe ortiz","mateo duarte","pepito perez"]
// creamos una lista
console.info(coders)
console.table(coders)
// estas son las formas para imprimir listas
// console.clear()

