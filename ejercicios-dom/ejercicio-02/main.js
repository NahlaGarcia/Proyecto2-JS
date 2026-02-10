//1 Inserta dinamicamente en un html un div vacio con javascript.
const divNew = document.createElement('div');
document.body.appendChild(divNew);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div = document.createElement('div');
const p = document.createElement('p');
p.textContent = 'Soy un parrafo.';
div.appendChild(p);
document.body.appendChild(div);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const contenedor = document.createElement('div');
for (let i = 0; i < 6; i++) {
    const parrafo = document.createElement('p');
    parrafo.textContent = `Parrafo ${i + 1}`;
    contenedor.appendChild(parrafo);
}
document.body.appendChild(contenedor);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto'Soy dinámico!'.

const texto = document.createElement('p');
texto.textContent ='Soy dinámico';

document.body.appendChild(texto);

//2.5 Inserta en el h2 con la clase.fn-insert-here el texto'Wubba Lubba dub dub'.

//2.6 Basandote en el siguiente array crea una lista ul> li con los textos del array.
const apps=['Facebook','Netflix','Instagram','Snapchat','Twitter'];

//2.7 Elimina todos los nodos que tengan la clase.fn-remove-me

//2.8 Inserta una p con el texto'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con.appendChild.

//2.9 Inserta p con el texto'Voy dentro!', dentro de todos los div con la clase .fn-insert-her