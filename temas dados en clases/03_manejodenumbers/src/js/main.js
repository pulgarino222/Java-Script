// #creacion de numeros Y declaracion de rangos

// let numero1=45.5626
// let numero1=Number(45)
// let numero1=new Number(45)

// para mostrar el numero maximo y el minimo hasta donde llega java 
// console.info(Number.MIN_VALUE)
// console.info(Number.MAX_VALUE)

// const numero1=5
// const numero2=10

// console.info(numero1+numero2)
// console.info(numero1-numero2)
// console.info(numero1/numero2)
// console.info(numero1*numero2)


// // con esto vemos el como poner una condicion de que sea int o float
// numero1=Number.parseInt(prompt("ingrese un numero"))
// numero2=Number.parseFloat(prompt("ungresa tu numero decimal"))



// console.info(typeof(numero1))
// console.info(typeof(numero2))

// console.info(Number.isInteger(numero1))
// console.info(Number.isInteger(numero2))




// let numero=45
// console.info(numero.toString())
// // con esta linea lo convertimos a binario
// console.info(numero.toString(2))
// console.info(numero.toString(8))
// console.info(numero.toString(16))




// const numeroEjemplo=4.14566352652

// // con esto le digo cuantos decimales necesito que tenga
// console.info(numeroEjemplo)
// console.info(numeroEjemplo.toFixed(2))
// console.info(numeroEjemplo.toFixed(3))
// console.info(numeroEjemplo.toFixed(2))





// // como recortar un numero con su exponencial
// const numeroEjemplo=45555654412112
// console.info(numeroEjemplo.toExponential())
// console.info(Number.MAX_VALUE)
// console.info(numeroEjemplo.toExponential(45))
// console.info(numeroEjemplo.toExponential(100))





// clase math 

// // formas para poner una potenciacion de numeros
// console.log(2*2*2*2)
// console.log(Math.pow(2, 4))
// console.log(2**4)


// console.log(Math.sqrt(16))
// console.log(Math.cbrt(8))
// console.log(Math.cos(0))
// valos absoluto
// console.log(Math.abs(-85))



// esta condicional hace lo mismo que el metodo de abajo
// let numero=78


// if(numero>0){
//     console.log("es positivo")
// }else{
//     console.log("es negativo")

// }

// console.log(Math.sign(numero))


// console.info(Math.max(48,99,55,2,66.4,77))
// console.info(Math.min(48,99,55,2,66.4,77))






// // para redondear
// let numero=2.5
// document.write(numero)

// console.info(Math.round(numero))
// console.info(Math.floor(numero))
// console.info(Math.ceil(numero))


// aleatorio
// let numero= Math.round((Math.random()*100))
// document.write(numero)


// consultar como generar un numero aleatorio entre una funcion

// aca lo redondea por el .round por eso llega al 92
// la multiplicacion es: (valormax-valormin)+valormin
// let numero= Math.round((Math.random()*(92-90)+90))
// document.write(numero)