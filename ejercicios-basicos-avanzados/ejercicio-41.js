//Ejercicio 41

/*Crea una función llamada **rollDice()** que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.
Que la función use el parametro para simular una tirada de dado y retornar el resultado.
Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript **Math.random()***/

function rollDice(carasDado) {
    let lanzarDado = Math.floor(Math.random() * carasDado + 1); // Generamos un numero aleatorio, redondeamos y multiplicamos por las caras que tenga el dado, simpre sumamos 1 para que nunca salga 0
    return lanzarDado;
}
console.log(rollDice(6));