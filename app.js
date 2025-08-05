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
    }
}

function limpiarCajaTexto(){
    document.querySelector('#amigo').value = '';
}
console.log(nombreAmigos);

