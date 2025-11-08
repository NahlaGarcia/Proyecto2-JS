//Ejercicio 13
/*Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.*/
//Puedes usar este array para probar tu función:
const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList, buscarName) {

    for (let i = 0; i < nameList.length; i++) {
        if (nameList[i] === buscarName){
            encontrado = true;
            posicion = i;  
            return{ //Creamos un objeto directamente en el return con las 2 propiedades y sus valores
                encontrado: true,
                poscion: i
            };
        }
    }
    return{ //Si al finalizar el bucle no encuentra el nombre
        encontrado: false,
        posicion: null
    };
}
console.log(nameFinder(names, "Steve")); //Comprobamos el codigo