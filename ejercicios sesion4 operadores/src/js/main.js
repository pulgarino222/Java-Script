console.groupCollapsed("Ejercicio 1");
// Ejercicio 1 ¿Es 35 mayor que 25?
console.log("¿Es 35 mayor que 25?"+(35>25))
console.groupEnd();

console.groupCollapsed("Ejercicio 2");
// 2. ¿Es 45 menor que 30?
console.log("¿Es 45 menor que 30?"+(45<30))
console.groupEnd();

console.groupCollapsed("Ejercicio 3");
// 3. ¿Son 50 y "50" iguales?
console.log("¿Son 50 y 50 iguales?"+(50 =="50"))
console.groupEnd();

console.groupCollapsed("Ejercicio 4");
// ¿Es 40 estrictamente igual a 40 convertido a número?
  console.log("¿Es 40 estrictamente igual a 40 convertido a número?"+(40==Number(40)))
console.groupEnd();

console.groupCollapsed("Ejercicio 5");
// 5. ¿Son "apple" y "orange" diferentes?
console.log(`5. ¿Son "apple" y "orange" diferentes?"${("apple"!="orange")}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 6");
// 6. ¿Es "apple" estrictamente diferente de "Apple"?
console.log(`¿Es "apple" estrictamente diferente de "Apple"? ${"apple"==="Apple"}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 7");
// 7. ¿Cuál es el valor de una variable sin definir?
let variable;
console.info(`¿Cuál es el valor de una variable sin definir? ${variable}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 8");
//8. ¿Cuál es el tipo de dato de una variable sin definir?
console.info(`¿Cuál es el tipo de dato de una variable sin definir? ${typeof(variable)}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 9");
// 9. ¿Es null igual a undefined?
let var1=null
let var2=undefined
console.log(`¿Es null igual a undefined? ${null==undefined}`)

console.groupEnd();

console.groupCollapsed("Ejercicio 10");
// 10.¿Son null y undefined estrictamente iguales?
console.log(`10.¿Son null y undefined estrictamente iguales? ${null==undefined}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 11");
// 11.¿Es "2.75" mayor que 2.5?
console.log("11.¿Es 2.75 mayor que 2.5?"+(2.75>2.5))
console.groupEnd();

console.groupCollapsed("Ejercicio 12");
//.¿Es "2.75" mayor que 2.75?
console.log(`¿Es "2.75" mayor que 2.75? ${2.75>2.75}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 13");
// 13.¿Es "2.75" mayor o igual a 2.75?
console.log(`13.¿Es "2.75" mayor o igual a 2.75? ${2.75>=2.75}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 14");
//14.¿Es "2.75" menor o igual a 2.75?
console.log(`¿Es "2.75" menor o igual a 2.75? ${2.75<=2.75}` )
console.groupEnd();

console.groupCollapsed("Ejercicio 15");
// 15.¿Es "2.75" un número mayor a 2.8?
console.log(`15.¿Es "2.75" un número mayor a 2.8? ${"2.75">2.8}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 16");
// 16.¿Es "2.75" un número menor a 2.7?
console.log("16.¿Es 2.75 un número menor a 2.7?"+("2.75"<2.7))
console.groupEnd();

console.groupCollapsed("Ejercicio 17");
// 17.¿Es el nombre "John" diferente de "john"?
console.log(`¿Es el nombre John diferente de john? ${"John"!="john"}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 18");
// 18.¿Es el nombre "John" diferente de "Jon"?
console.log(`¿Es el nombre John diferente de Jon? ${"Jhon"!="Jon"}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 19");
// 19.¿Es la edad 30 estrictamente diferente de "30"?
console.log(`19.¿Es la edad 30 estrictamente diferente de "30"? ${30!=="30"}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 20");
// 20.¿Cuál es el resultado de desplazar a la derecha 25 dos veces en bits?
console.log(`20.¿Cuál es el resultado de desplazar a la derecha 25 dos veces en bits? ${25>>2}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 21");
//21.¿Cuál es el resultado de desplazar a la izquierda 8 tres veces en bits?
console.log(`21.¿Cuál es el resultado de desplazar a la izquierda 8 tres veces en bits? ${8<<3}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 22");
// 22.¿Son 15 y 15 iguales?
console.log(`22.¿Son 15 y 15 iguales? ${15 == 15}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 23");
//23.¿Son 20 y 30 diferentes?
console.log(`23.¿Son 20 y 30 diferentes? ${20 != 30}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 24");
// 24.¿Es "15" mayor que 30?
console.log(`24.¿Es "15" mayor que 30? ${20<40}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 25");
//25.¿Es 20 menor que 40?
console.log(`25.¿Es 20 menor que 40? ${20<40}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 26");
// 26.¿Es 100 mayor o igual a "99"?
console.log(`26.¿Es 100 mayor o igual a "99"? ${100>=99}` )
console.groupEnd();

console.groupCollapsed("Ejercicio 27");
// 27.¿Es 500 estrictamente igual a "500"?
console.log(`27.¿Es 500 estrictamente igual a "500"? ${500==="500"}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 28");
// 28.¿Es 750 estrictamente igual a 750?
console.info(`28.¿Es 750 estrictamente igual a 750? ${750===750}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 29");
// 
console.log(`29.¿Es 5 estrictamente diferente de "5"? ${5 !=="5"}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 30");
//30.¿Es 3 mayor que 5 y 4 menor que 6? (Operadores lógicos)
console.log(`¿Es 3 mayor que 5 y 4 menor que 6?  ${(3>5)&&(4<6)}`)
console.groupEnd();


