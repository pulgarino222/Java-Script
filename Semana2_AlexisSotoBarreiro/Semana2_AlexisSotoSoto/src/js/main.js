// Array of pets with initial data
const pets = [
    {
        name: "bruno",
        species: "dog",
        breed: "shih ztu crillo",
        birthDate: "2018-08-01",
        weight: 10,
        state: "estable",
        owner: {
            name: "alexis",
            document: "1023722619",
            phone: "3233381747",
            email: "soto.alexis@hotmail.com",
        },
    },
    {
        name: "rocky",
        species: "dog",
        breed: "fox terrier Criollo",
        birthDate: "2020-07-01",
        weight: 10,
        state: "estable",
        owner: {
            name: "alexis",
            document: "1023722619",
            phone: "3233381747",
            email: "soto.alexis@hotmail.com",
        },
    },
    {
        name: "luna",
        species: "dog",
        breed: "french poodle",
        birthDate: "2019-01-05",
        weight: 7,
        state: "critico",
        owner: {
            name: "isabella",
            document: "1023444736",
            phone: "3117743919",
            email: "isabella@hotmail.com",
        },
    },
    {
        name: "princesa",
        species: "cat",
        breed: "criolla",
        birthDate: "2017-12-01",
        weight: 7,
        state: "estable",
        owner: {
            name: "isabella",
            document: "1023444736",
            phone: "3117743919",
            email: "isabella@hotmail.com",
        },
    },
    {
        name: "venus",
        species: "cat",
        breed: "angora",
        birthDate: "2015-06-01",
        weight: 8,
        state: "critico",
        owner: {
            name: "pilar",
            document: "123456789",
            phone: "3002345433",
            email: "pilar@hotmail.com",
        },
    },
    {
        name: "piter",
        species: "dog",
        breed: "bull terrier",
        birthDate: "2021-09-01",
        weight: 11,
        state: "estable",
        owner: {
            name: "pilar",
            document: "123456789",
            phone: "3012347654",
            email: "pilar@hotmail.com",
        },
    },
    {
        name: "tomy",
        species: "cat",
        breed: "angora",
        birthDate: "2017-08-01",
        weight: 11,
        state: "estable",
        owner: {
            name: "matias",
            document: "1233336789",
            phone: "3112324565",
            email: "hoyos@hotmail.com",
        },
    },
    {
        name: "pelos",
        species: "dog",
        breed: "criollo",
        birthDate: "2019-03-01",
        weight: 11,
        state: "critico",
        owner: {
            name: "maria",
            document: "1233336789",
            phone: "3112324565",
            email: "maria@hotmail.com",
        },
    },
    {
        name: "michu",
        species: "cat",
        breed: "criollo",
        birthDate: "2020-05-07",
        weight: 6,
        state: "estable",
        owner: {
            name: "santiago",
            document: "1233336789",
            phone: "3102324565",
            email: "perez@hotmail.com",
        },
    }
];

// Función para calcular la edad
const calcularEdad = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const m = today.getMonth() - birthDateObj.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }
    return age;
};

// Función para agregar nuevos datos al array
const addPet = (pet) => {
    pet.age = calcularEdad(pet.birthDate);
    pets.push(pet);
};

// Función para mostrar las mascotas
const mostrarMascotas = () => {
    console.log("Lista de mascotas: ");
    pets.forEach((pet, index) => {
        console.log(`Mascota ${index + 1}: ${pet.name}`);
    });
};

// Función para mostrar los propietarios
const mostrarPropietarios = () => {
    const owners = new Set();
    pets.forEach((pet) => {
        owners.add(pet.owner.name);
    });
    console.log("Lista de propietarios: ");
    owners.forEach((owner, index) => {
        console.log(`Propietario ${index + 1}: ${owner}`);
    });
};

// Función para buscar mascotas por el nombre
const buscarMascota = (name) => {
    const pet = pets.find((pet) => pet.name.toLowerCase() === name.toLowerCase());
    if (pet) {
        console.log(`Mascota encontrada: ${pet.name}`);
    } else {
        console.log("La mascota no está en la base de datos");
    }
};

