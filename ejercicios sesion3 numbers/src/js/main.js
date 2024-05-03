console.groupCollapsed("Ejercicio 1");
// 01 sumar dos numeros
let numero1=10;
let numero2=10;
console.info("la suma de dos 10+10 es:"+" "+numero1+numero2);
console.groupEnd();

console.groupCollapsed("Ejercicio 2");
// 02 Restar dos números.
numero3=10;
numero4=15;
console.info("la resta de dos numeros 10-15 es:"+" "+(numero3-numero4));
console.groupEnd();

console.groupCollapsed("Ejercicio 3");
// 03  Multiplicar dos números.
console.log("la multiplicacion de dos numeros 9*9 es"+" "+(9*9));
console.groupEnd();

console.groupCollapsed("Ejercicio 4");
//04. Dividir dos números. 
console.info("la division de dos numeros:"+" "+8/2);
console.groupEnd();

console.groupCollapsed("Ejercicio 5");
// Ejercicio 5
console.log("el residuo de 8/2" +(8%2));
console.groupEnd();

console.groupCollapsed("Ejercicio 6");
//06Generar un número aleatorio entre 1 y 10. 
console.log("el numero aleatorio es: "+" "+(Math.round(Math.random()*(10-1)+1)));
console.groupEnd();

console.groupCollapsed("Ejercicio 7");
//7. Elevar un número a la potencia de otro.
console.log("dos elevado a la dos es: "+(Math.pow(2,2)));
console.groupEnd();

console.groupCollapsed("Ejercicio 8");
//08 Calcular la raíz cuadrada de un número.
console.log("la raiz de 4 es:",Math.sqrt(4));
console.groupEnd();

console.groupCollapsed("Ejercicio 9");
// 9. Convertir grados Celsius a Fahrenheit.

function DegreeCtoF(celsius){
const equivalencia=1.8;
console.log(celsius+" grados celsius son: "+" "+((celsius*equivalencia)+32)+"grados farenheit")
}
DegreeCtoF(8)
console.groupEnd();

console.groupCollapsed("Ejercicio 10");
// 10. Calcular el área de un círculo. 
let radio=25;
console.log("el area de un circulo de radio 25 es:",(3.1416*(Math.pow(radio,2))));
console.groupEnd();

console.groupCollapsed("Ejercicio 11");
// 11. Calcular el perímetro de un cuadrado.
lado=25;
console.log("el perimetro de un cuadrado de lado 25 es:",(lado*4));
console.groupEnd();

console.groupCollapsed("Ejercicio 12");
// 12. Calcular el volumen de una esfera. 
let radio2 = 20;
const vol=(4/3*3.14)*radio2;
console.log(vol);
console.groupEnd();

console.groupCollapsed("Ejercicio 13");
// 13. Calcular el área de un triángulo.
let b=10;
let h=5;
const area= (b*h)/2;
console.log("el area de un triangulo de base 10 y altura 5 es:"+" "+area)
console.groupEnd();

console.groupCollapsed("Ejercicio 14");
//14. Generar la tabla de multiplicar del número 5. 

function tableof(numberoftable){
    let result=0;
    console.log(`la tabla de el ${numberoftable} es`)
    for(let i=0; i<=10;i++){
        result=numberoftable*i
        console.log(`${numberoftable}* ${i} = ${result}`)
    }
}
tableof(5)


console.groupEnd();

console.groupCollapsed("Ejercicio 15");
// 15. Encontrar el número mayor entre 3, 7 y 2. 

console.info("el numero mayor entre 3,7,2 es:"+" "+Math.max(3,7,2))

console.groupEnd();

console.groupCollapsed("Ejercicio 16");
// 16. Encontrar el número menor entre 10, 20 y 5. 
console.info("el numero menor es: "+" "+Math.min(10,20,5))
console.groupEnd();

console.groupCollapsed("Ejercicio 17");
// 17. Calcular el promedio de 4, 6 y 8

console.groupEnd();

console.groupCollapsed("Ejercicio 18");
// 18. Calcular la factorial de 5. 
function factorial(numero){
    result=1
    for(let i=1;i<=numero;i++){
        result=result*i
    }
    return result 
}
console.log(factorial(8))
console.groupEnd();

console.groupCollapsed("Ejercicio 19");
// 19. Redondear el número 3.6. 

    decimal=3.555666999999999999999999
    console.info("redondear el a 3,6 = ",decimal.toFixed(1))

console.groupEnd();

console.groupCollapsed("Ejercicio 20");
// 20. Calcular el doble de 9. 
    console.info("el doble de nueve es "+" "+9*2)
console.groupEnd();

console.groupCollapsed("Ejercicio 21");
// 21 Calcular el triple de 4. 
    console.info("el triple de 4 es" +" "+ 4*3)
console.groupEnd();

