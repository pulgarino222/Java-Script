// 1. Declara dos variables, num1 y num2, asignándoles valores numéricos diferentes y muestra en consola el resultado de sumarlos.
console.groupCollapsed("Ejercicio 1");
const num1 = 26
const num2 = 10
console.log(num1 + num2);
console.groupEnd();

// 2. Define dos variables de tipo string, simpleString1 y simpleString2, con valores "Hola" y "Mundo" respectivamente. Muestra en consola la longitud total de ambas cadenas.
console.groupCollapsed("Ejercicio 2");
let simpleString1 = "Hola"
let simpleString2 = "Mundo"
console.log((simpleString1 + simpleString2).length);
console.groupEnd();

// 3. Crea dos variables de tipo string usando la función String(): stringUsingString1 con el valor "JavaScript" y stringUsingString2 con el valor "Ejercicios".
console.groupCollapsed("Exercise 3")
const stringUsingString1 = String("JavaScript")
const stringUsingString2 = String("Ejercicios")
console.log(`${simpleString1} ${simpleString2}`);
console.groupEnd()

// 4. Utiliza el operador new para crear dos variables de tipo string: stringUsingNewString1 con el valor "Concatenar" y stringUsingNewString2 con el valor "Strings".
console.groupCollapsed("Exercise 4")
const stringUsingNewString1 = new String("Concaternar")
const stringUsingNewString2 = new String("Strings")
console.log(`${stringUsingNewString1} ${stringUsingNewString2}`);
console.groupEnd()

// 5. Calcula e imprime en consola la posición del substring "la" en la variable simpleString1.
console.groupCollapsed("Exercise 5")
console.log(simpleString1.search("la"));
console.groupEnd()

// 6. Comprueba si la variable simpleString2 contiene el substring "ndo" e imprime el resultado en consola.
console.groupCollapsed("Exercise 6")
console.log(simpleString2.includes("ndo"));
console.groupEnd()

// 7. Concatena las variables simpleString1 y simpleString2 utilizando el método concat() y muestra el resultado en consola.
console.groupCollapsed("Exercise 7")
console.log(simpleString1.concat(" ", simpleString2));
console.groupEnd()

// 8. Concatena las variables simpleString1 y simpleString2 utilizando el operador + y muestra el resultado en consola.
console.groupCollapsed("Exercise 8")
console.log(simpleString1 + " " + simpleString2);
console.groupEnd()

// 9.	Utiliza template strings para concatenar las variables simpleString1 y simpleString2 e imprime el resultado en consola.
console.groupCollapsed("Exercise 9")
console.log(`${simpleString1} ${simpleString2}`);
console.groupEnd()

// 10.	Declara una variable stringWithSpaces1 con el valor " TrimStart" y otra variable stringWithSpaces2 con el valor "TrimEnd ". Elimina los espacios en blanco al principio y al final de ambas cadenas e imprime el resultado en consola.
console.groupCollapsed("Exercise 10")
const stringWithSpaces1 = " TrimStart"
const stringWithSpaces2 = "TrimEnd "
console.log(stringWithSpaces1.trimStart());
console.log(stringWithSpaces2.trimEnd());
console.groupEnd()

// 11.	Reemplaza la letra 'o' por la letra 'i' en la variable simpleString1 e imprime el resultado en consola.
console.groupCollapsed("Exercise 11")
console.log(simpleString1.replace("o", "i"));
console.groupEnd()

// 12. Utiliza el método slice() para obtener los primeros tres caracteres de la variable simpleString2 e imprime el resultado en consola.
console.groupCollapsed("Exercise 12")
console.log(simpleString2.slice(0, 3));
console.groupEnd()

// 13. Utiliza el método substring() para obtener una subcadena de la variable simpleString2 que comience en el índice 2 e imprime el resultado en consola.
console.groupCollapsed("Exercise 13")
console.log(simpleString2.substring(1));
console.groupEnd()

// 14.	Repite la variable simpleString1 dos veces utilizando el método repeat() e imprime el resultado en consola.
console.groupCollapsed("Exercise 14")
console.log(simpleString1.repeat(2));
console.groupEnd()

// 15.	Divide la cadena "Esto es una oración de ejemplo" en un array de palabras y muestra el resultado en consola.
console.groupCollapsed("Exercise 15")
let array = "Esto es una oración de ejemplo"
console.table(array.split(" "))
console.groupEnd()

// 16. Convierte la variable simpleString2 a mayúsculas utilizando el método toUpperCase() e imprime el resultado en consola.
console.groupCollapsed("Exercise 16")
console.log(simpleString2.toUpperCase());
console.groupEnd()

