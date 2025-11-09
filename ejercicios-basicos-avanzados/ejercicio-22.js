//Ejercicio 22

/*Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.

Recuerda no usar frutas duplicadas.

Finalmente, imprime el array resultante.*/

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let indiceFruits = 0;

for (let i = 0; i < foodSchedule.length; i++) {
    
    if (foodSchedule[i].isVegan == false && indiceFruits < fruits.length) {
        
        foodSchedule[i].name = fruits[indiceFruits]; //Aqui cambiamos el valor de name por el de la fruta
        
        foodSchedule[i].isVegan = true; //Como ahora ya es vegano cambiamos su valor a true
        
        indiceFruits ++; //amentamos el indice para que pase a la siguiente fruta
    }
    
}
console.log(foodSchedule);