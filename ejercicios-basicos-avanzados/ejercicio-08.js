//Ejercicio 8

/*Buscar la palabra más larga:** Completa la función que tomando un array de strings como argumento devuelva el **más largo**, en caso de que dos strings tenga la misma longitud deberá devolver el **primero**.*/

// Puedes usar este array para probar tu función:

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {

  let words = stringList[0];

  for (let index = 1; index <  stringList.length; index++) {
    if (stringList[index].length > words.length) {
      words = stringList[index];
    }

  }
  return words;
}

console.log(findLongestWord(avengers));