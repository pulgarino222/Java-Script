const teamLeader = {
  id: "115551",
  identificationNumber: "106352615",
  name: "javier",
  lastname: "perez",
  birthDate: new Date("1998-04-23 13:00:00"),
  phoneNumber: "(+57)3132797866",
  email: "javier@gmail.com",
};
//esto me va a imprimir el nombre
console.log(teamLeader.name);

//con esto no se imprime objetos solo listas
// teamLeader.forEach(element => {
//     console.log(element)
// });

//for in si sirve muy bien con diccionarios solo accedo a la key
for (const index in teamLeader) {
  console.log(teamLeader[index]);
}

// for of funciona muy bien pero con las listas
// for (const iterator of teamLeader) {

// }
//el objet.key() convierte lo que hay adentro en una lista por eso ya funciona el for each
console.log(Object.keys(teamLeader));

Object.keys(teamLeader).forEach((index) => {
  console.log(teamLeader[index]);
});

console.error("salto de linea");
Object.values(teamLeader).forEach((values) => {
  console.log([values]);
});

// numeros de el 0 al 100
//filtrar numeros pares y guarden en una lista

let numbers = [];
let pares = [];
for (let i = 0; i <= 100; i++) {
  numbers.push(i);
}
console.log(numbers);

// para saber si es par

for (let j = 0; j <= numbers.length; j++) {
  if (numbers[j] % 2 === 0) {
    pares.push(numbers[j]);
  }
}
console.log(pares);

//para saber si es par con of
for (const iterator of numbers) {
  if (numbers[iterator] % 2 === 0) {
    pares.push(numbers[iterator]);
  }
}

//consultar .filter

//nuevo ejercicio
listaEmpleados = [
  {
    nombre: "Juan Pérez",
    edad: 30,
    puesto: "Desarrollador de Software",
    salario: 50000,
  },
  {
    nombre: "María García",
    edad: 28,
    puesto: "Diseñadora Gráfica",
    salario: 45000,
  },
  {
    nombre: "Luis Ramírez",
    edad: 35,
    puesto: "Gerente de Proyectos",
    salario: 60000,
  },
  {
    nombre: "Ana Martínez",
    edad: 32,
    puesto: "Analista de Negocios",
    salario: 55000,
  },
];

listaEmpleados.forEach(function (empleado) {
  console.log(
    `el nombre es: ${empleado.nombre.toLowerCase()}, el puesto que ocupa es: ${empleado.puesto.toLowerCase()}, su salario es ${empleado.salario.toLocaleString(
      `en-US`,
      { style: "currency", currency: "USD" }
    )}`
  );
});

//map recorre pero genera una nueva lista devuelve un resultado y duplica lo que le ponga


