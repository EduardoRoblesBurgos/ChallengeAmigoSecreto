// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];              //variable global donde se agregarán los amigos
limpiarCajaTexto('amigo','');
console.log('Listado de amigos: '+amigos);


//Función que evalua el ingreso de un nombre mediante el evento html:
function agregarAmigo(){
    let amigoIngresado = document.getElementById('amigo').value;  //se obtiene el valor del textbox a la variable
    
    //Evaluación de que el campo no es un texto vacío:
    if (amigoIngresado != ''){
        
        if(amigos.includes(amigoIngresado)){
            //asignarTextoElemento('#resultado','');
            limpiarCajaTexto('amigo','');
            alert('Esta persona ya está incluida');
        } else{
            amigos.push(amigoIngresado); //agrego el nombre obtenido al arreglo
            console.log('La nueva persona ingresada es: '+amigoIngresado);
            console.log('Listado de amigos: '+amigos);  
            console.log('Cantidad de amigos en el arreglo: '+amigos.length);
    
            asignarTextoElemento('#resultado','');
            limpiarCajaTexto('amigo','');
            actualizaListaAmigos();
        }
    } else {
        //asignarTextoElemento('#resultado','');
        limpiarCajaTexto('amigo','');
        alert('Por favor, ingrese un nombre.');
    }
    
    return;
}


//Función que mustra la lista de amigos actualizada en pantalla:
function actualizaListaAmigos(){
    textoEnHtml = '';
    
    for(let i= 0; i < amigos.length; ++i){
        textoEnHtml += `<li>${amigos[i]}</li>`;
        document.querySelector('#listaAmigos').setAttribute('style','text-align: center'); //alinea cada elemento al centro
    }
    asignarTextoElemento('#listaAmigos',textoEnHtml);
    
    return;
}


//Función que sortea el amigo en forma semi-aleatoria:
function sortearAmigo(){
    
    if(amigos.length != 0){
        let numeroGenerado = generarAmigoSorteado();

        document.querySelector('#resultado').setAttribute('style','text-align: center'); //alinea el texto del sorteo al centro
        asignarTextoElemento('#resultado',`¡La persona sorteada es ${amigos[numeroGenerado - 1]}!`);
        
        limpiarCajaTexto('amigo','');
        document.querySelector('#listaAmigos').innerHTML = '';
        
    } else{
        document.querySelector('#resultado').setAttribute('style','text-align: center'); //alinea el texto del sorteo al centro
        asignarTextoElemento('#resultado','¡Ingrese al menos un amigo para sortear!');
        
        //limpiarCajaTexto('amigo','');
        document.getElementById('amigo').focus();   
    }

    return;
}


//Genera número semi-aleatorio:
function generarAmigoSorteado(){
    return Math.floor(Math.random()*amigos.length)+1;
}


function limpiarCajaTexto(id, parametro){
    document.getElementById(id).value = parametro; //deja la caja de texto en blanco
    document.getElementById(id).focus();           //se fija el foco del cursor en la caja de texto parq que el usuario no tenga que mover y seleccionar el cursor sobre el textbox
    return;
}


//Función que asigna texto a etiquetas del HTML::
function asignarTextoElemento(elemento, parámetro) {
    let elementoHTML = document.querySelector(elemento);  //obtiene el elemento html
    elementoHTML.innerHTML = parámetro;
    return;
}