
//esta sera nuestra base de datos y por lo tanto aca se van a alamacenar todos los datos de el programa
let datos = {
    nombre: ["venus", "tomy", "alaska", "firulais", "niño", "tomate", "loco", "niño", "princesa", "niña"],
    especie: ["perro", "perro", "gato", "caballo", "vaca", "perro", "ave", "serpiente", "pez", "elefante"],
    raza: ["bulldog", "lobo siberiano", "persa", "pura sangre", "brahama", "fox terrier", "bull terrier", "loro", "piton", "goldfish", "tasmania"],
    edad: [new Date("2016-08-25"), new Date("2015-08-25"), new Date("2014-08-25"), new Date("2012-08-25"), new Date("2015-08-25"), new Date("2018-08-25"), new Date("2020-08-25"), new Date("2021-08-25"), new Date("2022-08-25"), new Date("2023-08-25")],
    peso: ["20kg", "15kg", "13kg", "13kg", "14kg", "38kg", "25kg", "17kg", "28kg", "13kg"],
    estado: ["estable", "estable", "critico", "estable", "critico", "estable", "critico", "estable", "critico", "estable"],
    nombrepropietario: ["juan", "andres", "felipe", "juan", "luisa", "pamela", "devora", "sofia", "julio", "carlos"],
    documentopropietario: ["103696715", "21255651", "10255845", "10369545", "10255856", "10365985", "102114565", "1022654", "102655540", "102255410"],
    telefono: ["3132797866", "2154625", "244555", "3455454", "345454545", "4535445", "3554445", "34553443", "453454534", "5833545"],
    correo: ["juan@gmail.com", "hola@gmail.com", "perro@gmail.com", "jli@gmail.com", "andri@gmail.com", "pepito@gmail.com", "hola@gmail.com", "buenas@gmail.com", "dato@gmail.com", "aquiles@gmail.com"]
}

