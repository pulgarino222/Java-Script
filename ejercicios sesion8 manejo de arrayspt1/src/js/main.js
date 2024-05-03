//1. Crea un array llamado frutas que contenga al menos 5 nombres de frutas diferentes
let frutas = ["banano", "pera", "uva", "aguacate", "manzana"]

//2. Utiliza un bucle for para recorrer el array frutas e imprimir cada elemento en la consola

//i es una variable cualquiera normalmente significa iterador que es lo mismo que un recorredor del array o lista
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}
// 3. Utiliza un foreach para recorrer el array frutas e imprimir cada fruta en mayúscula en la consola


frutas.forEach(frutaAdentroDeArray => {
    console.log(frutaAdentroDeArray.toUpperCase())
});

//4. Crea un array llamado números que contenga los números del 1 al 10.

//todo lo que sea array de numeros se trabajara con este a menos que se pida la creacion de uno nuevo 
let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//5 . Utiliza un bucle while para recorrer el array numeros e imprimir cada elemento en la consola.


//convertimos el while en un for
let iterator = 0

while (iterator < numero.length) {
    console.log(numero[iterator])
    iterator++
}

// 6. Agrega una nueva fruta al final del array frutas.

//dos maneras diferentes de hacer lo mismo
frutas[5]="mango"
frutas.push("kiwi")
console.log(frutas)

// 7. Elimina el segundo elemento del array números

//con delete literalmente se borra de toda la memoria
delete numero[1]

//8.Invierte el orden de los elementos en el array frutas.

//reverse no altera el original
let frutasreverse=frutas.reverse()
console.log(frutasreverse)

//9.Ordena el array numeros en orden descendente

//asi se hace con metodos (programacion declarativa)
//si lo intenta hacer con imperativa mejor mas logica 
let numerosOrdenDescendente=numero.sort(function(numerico,numerico2){return numerico-numerico2}).reverse()
console.log(numerosOrdenDescendente)




//10. Crea una función llamada buscarFruta que tome como argumento una fruta y devuelvatrue si esa fruta está en el array frutas, y false en caso contrario

function buscarFruta(esteEsElArray,buscar){
    //esto tambien se podia hacer con .includes pero esta es la forma mas logica(programacion imperativa)
    let esta
    for(let i=0; i<esteEsElArray.length; i++){
        if(buscar===esteEsElArray[i]){
            esta=true
            break
        }else{
            esta=false
        }

    }
    console.log(`¿la fruta buscada esta en la lista? R/=${esta}`)
}

let busqueda="pera"
buscarFruta(frutas, busqueda)

//11. Imprime en la consola el primer elemento del array frutas.
console.log(frutas[0])

//12. Imprime en la consola el último elemento del array numeros
//el resultado es 1 por que se utilizo el metodo.sort() que modifica el array original siendo 1 el utimo
console.log(numero.at(-1))

//13. Utiliza el método forEach para imprimir cada fruta pero convertida a array


frutas.forEach(cadaFruta => {
    console.log(cadaFruta)
});

// 14 Utiliza un bucle for of para imprimir cada número del array numeros en la consola

for (const cadaNumero of numero) {
    console.log(cadaNumero)
} 

// 15 Crea un nuevo array llamado duplicados que contenga el doble de cada número en el array numeros utilizando el método map.
let duplicados=[]
 numero.map( cadaNumero=>{
    duplicados.push(cadaNumero*2)
})

console.log(duplicados)

//16. Crea dos arrays llamados array1 y array2, cada uno con al menos 3 números
let array1=[1,2,3]
let array2=[7,8,10]

//17. Calcula la suma de los elementos de array1 y array2 por separado y muestra los resultadosen la consola.

//suma de array1
let suma1=0
for(let i=0; i<array1.length;i++){
    suma1+=array1[i]
}
console.log(suma1)

//suma de array2 con un foreach
//contador
let suma2=0
array2.forEach(numereosDel2 => {
    suma2+=numereosDel2
});

console.log(suma2)

//18. Crea una función llamada buscarNumero que tome como argumentos un número y unarray de números, y devuelva true si el número está en el array, y false en caso contrario.

function buscarNumero(unNumero,arrayDeNumeros){
    //haciendolo con.includes
    let siEsta
   if(arrayDeNumeros.includes(unNumero)){
    siEsta=true
    console.log(siEsta)
   }else{
    siEsta=false
    console.log(false)
   }
}


buscarNumero(2,numero)


//19. Crea un array llamado edades que contenga al menos 5 números (edades)
let edades=[28,30,10,15,24,16]
let mayoresDeEdad=[]

//20. Filtra el array edades para obtener un nuevo array llamado mayoresDeEdad que contenga solo las edades mayores o iguales a 18
//con programacion imperativa
for (let i=0; i<edades.length; i++){
    if(edades[i]>=18){
        mayoresDeEdad.push(edades[i])
    }  
}
console.log(mayoresDeEdad)

//21. Crea un array llamado precios que contenga al menos 3 números (precios de productos).

let precios=[2.300,6.400,8.555]

//22. Utiliza el método map para crear un nuevo array llamado preciosConIVA que contenga los precios con un 21% de IVA aplicado a cada uno
preciosConIVA=[]
precios.map( preciosDentro=>{
    preciosConIVA.push((preciosDentro*(0.21))+preciosDentro)
})
console.log(preciosConIVA)

//23.Crea un array llamado duplicados que contenga algunos números duplicados
let duplicados2=[1,2,6,6,9,5,6,9,3,8,5]
let noDuplicado=[]
//24. Elimina los elementos duplicados del array duplicados y muestra el nuevo array sin duplicados en la consola

// SET automaticamente te elimina los elementos duplicados
//con los ... expandimos el array y cada elemento unico lo convertimos en un objeto individual adentro de el array
noDuplicado=[...new Set(duplicados2)]
console.log(noDuplicado)


//25. Crea dos arrays llamados array1 y array2, cada uno con al menos 3 nombres.
let array11=["pepito","marta","camila"]
let array21=["lucas","tomas","angie"]

// 26. Concatena los dos arrays en uno nuevo llamado concatenado y muestra el resultado en la
// consola

let concatenado=array11.concat(array21)
console.log(concatenado)

//27. Crea un array llamado colores que contenga al menos 5 colores diferentes
let colores=["azul","amarillo","verde","morado","rojo","cafe"]

//28. Cuenta cuántos elementos tiene el array colores y muestra el resultado en la consola


    console.log(`tiene ${colores.length}`)

