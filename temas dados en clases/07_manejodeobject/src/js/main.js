const name = "lucas perez";

const coder = {
  name: "juan felipe",
  lastName: "pulgarin",
  birthDate: new Date("1999-11-06 14:00:00"),
  identificationNumber: "1036967172",
  location: {
    country: "colombia",
    state: "antioquia",
    city: "medellin",
    address: "cl 14 #58-43",
  },
  email: "pulgarinhernandezjuanfelpe@gmail.com",
  clan: "Dell",
  phoneNumber: "3132797866",
  codebtor: "pilar hernandez",
  address: "cr 22b #59b-11",
  workingDay: "completa",
  saludar: function () {
    return `hola mundo soy ${coder.name}`;
  },
  showFullName: function () {
    console.log(this.name, this.lastName);
  },
};

//estas son las tres maneras de llamar un elemento que este adentro de un objeto

console.log(coder);

console.group("show data");
console.log(coder.name, coder.lastName);
console.log(coder["name"], coder["lastName"]);
console.log(coder.name, coder["lastName"]);
console.log(coder.saludar());
coder.showFullName();
console.groupEnd();

console.groupCollapsed("add data");
coder.typeBlood = "A +";
coder["gener"] = "masculino";
coder.emergency = {};
//con estas dos linea agregamos un nuevo item al diccionario o al objeto
// coder.contactName="maria lopez"
// coder["backUpPhoneNumber"]="313275596"

coder.emergency.contactName = "maria lopez";
coder.emergency["backUpPhoneNumber"] = "313275596";

//otra forma para agregar
Object.defineProperty(coder, "teamLeader", {
  value: "robinson", //
  writable: true, //permite que la propiedad sea actualizada
  enumerable: true, //permite que la propiedad sea visible
  configurable: false, //permite que la propiedad sea eliminada
});
//CON LA LINEA DE ABAJO LA PODEMOS ELIMINAR SIEMPRE Y CUANTO ARRIBA ESTE EN TRUE
delete coder.teamLeader;
//SI QUEREMOS LIMPIAR EL VALOR O QUE QUEDE VACIO PONEMOS LA SIGUIENTE LINEA
coder.codebtor = undefined;
console.log("");
console.log(coder);

console.groupEnd();

console.groupCollapsed("update data");
//con estas lineas actualizamos la informacion
coder.id = "t001";
coder["phoneNumber"] = "11111122312";
console.log(coder);

console.groupEnd();

console.groupCollapsed("asign object");
const objectsA = {
  a: "alpha",
  b: "bravo",
  c: "charlie",
  d: "delta",
  e: "echo",
  f: "foxtrot",
};

const ObjectB = {
  d: "delta",
  e: "echo",
  f: "foxtrot",
};

console.info(objectsA);
console.info(ObjectB);

//esto es un metodo de la clase object, una funcion dentro de una clase se combierte en metodo
Object.assign(objectsA, ObjectB);

console.info(objectsA);
console.info(ObjectB);

console.groupEnd();

console.groupCollapsed("sum object");
const objectsC = {
  a: "alpha",
  b: "bravo",
  c: "charlie",
};

const ObjectD = {
  d: "delta",
  e: "echo",
  f: "foxtrot",
};

const objetoresultado = { ...objectsC, ...ObjectD };
console.log(objectsC);
console.log(ObjectD);
console.log(objetoresultado);
console.groupEnd();

console.groupCollapsed("desestructure of objects");
const person = {
  nameCoder: "felipe",
  lastNameCoder: "pulgarin",
  birthDateCoder: new Date("1999-11-06 14:00:00"),
  identificationCoder: "1036967172",
  location: {
    country: "colombia",
    state: "antioquia",
    city: "medellin",
    address: "cl 14 #58-43",
  },
  emailCoder: "pulgarin@gmail.com",
};
//forma manual
// const name1 =person.nameCode
// const documentid=person.identificationCoder
// const email=person.emailCoder

//forma dinamica
// const {
//   nameCoder: name1,
//   identificationCoder: documentid,
//   emailCoder: email,
// } = person;



//ejercicio sacar nombre de coder y apellido de coder guardarlos en variables 

let nombre=person.nameCoder
const apellido=person.lastNameCoder
console.log(`èl nombre de el coder es ${nombre} y el apellido es ${apellido}`)

//para un objeto que contiene mas objetos
let {location:{
  address:direccion,
}}=person
console.log(direccion)


// console.log(name1);
// console.log(documentid);
// console.log(email);
console.groupEnd();


console.groupCollapsed("ejercicio de clase")
//crear un objeto mascota debe tener la informacion de nombre,edad,peso,raza,especie, y propietario,propietario debe tener los datos de nombre, apellido,tipo de documento y documento

//se debe contar con 2 metodos, uno que imprima el nombre de la mascota y su edad; el otro metodo debe retornar los datos del propietario
let mascota={
  nombre:"firulais",
  edad:new Date(("2008-11-06 14:00:00")),
  peso:"15 kg",
  raza:"bulldog",
  especie:"perro",
  propietario:{
    nombre:"juan felipe",
    apellido:"pulgarin",
    tipoDeDocumento:"cc",
    documento:"1036967172",
  }
}

let {nombre:nombremascota,edad:edadmascota}=mascota
const {propietario:{
  nombre:nombrepropietario,
  apellido:apellidopro,
  tipoDeDocumento:documentpro,
  documento:cedula
}}=mascota
console.log(`el nombre de la mascota es ${nombremascota} la edad de la mascota es${edadmascota} y los datos de el propietario son ${nombrepropietario}, ${apellidopro},${documentpro}:${cedula}`)
console.groupEnd()
