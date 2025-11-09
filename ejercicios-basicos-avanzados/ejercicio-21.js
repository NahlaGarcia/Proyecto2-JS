//Ejercicio 21

/*Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".*/

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

const mayoresEdad = [];
const menoresEdad = [];

for (const usuario of users) {
    if (usuario.years > 18) {
        mayoresEdad.push(usuario.name);
        
    } else {
        menoresEdad.push(usuario.name);
    }
}

console.log("Usuarios mayores de edad: " + mayoresEdad.join(" ,"));
console.log("Usuarios menores de edad: " + menoresEdad.join(" ,"));