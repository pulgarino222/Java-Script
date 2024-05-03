console.groupCollapsed("creacion de arrays");
const array1 = new Array(4); //4 casillas vacias//[,, , ,]
const array2 = Array("a", "b", "c");
const array3 = [];

console.log(array1);
console.log(array2);
console.log(array3);
console.groupEnd();

//

console.groupCollapsed("consultar datos de array");

const array = [1, 2, 3, 4, 5, "hola", "mundo", true, false, "alpha"];

console.log(array);

console.log("el array tiene", array.length, "elementos");
console.log(array[6]);
console.log(array.at(-1)); //con el menos uno llamo la ultima posicion sin saber cual va a ser la ultima posicion
console.log(array.includes("mundo")); //devuelve true or false
console.log(array.includes("zulu"));
console.log(array.indexOf("mundo")); //este devuelve la posicion en donde esta el elemento y si no esta retorna un -1

//El método lastIndexOf() se utiliza para buscar el índice de la última ocurrencia de un elemento dado dentro de un array. Retorna el índice del último elemento que coincide con el valor especificado, o -1 si no se encuentra. Aquí te muestro cómo funciona:

console.groupEnd();

console.groupCollapsed("actualizar elemento del array");
array[5] = "hello";
array.at(); //con este at no se puede actualizar ni nada solo sirve para ver la posicion

console.groupEnd();

console.groupCollapsed("agregar elementos al array");
console.log(array);
array[10] = "bravo";
array[11] = "charlie";
array.push("delta"); //push lo agrega en la ultima posicion
array[100] = "echo"; //DEJA VACIOS LOS ESPACIOS Y RESERVADOS
array.push("holA");
array.unshift("1"); //este no lo agrega al final si no al comienzo

console.groupEnd();

console.groupCollapsed("eliminar elementos de el array");
array.pop(); //elimina la ultima posicion no importa que posicion le ponga de parametro pero la guarda
console.log(array);
delete array[2]; //elimina la posicion que colocamos no guarda nada si no se pone posicion no borra nada
let posicioneliminada = array.pop();
console.log(posicioneliminada);
array.shift(); //elimina desde la primera posicion
console.groupEnd();

console.groupCollapsed("sumar arrays");
// const objeto1={
//     nombre:"charlie",
//     apellido:"delta"
// }

// const objeto2={
//     edad:"26 años",
//     ciudad:"medellin"
// }

// Object.assign(objeto1,objeto2)

// const objeto3={...objeto1,...objeto2}
// console.log(objeto1)
// console.log(objeto2)
// console.log(objeto3)

let primerosnumeros = [1, 2, 3, 4, 5];
let segundosNumeros = [6, 7, 8, 9, 10];

console.log(primerosnumeros);
console.log(segundosNumeros);

let sumanumeros = primerosnumeros.concat(
  segundosNumeros,
  "puedo seguir agregando cosas"
); //equivalente a usar los express operator con los objetos genera una nueva variable//para asignarlos y no sumarlos solo llamo la variable de el array

console.log(sumanumeros);

console.groupEnd();

console.groupCollapsed("listar informacion");
let listasupermercado = [
  "arroz",
  "arepa",
  "pan",
  "huevos",
  "guaro",
  "pescado",
  "cafe",
  "queso",
  "leche",
  "carne",
];
console.group("for");
for (let i = 0; i < listasupermercado.length; i++) {
  console.log(listasupermercado[i]);
}
console.groupEnd();
console.group("while");
let i = 0;
while (i < listasupermercado.length) {
  i++;
  console.log(listasupermercado[i]);
}
console.groupEnd();

//
console.group("for off"); //recorre la lista y los valores
for (const productos of listasupermercado) {
  console.log(productos.toUpperCase());
}
console.groupEnd();

console.group("foreach");//aca tambien se puede obtener los indices tambien
listasupermercado.forEach((producto,index) => {
  console.log(producto);
});

//el map es para alterar mi lista original
listasupermercado=listasupermercado.map(producto=>producto.toUpperCase())
console.log(listasupermercado)
console.groupEnd();
console.groupEnd();