let edadesEnAnios = calcularEdadAños(datos.edad);
// Agregar las edades en años al diccionario datos
datos["edadEnAnios"] = edadesEnAnios;
//esta va a ser la funcion principal que va a controlar todas las otras funciones
function menu() {
    //importado de sweet alert
    alert("antes de ingresar asegurese de tener la consola abierta, de lo contrario salgase y vuelva a abrir")
    Swal.fire({
        title: "bienvenido al sistema de gestion de la veterinaria",
        showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
    }).then(function () {
        while (true) {

            let option = Number(prompt(`por favor ingrese una opcion
        1) para registrar nueva mascota
        2) ver lista de todas las mascotas registradas
        3) ver lista de todos los dueños registrados
        4) buscar mascotas por el nombre
        5)mostrar las mascotas de un mismo dueño
        6)actulizar informacion de una mascota
        7)eliminar una mascota
        8)mostrar base de dato entera(toda la informacion en consola)
        9)salir de el sistema
        `))
            if (option === 1) {
                registrar()
            } else if (option === 2) {
                listarMascotas(datos)
            } else if (option === 3) {
                listarDueños(datos)
            } else if (option === 4) {
                buscarMascota(datos)
            } else if (option === 5) {
                filtrarDueño(datos)
            } else if (option === 6) {
                actualizar(datos)
            } else if (option === 7) {
                eliminarMascota(datos)
            } else if (option === 8) {
                alert("en consola esta toda la informacion de la base de datos")
                mostratTodaLaBaseDatos(datos)

            } else if (option === 9) {
                alert("gracias por usar nuestro sistema vuelva pronto")
                break
            } else {
                alert("ingrese una opcion valida")
            }


        }
    })
}
function mostratTodaLaBaseDatos(basededatos){
    for (let i = 0; i < basededatos.nombre.length; i++) {
        console.log(`${i}
        nombre:${basededatos.nombre[i]}
        especie ${basededatos.especie[i]}
        raza:${basededatos.raza[i]} 
        edad:${basededatos.edad[i]}
        años:${basededatos.edadEnAnios[i]}
        nombre del dueño:${basededatos.nombrepropietario[i]}
        documento del dueño${basededatos.documentopropietario[i]}
        telefono de contacto:${basededatos.telefono[i]}
        correo del propietario:"${basededatos.correo[i]}`)
    }
}
//por medio de esta funcion podemos ingresar los datos nuevos
function registrar() {

    datos.nombre.push(prompt("ingrese el nombre de la mascota"))

    datos.especie.push(prompt("ingrese la especie de la mascota"))

    datos.raza.push(prompt("ingrese la raza de la mascota"))

    datos.edad.push(new Date(`${prompt("ingrese el año: aaaa")}-${prompt("ingrese el mes: mm")}-${prompt("ingrese el dia: dd")}`))

    datos.peso.push(prompt("indique el peso de la mascota en kg"))

    while (true) {
        let pregunta = (prompt("¿el estado es critico? si o no")).toLowerCase()
        if (pregunta === "si") {
            datos.estado.push("critico")
            break
        } else if (pregunta == "no") {
            datos.estado.push("estable")
            break
        } else {
            alert("ingrese una opcion valida")
        }
    }
    datos.nombrepropietario.push(prompt("ingrese el nombre de el propietario"))
    datos.telefono.push(prompt("ingrese el telefono de contacto"))
    datos.correo.push(prompt("ingrese su correo electronico"));



}
//es una funcion muy sencilla que nos muestra todas las mascotas
function listarMascotas(basededatos) {
    alert("las mascotas registradas hasta el momento se acaban de escribir en el documento por si las quiere copiar a otra parte y estan en consola tambien")
    document.write("la lista de mascotas es:<br>")
    console.log("lista de mascotas:")

    for (let i = 0; i < (basededatos.nombre).length; i++) {
        document.write(`${i} ${basededatos.nombre[i]}<br>`)
        console.table(`${i} ${basededatos.nombre[i]}`)
    }
}
//es casi que la musma funcion anterior
function listarDueños(basededatos) {
    alert("los dueños registrados hasta el momento se acaban de escribir en el documento por si los quiere copiar a otra parte y estan en consola tambien")
    document.write("la lista de dueños es:<br>")
    console.log("lista de dueños:")

    for (let i = 0; i < (basededatos.nombrepropietario).length; i++) {
        document.write(`${i} ${basededatos.nombrepropietario[i]}<br>`)
        console.table(`${i} ${basededatos.nombrepropietario[i]}`)
    }
}
//con esto buscamos la mascota por el nombre
function buscarMascota(basededatos) {

    while (true) {
        let option = Number(prompt(`ingrese una opcion:
    1) buscar mascotas
    2)volver al menu principal`))
        if (option == 1) {
            let encontrado = false
            let busqueda = prompt("ingrese el nombre de la mascota que esta buscando")
            for (let i = 0; i < basededatos.nombre.length; i++) {
                if (busqueda === basededatos.nombre[i]) {
                    alert(`la mascota buscada: ${busqueda} si se encuentra en nuestra base de datos`)
                    encontrado = true
                    break

                }
            }
            if (encontrado === false) {
                alert(`la mascota ${busqueda} no esta en nuestra base de datos`)
            }
        } else if (option == 2) {
            alert("volviendo al menu principal")
            break
        } else {
            alert("ingrese una opcion valida")
        }

    }
}
//nos muiestra todas las mascotas que tiene un mismo dueño
function filtrarDueño(basededatos) {

    let busqueda2 = prompt("ingrese el nombre de el propietario")
    let encontrado2 = false
    let encontrado = false

    for (let i = 0; basededatos.nombrepropietario.length; i++) {
        if (busqueda2 === basededatos.nombrepropietario[i]) {
            alert(`el dueño buscado: ${busqueda2} si se encuentra en nuestra base de datos y sus mascotas son:`)
            document.write(`las mascotas de ${busqueda2} son: <br>`)
            encontrado = true
            break
        }
    }
    if (encontrado === false) {
        alert(`el dueño ${busqueda2} no esta en nuestra base de datos`)
    }

    for (let i = 0; basededatos.nombrepropietario.length; i++) {
        if (busqueda2 === basededatos.nombrepropietario[i]) {
            encontrado2 = true
            if (encontrado2 === true) {
                alert(`${basededatos.nombre[i]}`)
                document.write(`${basededatos.nombre[i]} <br>`)
                console.log(`la mascota de ${basededatos.nombrepropietario[i]} es ${basededatos.nombre[i]}`)
            }
        } else {
            encontrado2 = false
        }
        alert(`la lista de mascotas de ${busqueda2} se ha escrito en el documento para facilidad de copiado y pegado`)
        break
    }

}

