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
const h2 = document.querySelector('.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';

//2.6 Basandote en el siguiente array crea una lista ul> li con los textos del array.
const apps=['Facebook','Netflix','Instagram','Snapchat','Twitter'];

const ul = document.createElement('ul');
for (let i = 0; i < apps.length; i++) {
    const li = document.createElement('li');
    li.textContent = apps[i];
    ul.appendChild(li);
}

document.body.appendChild(ul);

//2.7 Elimina todos los nodos que tengan la clase.fn-remove-me
const elementos = document.querySelectorAll('.fn-remove-me');
for (const elemento of elementos) {
    elemento.remove();
    
}

//2.8 Inserta una p con el texto'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con.appendChild.
const enMedio = document.createElement('p');
enMedio.textContent = 'Voy en medio!';

const divs = document.querySelectorAll('div');
divs[0].insertAdjacentElement('afterend', enMedio);

//2.9 Inserta p con el texto'Voy dentro!', dentro de todos los div con la clase .fn-insert-her

const divsInsert = document.querySelectorAll('.fn-insert-here');
for (const divInsert of divsInsert) {
    const text = document.createElement ('p');
    text.textContent = 'Voy dentro!';
    divInsert.appendChild(text);
    
}