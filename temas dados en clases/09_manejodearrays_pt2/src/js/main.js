1console.group("map");
const array1 = ["lucas", "pablo", "maria", "pedro"];

let array2 = [];

// //estas son las 3 formas de declarar funciones
// array2=array1.map(function (nombre){
//      return nombre.toLocaleUpperCase()

// })

// array2=array1.map(function(nombre){return nombre.toUpperCase()})

// array2=array1.map(nombre => nombre.toUpperCase)

////////////////////////////////////////////////// esto es lo mismo pero con forEach
array1.forEach((nombres) => {
  array2.push(nombres.toUpperCase());
});
console.log(array1);
console.log(array2);
console.groupEnd();

console.groupCollapsed("reverse y toReversed");

const alphabet = ["a", "b", "c", "d", "e"];
console.log(alphabet);

let alphabetalrevez = alphabet.reverse();
let alphabetolrevez = alphabet.toReversed();
//alphabet ya esta invertido por reverse
console.log(alphabetalrevez);
console.log(alphabetolrevez);

//alphabet  to reverse
//
let alfabetoMilitar = [
  "Alfa",
  "Bravo",
  "Charlie",
  "Delta",
  "Echo",
  "Foxtrot",
  "Golf",
  "Hotel",
  "India",
  "Juliett",
  "Kilo",
  "Lima",
  "Mike",
  "November",
  "Oscar",
  "Papa",
  "Quebec",
  "Romeo",
  "Sierra",
  "Tango",
  "Uniform",
  "Victor",
  "Whiskey",
  "X-ray",
  "Yankee",
  "Zulu",
];

let alrevez = alfabetoMilitar.reverse();
console.log(alrevez);

//el torever semantiene la lista original intacta
console.log(alfabetoMilitar.toReversed());
//nos permite ordenar listas en orden alfabetico 
console.groupCollapsed("sort");
let nombrescoders = [
  "santiago",
  "reycon",
  "narciris",
  "marlon",
  "shirly",
  "edson",
  "esteban",
  "felipe",
];

nombrescoders.sort();
console.table(nombrescoders);

let nombresCoders = [
  "santiago",
  "reycon",
  "narciris",
  "pablo",
  "carolina",
  "marlon",
  "brandon",
  "edson",
  "esteban",
  "carlos",
  "shirly",
  "ana",
  "ignacio"
];

//con la lista de nombres van a crear 2 listas nuevas filtrar,la primera,todos los nombre que comienzen por vocal, la segunda lista todos los nombres que no comienzen por vocal
// let nombresVocal=codersOrdenados.filter(function (nombre){
//     if(codersOrdenados.startsWith("a")||nombre.startsWith("e")
//         codersOrdenados.startsWith("a"))
//     })
    

console.log(nombresVocal)

//tambien altera la lista original
let codersOrdenados = nombresCoders.toSorted().toReversed();
console.table(nombresCoders);
console.table(codersOrdenados);

//crea una lista del super mercado con mminimo 10 utensilios ordenala de manera ascendente  y descendente pero manten la lista original intacta

let mercado = [
  "leche",
  "arroz",
  "seda",
  "mantequilla",
  "carne",
  "milo",
  "jamon",
  "juevos",
  "cebolla",
  "mangos",
];






console.groupEnd();

console.groupCollapsed("filter")


//saca los numero pares y los no pares
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// let numerospares=numeros.filter(function (numero){
//     return numero%2===0
// })

// let numerosImpares=numeros.filter(numeros => numero%2 !==0)

// numeros.forEach(numero=>{
//     if(numero%2===0){
//         numerospares.push()
//     }else
// })


console.groupEnd()

console.group("every")

let numerosnaturales=[23,5,4,5,5,1,5,2]
//este metodo para las listas devuelve un true o un false 
let respuesta = numerosnaturales.every(element => element>0)
//este metodo para las listas devuelve un true o un false 
let respuesta2 = numerosnaturales.some(element => element>0)
console.log(respuesta)
console.log(respuesta2)
console.groupEnd()