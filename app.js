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
        document.getElementById('resultado').innerHTML = ''; //limpio el resultado del sorteo anterior
    }
}

function limpiarCajaTexto(){
    document.querySelector('#amigo').value = '';
}


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

// Esta función se encarga de realizar el sorteo del amigo secreto. Selecciona un amigo al azar de la lista de amigos ingresados. 
// Si no hay amigos en la lista, muestra un mensaje de alerta. Si hay amigos, selecciona uno al azar y lo muestra en el resultado.
// Luego limpia la caja de texto y reinicia el array de amigos para permitir un nuevo sorteo.
function sortearAmigo(){
    if (nombreAmigos.length < 1){ //verifico si el array de amigos está vacío, en caso de que sí, muestro un mensaje de alerta
        document.getElementById('resultado').innerHTML = 'Debe ingresar al menos un amigo para realiar el sorteo.';
    } else {
        let numeroAleatorio = Math.floor(Math.random()*nombreAmigos.length);//genero un número aleatorio entre 0 y la longitud del array de amigos
        let amigoSeleccionado = nombreAmigos[numeroAleatorio]; // selecciona un amigo al azar de la lista
        document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: ${amigoSeleccionado}`; //muestro el resultado del sorteo
        limpiarCajaTexto(); //limpio la caja de texto
        nombreAmigos = []; // reinicio el array de amigos para permitir un nuevo sorteo
        document.getElementById('listaAmigos').innerHTML = '';  // limpio la lista de amigos mostrada
    }
}
