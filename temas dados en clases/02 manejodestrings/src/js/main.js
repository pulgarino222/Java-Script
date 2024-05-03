alert("hola mundo")

// alternativas para declarar strings
// const option1="hola mundo"
// const option2=String("hola mundo")
// const option3= new String("hola mundo")
// console.info(option1)
// console.info(option2)
// console.info(option3)

// #extracion de datos
// const message="Este es un mensage para pruebas"
// document.write(message)
// // los morados tienen parametros los azules no
// console.info(message.length)
// // extraer un caracter 
// console.info(message[1])
// console.info(message.charAt(1))
// console.info(message.search("mensaje"))
// console.info(message.includes("m"))
// console.info(message.startsWith("este"))
// console.info(message.endsWith("pruebas"))




// concatenacion
// const messageOne="este es un mensaje para"
// const messageTwo="practicar concatenacion"
// const fullname="juan felipe pulgarin hernandez"

// console.info(messageOne)
// console.info(messageTwo)

// console.info("opcion 1 (+):"+messageOne+" "+messageTwo)
// console.info("option2 (,):",messageOne,messageTwo)
// console.info(`option 3 (\`): ${messageOne} ${messageTwo}`)
// console.info("opcion 4 concat():", messageOne.concat(" ",messageTwo))

// const header=`  
//  <header>
// <h1>hola mundo mi nombre ${fullname}</h1>
// </header>`

// document.write(header)

// depuracion de strings
// const message="HOla COmO eStas"
// document.write(message)

// console.info(message.toLowerCase())
// console.info(message.toUpperCase())



// limpieza de espacios
const mensage="              pulgarinhernandezjuanfelipe@gmail.com         "

console.info(mensage)
console.info(mensage.trimStart())
console.info(mensage.trimEnd())
console.info(mensage.trim())



//fragmentacion de un string
// const message="anita lava la tina por que se porto mal"
// document.write(message)
// console.info(message.substring(9))
// console.info(message.substring(0,10))

// console.info(message.slice(9))
// console.info(message.slice(0,10))

// console.info(message.replace("a","e"))
// // console.info(message.replaceALL("a","e"))
// //console.info(message .replaceALL(/[aeiou]/g,"p"))

// const menssage="Riwi"
// document.write(menssage)

// console.info(menssage.repeat(10))
// console.info(menssage.padStart(10, "*"))
// console.info(menssage.padEnd(10, "*"))

// Destruccion total
// const message="en riwi todos somos una familia"
// document.write(message)

// console.table(message.split(""))
// console.table(message.split(" "))
// console.table(message.split("",[2]))
// en el codigo anterior depende de los espacios entre las comillas nos dice la manera para separarlo
