var nombre = document.getElementById('nombre');
var edad = document.getElementById('edad');
var email = document.getElementById('email');

var boton = document.getElementById('btn');

var contenido = document.querySelector('#contenido span');

var lista = document.getElementById('lista');

var cont = [{id:"1",name:"Jorge"},{id:"2",name:"Juan"},{id:"3",name:"Jose"},{id:"4",name:"Joaquin"}];
var lista2 = document.getElementById('lista2');

function saludo(texto){
  console.log(texto);
}

saludo("Hola desde la función");

const handleClick = () => {

  //Test inicial del botón
  saludo("Hola desde el botón");

  //1. Mostramos la forma más sencilla de modificar el DOM tras crear el contenido de la etiqueta  div a partir de una gran cadena y reemplazarlo con innerHTML
  contenido.innerHTML = nombre.value+', '+edad.value+', '+email.value;

  //2. Enseñamos a almacenar datos ingresados en arreglos
  let inputText = [nombre.value, edad.value, email.value];

  //3. Ciclamos los datos para crear cada elemento de la lista
  for (let i = 0; i < inputText.length; i++) {
    let nodo = document.createElement("li");
    let textoNodo = document.createTextNode(inputText[i]);
    nodo.appendChild(textoNodo);
    lista.appendChild(nodo);
  }

  //4. Enseñamos a realizar el mismo proceso pero a partir de un arreglo de objetos y a una de sus instancias (name)
  for (let i = 0; i < cont.length; i++) {
    let nombre = cont[i].name;
    let nodo = document.createElement("li");
    let textoNodo = document.createTextNode(nombre);
    nodo.appendChild(textoNodo);
    lista2.appendChild(nodo);
  }

}

boton.addEventListener('click', handleClick)
