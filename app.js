// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; //variable global donde se agregarán los amigos
document.getElementById('amigo').focus(); //se fija el foco del cursor en la caja de texto
console.log(amigos);

//Función para modificar los textos en el html:
function asignarTextoElemento(elemento, parámetro) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = parámetro;
    return;
}

//Función que evalua el ingreso de un nombre mediante el evento html:
function agregarAmigo(){
    let amigoIngresado = document.getElementById('amigo').value;
    console.log(amigoIngresado);

    //Evalución de que el campo no es vacío:
    if (amigoIngresado != ''){
        amigos.push(amigoIngresado); //agrego el nombre ingresado al arreglo
        console.log(amigos);
        document.getElementById('amigo').value = ''; //deja la caja de texto en blanco
        document.getElementById('amigo').focus();
        //document.querySelector('#listaAmigos').innerHTML = actualizaListaAmigos(amigos);
        actualizaListaAmigos(amigos);
    } else {
        alert('Por favor, ingrese un nombre.');
    }
    
    return;
}

function actualizaListaAmigos(actualizandoLista){
    //let agregandoAmigos = actualizandoLista;
    //asignarTextoElemento('#listaAmigos',''); //limpia la lista en html
    //document.querySelector('#listaAmigos').innerHTML = ''; //limpia la lista en html
    textoEnHtml = '';
    for(let i= 0; i < actualizandoLista.length; ++i){
        textoEnHtml += `<li>${actualizandoLista[i]}</li>`;
        document.querySelector('#listaAmigos').setAttribute('style','text-align: center'); //alinea cada elemento al centro
    }
    document.querySelector('#listaAmigos').innerHTML = textoEnHtml;
    return;
}