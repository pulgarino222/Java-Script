alert("vamos a clasificar las notas para sacar un promedio")
const fisica = Number(prompt("ingrese la nota definitiva de la materia de fisica"))
const matematic = Number(prompt("ingrese la nota definitiva de la materia de matematica"))
const programing = Number(prompt("ingrese la nota definitiva de la materia de programacion"))
const life = Number(prompt("ingrese la nota definitiva de la materia de habilidades para la vida "))
const religion = Number(prompt("ingrese la nota definitiva de la materia de religion"))
let allnotes = [fisica, matematic, programing, life, religion]
let result;
let acomun = 0

for (let i = 0; i < allnotes.length; i++) {
    acomun += allnotes[i]
}
result = acomun / 5
if (result >= 3.0) {
    alert("aprobo")
    

} else {
    alert("reprobo")
}

console.info("su promedio es:"+ result)
console.table(allnotes)

