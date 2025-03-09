// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//let amigos = ['vale','edu','hugo','michael'];  //variable global donde se agregarán los amigos
let amigos = [];  //variable global donde se agregarán los amigos
limpiarCajaTexto('amigo','');
console.log('Listado de amigos: '+amigos);

//1. FUNCIONES BASE DEL PROYECTO
//1.1 Función que evalua el ingreso de un nombre mediante el evento html:
function agregarAmigo(){
    let amigoIngresado = document.getElementById('amigo').value;  //se obtiene el valor del textbox a la variable
    
    if (amigoIngresado != ''){                 //Evaluación de que el campo no es un texto vacío:
        if(amigos.includes(amigoIngresado)){   //Evalua si la persona ya se encuantra en la lista
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
    } else{
        limpiarCajaTexto('amigo','');
        alert('Por favor, ingrese un nombre.');
    }
    
    return;
}

//1.2 Función que mustra la lista de amigos actualizada en pantalla:
function actualizaListaAmigos(){
    document.querySelector('#listaAmigos').setAttribute('style','text-align: center'); //alinea cada elemento al centro
    textoEnHtml = 'Amigas y Amigos:';
    
    for(let i= 0; i < amigos.length; ++i){
        textoEnHtml += `<li>${amigos[i]}</li>`;
    }
    asignarTextoElemento('#listaAmigos',textoEnHtml);
    
    return;
}

//1.3 Función que sortea el amigo en forma semi-aleatoria:
function sortearAmigo(){
    if(amigos.length != 0){
        let numeroGenerado = generarAmigoSorteado();

        document.querySelector('#resultado').setAttribute('style','text-align: center'); //alinea el texto del sorteo al centro
        asignarTextoElemento('#resultado',`¡La persona secreta es ${amigos[numeroGenerado - 1]}!`);
        
        limpiarCajaTexto('amigo','');
        document.querySelector('#listaAmigos').innerHTML = '';
    } else{
        document.querySelector('#resultado').setAttribute('style','text-align: center'); //alinea el texto del sorteo al centro
        asignarTextoElemento('#resultado','¡Ingrese al menos un amigo para sortear!');
        limpiarCajaTexto('amigo','');
    }

    return;
}


//2. FUNCIONES COMPLEMENTARIAS
//2.1 Genera número semi-aleatorio:
function generarAmigoSorteado(){
    return Math.floor(Math.random()*amigos.length)+1;
}

//2.2 Limpia y enfoca la caja de texto
function limpiarCajaTexto(id, parametro){
    document.getElementById(id).value = parametro; //deja la caja de texto en blanco
    document.getElementById(id).focus();           //se fija el foco del cursor en la caja de texto parq que el usuario no tenga que mover y seleccionar el cursor sobre el textbox
    return;
}

//2.3 Función que asigna texto a etiquetas del HTML::
function asignarTextoElemento(elemento, parámetro) {
    let elementoHTML = document.querySelector(elemento);  //obtiene el elemento html
    elementoHTML.innerHTML = parámetro;
    return;
}