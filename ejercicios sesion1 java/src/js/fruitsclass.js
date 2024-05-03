// en esta seccion se piden las frutas y se almacenan

const listFruits=[]
let citrics=[]
let nocitrics=[]


for (let i=0;i<5; i++){
    const frutas=prompt("entered a fruit")
    listFruits.push(frutas)
}

console.log("la lista es:"+" "+listFruits)

//aca vamos a realizar algo que recorra el arreglo y pregunte si es citrico o no

for(let j=0; j<listFruits.length; j++){
    alert("la fruta "+ listFruits[j])
    let pregunta=prompt("¿la fruta es citrica? si o no")
    if(pregunta=="si"){
        citrics.push(listFruits[j])
    }else if(pregunta=="no"){
        nocitrics.push(listFruits[j])
        
    }else {
        alert("ingrese un dato valido")
    }

}

console.table("citricos",citrics)
console.table("no citricos" , nocitrics)
