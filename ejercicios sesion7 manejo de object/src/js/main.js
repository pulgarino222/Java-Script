//Crea un objeto llamado persona con propiedades como nombre, edad y ciudad.

let persona = {
    nombre: "juan felipe",
    edad: new Date("1999-11-06 14:00:00"),
    ciudad: "medellin"
}

//2. Agrega una propiedad adicional al objeto persona que represente su ocupación. 
persona.ocupacion = "estudiante"
//3. Accede a una propiedad del objeto persona y muestra su valor en la consola.
console.log(persona.nombre)

//4. Crea otro objeto llamado libro con propiedades como título, autor y año de publicación.
let libro = {
    titulo: "100 años de soledad",
    // autor: "gabriel garcia marquez",
    añoDePublicacion: new Date("1954-11-06")
}
//5 Combina las propiedades de los objetos persona y libro en un nuevo objeto llamado informacion.
let informacion = { ...libro, ...persona };
console.log(informacion)

//6 Cambia el valor de una propiedad en el objeto persona. 
persona.ciudad = "bogota"
//7 Elimina una propiedad del objeto libro.
delete libro.autor
// 8 Crea un objeto llamado coche con propiedades como modelo, marca y año.
coche = {
    modelo: "2026",
    marca: "chevrolete",
    año: "2024",
    mensaje: function () {
        console.log("bienvenido al metodo de el objeto coche")
    }
}
//9. Muestra todas las propiedades del objeto coche en la consola.
console.log(coche)

//10. Agrega un método al objeto coche que imprima un mensaje en la consola.
coche.mensaje()

//11. Crea un objeto llamado circulo con propiedades como radio y color. 
circulo = {
    radio: 25,
    color: "amarillo"
}

//12. Calcula el área del círculo utilizando la fórmula A = πr² y muestra el resultado. 
let area = (3.1416) * ((circulo.radio) ** 2)
console.log(`el resultado de el area de un circulo con radio ${circulo.radio} es ${area}`)

//13. Crea un objeto llamado rectangulo con propiedades como ancho y alto.
let rectangulo = {
    ancho: 26,
    alto: 10
}
//14. Calcula el perímetro del rectángulo utilizando la fórmula P = 2 * (ancho + alto) y muestra el resultado. 

let p = 2 * ((rectangulo.ancho) + (rectangulo.alto))
console.log(`el perimeto de el rectangulo con los datos que estan en el objeto rectangulo es ${p}`)

//15 . Combina las propiedades de los objetos circulo y rectangulo en un nuevo objeto llamado formas.
let formas = { ...circulo, ...rectangulo }
//16. Crea un objeto llamado computadora con propiedades como marca, modelo y precio. 
let computadora = {
    marca: "asus",
    modelo: "rog strix",
    precio: "2,800,000"
}
//17. Muestra el precio de la computadora en la consola. 
console.info(computadora.precio)
// 18. Agrega una propiedad al objeto computadora que indique si tiene o no una tarjeta gráfica.
computadora["¿tiene grafica?"] = "si"

// 19.Crea un objeto llamado mascota con propiedades como nombre, especie y edad. 

mascota = {
    nombre: "firulais",
    especie: "bulldog",
    edad: new Date("2009-11-23 02:00:00")
}
//20. Muestra en la consola la especie de la mascota en mayúsculas.
console.log(mascota.especie.toUpperCase())

//21. Crea un objeto llamado fruta con propiedades como nombre y color

let fruta = {
    nombre: "mango",
    color: "amarillo",
    maduro: function () {
        console.log("el color de el mango indica que esta maduro")
    }

}

//22.Agrega un método al objeto fruta que imprima un mensaje indicando si la fruta está madura.
fruta.maduro()

//23. Crea un objeto llamado estudiante con propiedades como nombre, edad y calificaciones.
let estudiante = {
    nombre: "pepito",
    edad: new Date("2002-05-24 05:00:00"),
    calificaciones: {
        fisica: 5,
        quimica: 2,
        matematicas: 4,
        ingles: 2,

    }
}

//24 Muestra en la consola el promedio de las calificaciones del estudiante
//con object.values convierto el objeto en lista de lo contrario ese tipo de for no funcionaria(forof)
let suma = 0
for (let iterator of Object.values(estudiante.calificaciones)) {
    suma += iterator
    console.log(`las calificaciones son ${iterator}`)
}
console.log(`el promedio de las calificaciones de el estudiante es: ${suma / 4}`)

//25. Agrega una propiedad al objeto estudiante que indique si ha aprobado o no
let aprobo = suma / 4;
estudiante.aprobo = "si"

//26. Crea un objeto llamado bolsa con propiedades como tamaño y color. 
let bolsa = {
    tamaño: "36 cm",
    color: "azul"
}

//27. Muestra en la consola un mensaje que indique la capacidad de la bolsa (tamaño). 
console.log(`la capacidad o el ancho de la bolsa es: ${bolsa.tamaño}`)

//28  Agrega un método al objeto bolsa que cambie su color
bolsa.cambioDeColor=function(){
    return bolsa.color="amarillo"
}
bolsa.cambioDeColor()
console.log(bolsa)

// 29 Crea un objeto llamado telefono con propiedades como marca, modelo y sistema operativo.
telefono={
    marca:"samsung",
    modelo:"A30004",
    sistemaoperativo:"android20.5"
}
//.30 Muestra en la consola un mensaje indicando el sistema operativo del teléfono.
console.log(telefono.sistemaoperativo)

//31. Agrega una propiedad al objeto telefono que represente la cantidad de memoria RAM. 
telefono.memoriaram="16 gb"

//32. Crea un objeto llamado animal con propiedades como tipo y sonido.
animal={
    tipo:"perro",
    sonido:"ladrido",
}

//33. Muestra en la consola un mensaje que indique el sonido del animal. 
console.log(animal.sonido)

// 34. Agrega un método al objeto animal que imprima un mensaje indicando su tipo y sonido
animal.mensaje=function(){
    console.log(`el tipo es ${animal.tipo} , y el sonido es: ${animal.sonido}`)
}
animal.mensaje()
//35. Crea un objeto llamado vuelo con propiedades como aerolínea, número de vuelo y hora de salida. 
vuelo={
    areloniea:"latam",
    numerodevuelo:"4552245",
    horadesalida:"5:00"
}

//36. Muestra en la consola un mensaje que indique la aerolínea y el número de vuelo.
console.log(`la erolinea es: ${vuelo.areloniea} y el numero de vuelo es: ${vuelo.numerodevuelo}`)

//37. Agrega una propiedad al objeto vuelo que represente el destino del vuelo.
vuelo.destino="londres"
//38. Crea un objeto llamado jugador con propiedades como nombre, equipo y posición. 
jugador={
    nombre:"falcao garcia",
    equipo:"colombia",
    posicion:"delantero"
}
//39. Muestra en la consola un mensaje que indique el nombre y el quipo del jugador. 
console.log(`${jugador.nombre}y el equipo es: ${jugador.equipo}`)

//40  Agrega un método al objeto jugador que imprima un mensaje indicando su posición en el equipo.
jugador.mensajeju=function(){
    console.log(`la posicion en el equipo es ${jugador.posicion}`)
}
jugador.mensajeju()