console.groupCollapsed("Ejercicio 22");
// 22. Calcular el cuadrado de 6. 
    console.info("el cuadrado de 6 es:"+ 6**2)
console.groupEnd();

console.groupCollapsed("Ejercicio 23");
// 23. Calcular el cubo de 3. 
console.log("el cubpo de tres es: "+" "+3**3)
console.groupEnd();

console.groupCollapsed("Ejercicio 24");
// 24. Calcular la suma de los primeros 10 números naturales. 
    let resultado=0
    for(let i=1; i<11; i++){
        resultado+=i
    }
    console.log(`la suma de los primeros 10 numeros naturales es ${resultado}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 25");
// Calcular la resta entre 50 y 25.
console.log(`Calcular la resta entre 50 y 25. = ${50-25}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 26");
// Ejercicio 26 Multiplicar 7 por 9.
console.log(`26 Multiplicar 7 por 9. = ${7*9}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 27");
// Ejercicio 27 Dividir 144 por 12.
console.log(`Dividir 144 por 12 R/= ${144/12}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 28");
// Ejercicio 28 Obtener el módulo de 17 dividido por 4
console.log(`Obtener el módulo de 17 dividido por 4 ${17%4}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 29");
// Ejercicio 29 Generar un número aleatorio entre 20 y 30.
console.info(`${Math.floor(Math.random()*(30-20)+20)}`)

console.groupEnd();

console.groupCollapsed("Ejercicio 30");
// Ejercicio 30 Elevar 2 a la potencia de 8.
console.log(`Elevar 2 a la potencia de 8. R/=${Math.pow(2,8)}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 31");
// Ejercicio 31 Calcular la raíz cuadrada de 144
console.log(`Ejercicio 31 Calcular la raíz cuadrada de ${Math.sqrt(144)}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 32");
// Ejercicio 32 . Convertir 100 grados Celsius a Fahrenheit
DegreeCtoF(100)
console.groupEnd();

console.groupCollapsed("Ejercicio 33");
// Ejercicio 33 Calcular el área de un rectángulo de base 5 y altura 10
console.log(`Calcular el área de un rectángulo de base 5 y altura 10.. R/= ${5*10}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 34");
// Ejercicio 34  Calcular el perímetro de un círculo con radio 6
 function perimetroCirculo(radio){
    const formula=((2)*(3.1416))
    resultado=formula*radio
  console.log(`el perimetro de un circulo de radio ${radio} es = ${resultado}`)
 }
 perimetroCirculo(6)
console.groupEnd();

console.groupCollapsed("Ejercicio 35");
// Ejercicio 35  Calcular el volumen de un cubo con lado 4.
console.log(`el volumen de un cubo de cuatro lados cuyos lados midan 4 es: ${Math.pow(4,3)}`) 
console.groupEnd();

console.groupCollapsed("Ejercicio 36");
// Ejercicio 36  Calcular el área de un rombo con diagonales de 8 y 10
console.log(`Calcular el área de un rombo con diagonales de 8 y 10 R/= ${(8*10)/2}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 37");
// Ejercicio 37 Calcular el área de un trapecio con bases 6 y 10 y altura 4
console.log(`${(6+10)*(4/2)}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 38");
// Ejercicio 38 Generar la tabla de multiplicar del número 8
tableof(8)
console.groupEnd();

console.groupCollapsed("Ejercicio 39");
// Ejercicio 39 Encontrar el número mayor entre 15, 20 y 25
console.log(`Encontrar el número mayor entre 15, 20 y 25 R/= ${Math.max(15,20,25)}`)

console.groupEnd();

console.groupCollapsed("Ejercicio 40");
// 40  Encontrar el número menor entre 50, 75 y 100
console.log(`Encontrar el número menor entre 50, 75 y 100 R/= ${Math.min(50,75,100)}`)

console.groupEnd();

console.groupCollapsed("Ejercicio 41");
// Ejercicio 41  Calcular el promedio de 7, 9 y 12
console.log( `Calcular el promedio de 7, 9 y 12 R/=  ${(7+9+12)/3}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 42");
// Ejercicio 42  Calcular la factorial de 7.
console.log(`el factorial de 7 es R/= ${factorial(7)}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 43");
// Ejercicio 43 Redondear el número 7.9.
console.log(`Ejercicio 43 Redondear el número 7.9. el redondeo con .round es: ${Math.round(7.96663511556441)} el redondeo con .floor es: ${Math.floor(7.96663511556441)} y el redondeo con .ceil es: ${Math.ceil(7.96663511556441)}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 44");
// Ejercicio 44 Calcular el doble de 15.
console.groupEnd(`Calcular el doble de 15. ${15*2}`);
console.groupEnd();

console.groupCollapsed("Ejercicio 45");
// Ejercicio 45 Calcular el triple de 6.
console.log(`Calcular el triple de 6. R/= ${6*3}`)
console.groupEnd()

console.groupCollapsed("Ejercicio 46");
// Ejercicio 46  Calcular el cuadrado de 8
console.log(`Calcular el cuadrado de 8 R/=${Math.pow(8,2)}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 47");
// Ejercicio 47 Calcular el cubo de 4
console.log(`Calcular el cubo de 4 R/= ${Math.pow(4,3)}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 48");
// Ejercicio 48 Calcular la suma de los primeros 15 números naturales.
function sumaDeNumeros(final){
    suma=0
    for(let i=0 ; i<=final; i++){
        suma+=i
    }
    console.log(`la suma de los primeros ${final} numeros naturales es: ${suma}`)
}
sumaDeNumeros(15)
console.groupEnd();

console.groupCollapsed("Ejercicio 49");
// Ejercicio 49 Calcular la resta entre 100 y 55.
console.log(`Calcular la resta entre 100 y 55. R/= ${100-55}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 50");
// Ejercicio 50  Multiplicar 6 por 8.
console.log(` Multiplicar 6 por 8. R/= ${6*8}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 51");
// Ejercicio 51 Dividir 225 por 15.
console.log(`Dividir 225 por 15. R/= ${225/15}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 52");
// Ejercicio 52 Obtener el módulo de 20 dividido por 7.
console.log(`Obtener el módulo de 20 dividido por 7. R/= ${20%7}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 53");
// Ejercicio 53 Generar un número aleatorio entre 40 y 50.
console.log(`Generar un número aleatorio entre 40 y 50. R/= ${Math.round(Math.random()*(50-40)+40)}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 54");
// Ejercicio 54  Elevar 3 a la potencia de 4.
console.log(` Elevar 3 a la potencia de 4. R/= ${Math.pow(3, 4)}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 55");
// Ejercicio 55  Calcular la raíz cuadrada de 169
console.log(` Calcular la raíz cuadrada de 169 R/= ${Math.sqrt(169)}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 56");
// Ejercicio 56 Convertir 80 grados Celsius a Fahrenheit.
DegreeCtoF(80)
console.groupEnd();

console.groupCollapsed("Ejercicio 57");
// Ejercicio 57  Calcular el área de un rectángulo de base 8 y altura 12. 
console.log(` Calcular el área de un rectángulo de base 8 y altura 12. R/=  ${8*12}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 58");
// Ejercicio 58  Calcular el perímetro de un círculo con radio 8
 perimetroCirculo(8)
console.groupEnd();

console.groupCollapsed("Ejercicio 59");
// Ejercicio 59  Calcular el volumen de un cubo con lado 5.
console.log(`Calcular el volumen de un cubo con lado 5 ${Math.pow(5,3)}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 60");
// Ejercicio 60
console.log(`Calcular el área de un rombo con diagonales de 12 y 16 R/= ${(12*16)/2}` )
console.groupEnd();

console.groupCollapsed("Ejercicio 61");
// Ejercicio 61 Calcular el área de un trapecio con bases 8 y 12 y altura 6.
console.log(`Calcular el área de un trapecio con bases 8 y 12 y altura 6. ${(8+12)*(6/2)}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 62");
// Ejercicio 62 Generar la tabla de multiplicar del número 9. 
tableof(9)
console.groupEnd();

console.groupCollapsed("Ejercicio 63");
// Ejercicio 63  Encontrar el número mayor entre 25, 30 y 35.
console.log(` Encontrar el número mayor entre 25, 30 y 35. R/= ${Math.max(25,30,35)}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 64");
// Ejercicio 64 Encontrar el número menor entre 80, 95 y 110
console.log(` Encontrar el número menor entre 80, 95 y 110 R/= ${Math.min(80,95,110)}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 65");
// Ejercicio 65  Calcular el promedio de 8, 10 y 14.
console.log(` Calcular el promedio de 8, 10 y 14. R/= ${(8+10+14)/3}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 66");
// Ejercicio 66 Calcular la factorial de 8
console.log(`EL FACTORIAL DE 8 ES: ${factorial(8)}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 67");
// Ejercicio 67 Redondear el número 9.2.
console.log(`Ejercicio 67 Redondear el número 9.2 el redondeo con .round es: ${Math.round(9.2)} el redondeo con .floor es: ${Math.floor(9.2)} y el redondeo con .ceil es: ${Math.ceil(9.2)}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 68");
// Ejercicio 68 Calcular el doble de 18
console.log(`Calcular el doble de 18 R/= ${18*2}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 69");
// Ejercicio 69 Calcular el triple de 7.
console.log(`Calcular el triple de 7. R/= ${7*3}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 70");
// Ejercicio 70  Calcular el cuadrado de 10. 
console.log(` Calcular el cuadrado de 10. R/= ${Math.pow(10, 2)}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 71");
// Ejercicio 71 Calcular el cubo de 5.
console.log(`Calcular el cubo de 5. R/= ${Math.pow(5,3)}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 72");
// Ejercicio 72 . Calcular la suma de los primeros 20 números naturales.
sumaDeNumeros(20)
console.groupEnd();

console.groupCollapsed("Ejercicio 73");
// Ejercicio 73 Calcular la resta entre 200 y 75.
console.log(`Calcular la resta entre 200 y 75. R/= ${200-75}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 74");
// Ejercicio 74 Multiplicar 9 por 11.
console.log(`Multiplicar 9 por 11. R/= ${9*11}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 75");
// Ejercicio 75 Dividir 300 por 25.
console.log(`Dividir 300 por 25. R/= ${300/25}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 76");
// Ejercicio 76 Obtener el módulo de 30 dividido por 9
console.log(`Obtener el módulo de 30 dividido por 9 R/= ${30%9}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 77");
// Ejercicio 77 Generar un número aleatorio entre 60 y 70.
console.info(`Generar un número aleatorio entre 60 y 70. R/= ${Math.round(Math.random()*(70-60)+60)}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 78");
// Ejercicio 78 Elevar 4 a la potencia de 5. 
console.log(`Elevar 4 a la potencia de 5. R/= ${Math.pow(4,5)} `)
console.groupEnd();

console.groupCollapsed("Ejercicio 79");
// Ejercicio 79 Calcular la raíz cuadrada de 196.
console.log(Math.sqrt(196))

console.groupEnd();

console.groupCollapsed("Ejercicio 80");
// Ejercicio 80 Convertir 120 grados Celsius a Fahrenheit.
DegreeCtoF(120)
console.groupEnd();

console.groupCollapsed("Ejercicio 81");
// Ejercicio 81  Calcular el área de un rectángulo de base 10 y altura 15.
console.log(` Calcular el área de un rectángulo de base 10 y altura 15. R/= ${(10*15)}`)

console.groupEnd();

console.groupCollapsed("Ejercicio 82");
// Ejercicio 82 Calcular el perímetro de un círculo con radio 10.
perimetroCirculo(10)
console.groupEnd();

console.groupCollapsed("Ejercicio 83");
// Ejercicio 83 Calcular el volumen de un cubo con lado 6
console.log(`Calcular el volumen de un cubo con lado 6 R/= ${Math.pow(6,3)}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 84");
// Ejercicio 84 Calcular el área de un rombo con diagonales de 14 y 18.
console.info(`Calcular el área de un rombo con diagonales de 14 y 18. R/=  ${(14*18)/2}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 85");
// Ejercicio 85. Calcular el área de un trapecio con bases 10 y 15 y altura 8.
console.info(` . Calcular el área de un trapecio con bases 10 y 15 y altura 8.. R/= ${(10+15)*(8/2)}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 86");
// Ejercicio 86 Generar la tabla de multiplicar del número 10
tableof (10)
console.groupEnd();

console.groupCollapsed("Ejercicio 87");
// Ejercicio 87 . Encontrar el número mayor entre 35, 40 y 45
console.log(`Encontrar el número mayor entre 35, 40 y 45R/=${Math.max(35,40,45)}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 88");
// Ejercicio 88 Encontrar el número menor entre 90, 105 y 120
console.log(`Encontrar el número menor entre 90, 105 y 120 R/= ${Math.min(90,105,120)}`) 
console.groupEnd();

console.groupCollapsed("Ejercicio 89");
// Ejercicio 89  Calcular el promedio de 9, 11 y 15
console.log(` Calcular el promedio de 9, 11 y 15 R/= ${(9+11+15)/3}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 90");
// Ejercicio 90  Calcular la factorial de 9. 
console.log(`Calcular la factorial de 9. R/= ${factorial(9)}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 91");
// Ejercicio 91 Redondear el número 10.8
console.log(`Ejercicio 67 Redondear el número 10.8. el redondeo con .round es: ${Math.round(10.8)} el redondeo con .floor es: ${Math.floor(10.8)} y el redondeo con .ceil es: ${Math.ceil(10.8)}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 92");
// Ejercicio 92 Calcular el doble de 21
console.log(`Calcular el doble de 21 R/=${21*2}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 93");
// Ejercicio 93  Calcular el triple de 8.
console.log(`. Calcular el triple de 8. ${8*3}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 94");
// Ejercicio 94 Calcular el cuadrado de 12
console.log(`Calcular el cuadrado de 12 R/= ${12**2}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 95");
// Ejercicio 95  Calcular el cubo de 6.
console.log(` Calcular el cubo de 6 R/= ${6**3}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 96");
// Ejercicio 96  Calcular el cubo de 6.
sumaDeNumeros(25)
console.groupEnd();