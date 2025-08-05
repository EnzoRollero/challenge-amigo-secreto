// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    console.log(nombre);
    if (nombre === ''){
        alert('Por favor, inserte un nombre.');
    }  else if (nombreAmigos.includes(nombre)){
        alert('El nombre ingresado se encuentra repetido.');
        limpiarCajaTexto();
    } else {
        nombreAmigos.push(nombre);
        limpiarCajaTexto();
        mostrarListaAmigos();
    }
}

function limpiarCajaTexto(){
    document.querySelector('#amigo').value = '';
}
console.log(nombreAmigos);


function mostrarListaAmigos(){
    let amigosLista = document.getElementById('listaAmigos');
    amigosLista.innerHTML = ''; // limpiar la lista antes de mostrar los nuevos amigos
    // Recorremos el array de los nombres de amigos y creamos un nuevo elemento <li> para cada uno
    for (let i = 0; i < nombreAmigos.length; i++){
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = nombreAmigos[i];
        amigosLista.appendChild(nuevoElemento);
    }
}