function calcularEdadAños(fechasdenacimiento) {
    let enAños = []
    let ahora = new Date()
    for (let i = 0; i < fechasdenacimiento.length; i++) {
        let edadMiliSeg = ahora - fechasdenacimiento[i]
        let años = Math.floor(edadMiliSeg / (1000 * 60 * 60 * 24 * 365.25));
        enAños.push(años)
    }
    return enAños
}
//con esta funcion actualizamos cualquier dato que tengamos adento
function actualizar(basededatos) {
    alert("en consola esta toda la informacion de la base de datos")
    for (let i = 0; i < basededatos.nombre.length; i++) {
        console.log(`${i}
        nombre:${basededatos.nombre[i]}
        especie ${basededatos.especie[i]}
        raza:${basededatos.raza[i]} 
        edad:${basededatos.edad[i]}
        años:${basededatos.edadEnAnios[i]}
        nombre del dueño:${basededatos.nombrepropietario[i]}
        documento del dueño${basededatos.documentopropietario[i]}
        telefono de contacto:${basededatos.telefono[i]}
        correo del propietario:"${basededatos.correo[i]}`)
    }

    while (true) {
        let opcion = Number(prompt(`puedes cambiar o actualizar los siguientes datos:
    1) nombre de alguna mascota
    2) especie de alguna mascota
    3) raza
    4) edad
    5) peso
    6) estado
    7) nombre de el dueño
    8) documento de el dueño
    9) telefono de contacto
    10) correo de el propietario
    11) no actualizar nada y volver al menu principal`))
        if (opcion === 1) {
            alert(`las mascotas registradas actualmente son ${basededatos.nombre}`)
            let encontrado = false
            let busqueda = prompt("ingrese el nombre de la mascota que va a modificar")
            for (let i = 0; basededatos.nombre.length; i++) {
                if (busqueda === basededatos.nombre[i]) {
                    alert(`la mascota buscada: ${busqueda} si se encuentra en nuestra base de datos`)
                    encontrado = true
                    break
                }
            }
            if (encontrado === false) {
                alert(`la mascota ${busqueda} no esta en nuestra base de datos`)
            }
            if (encontrado === true) {
                alert("en consola estan los nombres de las mascotas con sus indices verifique el nombre con la demas informacion antes de cambiarlo")
                for (let i = 0; i < basededatos.nombre.length; i++) {
                    console.table(`indice:${i}  ${basededatos.nombre[i]}`)
                }
                basededatos.nombre[Number(prompt("indique el indice que quiere modificar"))] = prompt("indique el nombre de la mascota corregido")
                alert("se ha modificado correctamente")
            }

        } else if (opcion === 2) {
            alert(`vamos a modificar la especie de alguna mascota`)
            let encontrado = false
            let busqueda = prompt("ingrese el nombre de la especie que va a modificar")
            for (let i = 0; basededatos.nombre.length; i++) {
                if (busqueda === basededatos.especie[i]) {
                    alert(`la especie buscada: ${busqueda} si se encuentra en nuestra base de datos`)
                    encontrado = true
                    break
                }
            }
            if (encontrado === false) {
                alert(`la especie ${busqueda} no esta en nuestra base de datos`)
            }
            if (encontrado === true) {
                alert("en consola estan los nombres de las especies con sus indices verifique el nombre de la especie con la demas informacion antes de cambiarlo")
                for (let i = 0; i < basededatos.nombre.length; i++) {
                    console.table(`indice:${i}  ${basededatos.especie[i]}`)
                }
                basededatos.especie[Number(prompt("indique el indice que quiere modificar"))] = prompt("indique la especie de la mascota corregido")
                alert("se ha modificado correctamente la especie de la mascota")
            }
        } else if (opcion === 3) {

            alert(`las razas registradas actualmente son ${basededatos.raza}`)
            let encontrado = false
            let busqueda = prompt("ingrese el nombre de la raza que va a modificar")
            for (let i = 0; basededatos.nombre.length; i++) {
                if (busqueda === basededatos.raza[i]) {
                    alert(`la raza: ${busqueda} si se encuentra en nuestra base de datos`)
                    encontrado = true
                    break
                }
            }
            if (encontrado === false) {
                alert(`la raza ${busqueda} no esta en nuestra base de datos`)
            }
            if (encontrado === true) {
                alert("en consola estan los nombres de las razas con sus indices verifique el nombre con la demas informacion antes de cambiarlo")
                for (let i = 0; i < basededatos.nombre.length; i++) {
                    console.table(`indice:${i}  ${basededatos.raza[i]}`)
                }
                basededatos.raza[Number(prompt("indique el indice que quiere modificar"))] = prompt("indique el nombre de la raza corregido")
                alert("se ha modificado correctamente")
            }

        } else if (opcion === 4) {

            alert("vamos a modificar la edad")
            let encontrado = true
            if (encontrado === true) {
                alert("en consola estan los nombres de las mascotas con sus indices y sus edades verifique el nombre y la edad con la demas informacion antes de cambiarlo")
                for (let i = 0; i < basededatos.nombre.length; i++) {
                    console.table(`indice:${i} nombre: ${basededatos.nombre[i]} edad:${basededatos.edad[i]} años:${basededatos.edadEnAnios[i]}`)
                }
                basededatos.edad[Number(prompt("indique el indice que quiere modificar"))] = new Date(prompt("indique la edad corregida para esto ingrese fecha de nacimiento de esta forma: aaaa-mm-dd"))
                alert("se ha modificado la edad correctamente")
            }

        } else if (opcion === 5) {
            alert("vamos a modificar el peso")
            let encontrado = true
            if (encontrado === true) {
                alert("en consola estan los nombres de las mascotas con sus indices y sus pesos verifique el nombre con la demas informacion antes de cambiarlo")
                for (let i = 0; i < basededatos.nombre.length; i++) {
                    console.table(`indice:${i}  nombre:${basededatos.nombre[i]} peso:${basededatos.peso[i]}kg`)
                }
                basededatos.peso[Number(prompt("indique el indice que quiere modificar"))] = prompt("indique el peso corregido")
                alert("se ha modificado correctamente el peso")
            }
        } else if (opcion === 6) {

            let encontrado = true
            if (encontrado === true) {
                alert("en consola estan los nombres de las mascotas con sus estados verifique el nombre con la demas informacion antes de cambiarlo")
                for (let i = 0; i < basededatos.nombre.length; i++) {
                    console.table(`indice:${i} nombre:${basededatos.nombre[i]} estado:${basededatos.estado[i]}`)
                }
                basededatos.estado[Number(prompt("indique el indice que quiere modificar"))] = prompt(`indique el estado "critico"o "estable"`)
                alert("se ha modificado el estado correctamente")
            }


        } else if (opcion === 7) {

            let encontrado = false
            let busqueda = prompt("ingrese el nombre de el dueño que va a modificar")
            for (let i = 0; basededatos.nombre.length; i++) {
                if (busqueda === basededatos.nombrepropietario[i]) {
                    alert(`el dueño: ${busqueda} si se encuentra en nuestra base de datos`)
                    encontrado = true
                    break
                }
            }
            if (encontrado === false) {
                alert(`el dueño ${busqueda} no esta en nuestra base de datos`)
            }
            if (encontrado === true) {
                alert("en consola estan los nombres de los dueños con sus indices verifique el nombre con la demas informacion antes de cambiarlo")
                for (let i = 0; i < basededatos.nombre.length; i++) {
                    console.table(`indice:${i} nombre de mascota: ${basededatos.nombre[i]} nombre del dueño:${basededatos.nombrepropietario[i]}`)
                }
                basededatos.nombre[Number(prompt("indique el indice que quiere modificar"))] = prompt("indique el nombre de el dueño de la mascota corregido")
                alert("se ha modificado correctamente el nombre del propietario")
            }

        } else if (opcion === 8) {
            let encontrado = true
            if (encontrado === true) {
                alert("vas a modificar un documento de propietario")
                alert("en consola estan los nombres de los propietarios con sus indices y su documento verifique el nombre con la demas informacion antes de cambiarlo")
                for (let i = 0; i < basededatos.nombre.length; i++) {
                    console.table(`indice:${i} propietario: ${basededatos.nombrepropietario[i]} documento: ${basededatos.documentopropietario[i]}`)
                }
                basededatos.documentopropietario[Number(prompt("indique el indice que quiere modificar"))] = prompt("indique el documento corregido")
                alert("se ha modificado correctamente el documento de el propietario")
            }
        } else if (opcion === 9) {
            let encontrado = true
            if (encontrado === true) {
                alert("vamos a modificar el telefono de contacto")
                alert("en consola estan los nombres de los propietarios con sus indices  y telefonos de contacto verifique el nombre con la demas informacion antes de cambiarlo")
                for (let i = 0; i < basededatos.nombre.length; i++) {
                    console.table(`indice:${i} nombre propietario: ${basededatos.nombrepropietario[i]} telefono de contacto: ${basededatos.telefono[i]}`)
                }
                basededatos.telefono[Number(prompt("indique el indice que quiere modificar"))] = prompt("indique el telefono corregido")
                alert("se ha modificado correctamente el telefono de contacto")
            }

        } else if (opcion === 10) {
            alert("vamos a modificar algun correo")
            let encontrado = true

            if (encontrado === true) {
                alert("en consola estan los nombres de los propietarios con sus indices verifique el correo con la demas informacion antes de cambiarlo")
                for (let i = 0; i < basededatos.nombre.length; i++) {
                    console.table(`indice:${i}  nombre propietario:${basededatos.nombrepropietario[i]} correo: ${basededatos.correo[i]}`)
                }
                basededatos.correo[Number(prompt("indique el indice que quiere modificar"))] = prompt("indique el correo corregido")
                alert("se ha modificado correctamente")
            }

        } else if (opcion === 11) {
            alert("volviendo al menu principal")
            break
        } else {
            alert("por favor ingrese una opcion valida")
        }
    }
}
function eliminarMascota(basededatos) {
    alert("Vas a eliminar alguna mascota y por lo tanto sus datos relacionados.");
    let busqueda = prompt("Ingrese el nombre de la mascota que desea eliminar:");
    //esta seria otra manera de crear una funcion especifica para buscar algun nombre
    let indicesEncontrados = []
    for (let i = 0; i < basededatos.nombre.length; i++) {
        if (busqueda === basededatos.nombre[i]) {
            indicesEncontrados.push(i)
        }
    }

    if (indicesEncontrados.length === 0) {
        alert(`La mascota "${busqueda}" no está en nuestra base de datos.`);
        return
    }
    //de esta manera le indicamos que si solo es un nombre el encontrado se elimine automaticamente 
    if (indicesEncontrados.length === 1) {
        const indice = indicesEncontrados[0]
        alert(`La mascota buscada: ${busqueda} se encuentra en nuestra base de datos.`);
        mostrarDatosMascota(basededatos, indice)
        eliminarMascotaPorIndice(basededatos, indice)
    } else {
        //definimos una variable mensaje con el fin de usarla en el for each
        let mensaje = `Se encontraron múltiples mascotas con el nombre ${busqueda} Por favor seleccione el índice de la mascota que desea eliminar:\n`;
        indicesEncontrados.forEach((indice, index) => {
            //con esto concatenamos el mensaje que habiamos definido como variable con las iteraciones que encuentre el for each
            mensaje += `${index + 1}. Índice: ${indice}, Nombre: ${basededatos.nombre[indice]}\n`
        });
        //al definir esta variable le estamos solicitando que ingrese una opcion y va a mostrar lo que se concateno en el pasdo for each con number lo volvemos un numero y con -1 obtenemos el indice 
        let opcion = Number(prompt(mensaje)) - 1;
        if (opcion >= 0 && opcion < indicesEncontrados.length) {
            //el indice va a ser el mismo que el obtenido en la opcion
            const indice = indicesEncontrados[opcion]
            alert(`Ha seleccionado la mascota "${basededatos.nombre[indice]}" para eliminar.`)
            mostrarDatosMascota(basededatos, indice);
            eliminarMascotaPorIndice(basededatos, indice)
        } else {
            alert("La opción seleccionada no es válida.")
        }
    }
}
//esta funcion literalmente solo muestra lo que hay en el diccionario en un indice en especifico
function mostrarDatosMascota(basededatos, indice) {
    console.log(`
        Nombre: ${basededatos.nombre[indice]}
        Especie: ${basededatos.especie[indice]}
        Raza: ${basededatos.raza[indice]}
        Edad: ${basededatos.edad[indice]}
        Peso: ${basededatos.peso[indice]}
        Estado: ${basededatos.estado[indice]}
        Nombre del dueño: ${basededatos.nombrepropietario[indice]}
        Documento del dueño: ${basededatos.documentopropietario[indice]}
        Teléfono de contacto: ${basededatos.telefono[indice]}
        Correo del propietario: ${basededatos.correo[indice]}
    `)
}
//esta funcion se activa siempre y cuando haya mas de dos nombres de mascotas iguales alli es donde se debe seleccionar el indice
function eliminarMascotaPorIndice(basededatos, indice) {
    delete basededatos.nombre[indice]
    delete basededatos.especie[indice]
    delete basededatos.raza[indice]
    delete basededatos.edad[indice]
    delete basededatos.peso[indice]
    delete basededatos.estado[indice]
    delete basededatos.nombrepropietario[indice]
    delete basededatos.documentopropietario[indice]
    delete basededatos.telefono[indice]
    delete basededatos.correo[indice]

    alert("La mascota ha sido eliminada correctamente.")
}
//solo se llama a esta funcion que controla las demas
menu()
