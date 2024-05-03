let edad=Number(prompt("ingrese su edad"))
if(edad<18){
    alert("usted es menor de edad ")
    console.info("usted es menor de edad")
    
}else if((edad>18)&&(edad<=24) ){
    alert("bienvenido a la juventud")
    console.info("bienvenido a la juventud")
}else if(edad>=25){
    alert("bienvenido adulto mayor")
}