// 17. Convierte la variable simpleString1 a minúsculas utilizando el método toLowerCase() e imprime el resultado en consola.
console.groupCollapsed("Exercise 17")
console.log(simpleString1.toLowerCase());
console.groupEnd()

// 18.	Declara una variable booleana y asígnale un valor booleano. Muestra en consola su tipo de dato utilizando el operador typeof().
console.groupCollapsed("Exercise 18")
let VarBool = true
console.log(typeof (VarBool));
console.groupEnd()

// 19.	Declara una variable arreglo y asígnale un array con al menos tres elementos. Muestra en consola la longitud del array.
console.groupCollapsed("Exercise 19")
const arreglo = ["a", "e", "i", "o", "u"];
console.log(arreglo.length);
console.groupEnd()

// 20. Declara una variable objeto y asígnale un objeto con al menos tres propiedades. Muestra en consola una de las propiedades del objeto.
console.groupCollapsed("Exercise 20")
let objeto = {
    propiedad1: "v1",
    propiedad2: "v2",
    propiedad3: "v3"
};
console.log(objeto.propiedad2);
console.groupEnd()

// 21.	Declara una variable nulo y asígnale el valor null. Muestra en consola su tipo de dato utilizando el operador typeof().
console.groupCollapsed("Exercise 21")
let nulo = null
console.log(typeof (nulo));
console.groupEnd()

// 22. Declara una variable indefinido y no le asignes ningún valor. Muestra en consola su tipo de dato utilizando el operador typeof().
console.groupCollapsed("Exercise 22")
let indefinido
console.log(typeof (indefinido));
console.groupEnd()

// 23. Declara una variable decimal y asígnale un número decimal. Muestra en consola su tipo de dato utilizando el operador typeof().
console.groupCollapsed("Exercise 23")
let decimal = parseFloat(10.5)
console.log(typeof (numfloat));
console.groupEnd()

// 24.	Declara una variable negativo y asígnale un número negativo. Muestra en consola su tipo de dato utilizando el operador typeof().
console.groupCollapsed("Exercise 24")
let negativo = -10
console.log(typeof (negativo));
console.groupEnd()

// 25.	Utiliza el método indexOf() para encontrar la posición del carácter 'a' en la cadena "Casa" e imprime el resultado en consola.
console.groupCollapsed("Exercise 25")
let position = "casa"
console.log(position.indexOf("a"));
console.groupEnd()

// 26.	Comprueba si la cadena "Javascript" incluye el substring "Script" utilizando el método includes() e imprime el resultado en consola.
console.groupCollapsed("Exercise 26")
let cadena = "Javascript"
console.log(cadena.includes("Script"));
console.groupEnd()

// 27. Concatena las cadenas "Hola" y "Mundo" utilizando el método concat() y muestra el resultado en consola.
console.groupCollapsed("Exercise 27")
console.log(simpleString1.concat(" ", simpleString2));
console.groupEnd()

// 28. Concatena las cadenas "Hola" y "Mundo" utilizando el operador + y muestra el resultado en consola.
console.groupCollapsed("Exercise 28")
console.log(simpleString1 + " " + simpleString2);
console.groupEnd()

// 29.	Utiliza template strings para concatenar las cadenas "Hola" y "Mundo" e imprime el resultado en consola.
console.groupCollapsed("Exercise 29")
console.log(`${simpleString1} ${simpleString2}`);
console.groupEnd()

// 30.	Declara una variable cadenaConEspacios con el valor " Ejemplo con espacios ". Utiliza el método trimStart() y trimEnd() para eliminar los espacios en blanco al principio y al final, respectivamente, e imprime el resultado en consola.
console.groupCollapsed("Exercise 30")
let cadenaConEspacios = " Ejemplo con espacios "
console.log(cadenaConEspacios.trimStart().trimEnd());
console.groupEnd()

// 31.	Reemplaza la palabra "azul" por "rojo" en la cadena "El cielo es azul" utilizando el método replace() e imprime el resultado en consola.
console.groupCollapsed("Exercise 31")
let cadenaremp = "El cielo es azul"
console.log(cadenaremp.replace("azul","rojo"));
console.groupEnd()

// 32.	Utiliza el método slice() para obtener los últimos cuatro caracteres de la cadena "Programación" e imprime el resultado en consola.
console.groupCollapsed("Exercise 32")
let cadenaprog = "Programación"
console.log(cadenaprog.slice(8));
console.groupEnd()