// Función para filtar mascotas por propietario
const filtro = (ownerName) => {
    const ownerPets = pets.filter((pet) => pet.owner.name.toLowerCase() === ownerName.toLowerCase());
    if (ownerPets.length > 0) {
        console.log(`Mascotas del propietario ${ownerName}:`);
        ownerPets.forEach((pet, index) => {
            console.log(`Mascota ${index + 1}: ${pet.name}`);
        });
    } else {
        console.log(`No se encontraron mascotas para el propietario ingresado ${ownerName}`);
    }
};

// Función para actualizar información 
const actualizar = (name, updatedPet) => {
    const petIndex = pets.findIndex((pet) => pet.name.toLowerCase() === name.toLowerCase());
    if (petIndex !== -1) {
        pets[petIndex] = updatedPet;
        console.log("Mascota actualizada");
    } else {
        console.log("La mascota no está en la base de datos");
    }
};

// Función para eliminar mascotas de la lista
const eliminar = (name) => {
    const petIndex = pets.findIndex((pet) => pet.name.toLowerCase() === name.toLowerCase());
    if (petIndex !== -1) {
        pets.splice(petIndex, 1);
        console.log("Mascota eliminada");
    } else {
        console.log("La mascota no está en la base de datos");
    }
};

//Función principal, Menú
const menu = () => {
    while (true) {
        console.log("\n Menú Sistema Gestión para Veterinaria:");
        console.log("1. Registrar una nueva mascota");
        console.log("2. Mostrar todas las Mascotas");
        console.log("3. Mostar todos los propietarios");
        console.log("4. Buscar mascota por el nombre");
        console.log("5. Mostrar mascotas por dueño");
        console.log("6. Actualizar información de mascota");
        console.log("7. Eliminar una mascota de la base de datos");
        console.log("8. Salir");
        const option = parseInt(prompt("Ingrese una opción: "));
        switch (option) {
            case 1:
                const newPet = {
                    name: prompt("Ingrese el nombre de la mascota: "),
                    species: prompt("Ingrese la especie"),
                    breed: prompt("Ingrese la raza "),
                    birthDate: prompt("Ingrese fecha de nacimiento de la mascota (yyyy-mm-dd): "),
                    weight: parseFloat(prompt("Ingrese el peso de la mascota (kg): ")),
                    state: prompt("Ingrese el estado (Estable o crítico) "),
                    owner: {
                        name: prompt("Ingrese el nombre del propietario: "),
                        document: prompt("Ingrese el número de documento: "),
                        phone: prompt("Ingrese el número de celular del propietario: "),
                        email: prompt("Ingresa un email: "),
                    },
                };
                addPet(newPet);
                break;
            case 2:
                mostrarMascotas();
                break;
            case 3:
                mostrarPropietarios();
                break;
            case 4:
                buscarMascota(prompt("Ingrese el nombre de la mascota: "));
                break;
            case 5:
                filtro(prompt("Ingrese el nombre del propietario:  "));
                break;
            case 6:
                const updatedPet = {
                    name: prompt("Ingrese el nuevo nombre de la mascota: "),
                    species: prompt("Ingrese la especie"),
                    breed: prompt("Ingrese el Nuevo nombre de la mascota: "),
                    birthDate: prompt("Ingresa fecha de nacimiento de la mascota (yyyy-mm-dd): "),
                    weight: parseFloat(prompt("Ingrese el peso actualizado de la mascota (kg): ")),
                    state: prompt("Ingrese el estado (Estable o crítico) "),
                    owner: {
                        name: prompt("Ingrese el nombre del propietario:  "),
                        document: prompt("Ingrese el número de documento: "),
                        phone: prompt("Ingrese el número de celular del propietario: "),
                        email: prompt("Ingresa un email: "),
                    },
                };
                actualizar(prompt("Ingrese el nombre de la mascota: "), updatedPet);
                break;
            case 7:
                eliminar(prompt("Ingrese el nombre de la mascota: "));
                break;
            case 8:
                console.log('Hasta pronto!');
                return;
            default:
                console.log('Opción no válida. Inténtalo de nuevo');
        
        }
    }
};

menu();