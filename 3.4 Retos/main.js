// Crear una función que verifique si una palabra es palíndromo o no
// Forma 1: Revisando que cada caracter sea igual leyendo uno por uno de izquierda a derecha
// Ejemplos de palíndromos:
// NITA LAVA LA TINA, AMOR A ROMA, LA RUTA NATURAL, OJO ROJO

function frasePalindromo() {
  let frase = prompt("Escribe una frase").toLowerCase();

  // eliminamos los espacios en blanco
  frase = frase.replace(/\s/g, "");

  for (let i = 0; i < frase.length; i++) {
    if (frase[i] != frase[frase.length - i - 1]) {
      return false;
    }
  }

  return true;
}

if (frasePalindromo()) {
  alert("Esto es palíndromo");
  console.log("Esto es palíndromo");

} else {
  alert("Esto no es palíndromo");
  console.log("Esto no es palíndromo");
}


//Forma 2: Almacenando en un arreglo la misma palabra pero de izquierda a derecha y comparando que ambos arreglos sean iguales

function frasePalindromo(){
  // Solicitamos la frase, la pasamos a minusculas y quitamos espacios
  let frase = prompt("Escribe una frase").toLowerCase()

  //Quitamos espacios
  frase = frase.replace(/\s/g,"");
  // Creamos fraseReversa convirtiendo la frase  original en array, le damos la vuelta al array y juntamos todos los caracteres (al crearse el arreglo los caracteres son separados por comas "," ver console.log(frase))
  fraseReversa=frase.split("").reverse().join("");

  // Comparamos las dos frases.
  if(frase==fraseReversa){
    return true;
  }

  return false;

}

if (frasePalindromo()) {
  alert("Esto es palíndromo");
  console.log("Esto es palíndromo");

} else {
  alert("Esto no es palíndromo");
  console.log("Esto no es palíndromo");
}


// Ingresar una palabra y regresarla a la consola en fOrMaTo AlTeRnO

let palabra = prompt('palabra');
let resultado = '';

for(i = 0; i < palabra.length; i++) {
  if(i % 2 === 0) {
    resultado += palabra.charAt(i).toLowerCase();
  } else {
    resultado += palabra[i].toUpperCase();
  }
}

alert(resultado);
console.log(resultado);
