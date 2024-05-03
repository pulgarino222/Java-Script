const listFruits = [
  "apple",
  "orange",
  "banana",
  "grape",
  "strawberry",
  "kiwi",
  "pineapple",
  "watermelon",
  "mango",
  "pear",
  "peach",
  "plum",
  "cherry",
  "blueberry",
  "raspberry",
  "blackberry",
  "lemon",
  "lime",
  "coconut",
  "pomegranate",
];

console.groupCollapsed("for each");

// print list with classic for
for (let i = 0; i < listFruits.length; i++) {
  console.info(listFruits[i]);
}
console.error(`salto de linea`);
//otro metodo mas simple
listFruits.forEach((fruit) => {
  console.info(fruit.toLowerCase());
});
console.error(`salto de linea`);
listFruits.forEach((fruit) => {
  console.info(fruit.toUpperCase());
});

console.groupEnd();

console.groupCollapsed("for in");
//el for in saca los indices de una lista
for (const key in listFruits) {
    console.log(key)
  }
console.error("salto de linea")

for (const key in listFruits) {
  console.log(listFruits[key])
}

console.error(`line break`)

listFruits.forEach((fruit,index) => {
    console.info(`the fruit ${fruit} is in the position ${index}`)
})

console.groupEnd()

//for of trae los valores
console.groupCollapsed("for of")

for (const fruit of listFruits) {
    console.log(fruit)
    
}
    
console.groupEnd()
