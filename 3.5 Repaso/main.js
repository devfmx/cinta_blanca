//Crear un arreglo con diferentes tipos de datos y mostrarlos en la consola uno por uno a través de un ciclo FOR

// let array = [9, 30, 'a', 'hola', 10, 'a', 'hola', 10]
//
// for(let i = 0; i < array.length ; i = i + 1) {
//   console.log( array[i] )
// }

// let x = 10
// equivalentes
// x = x + 1
// x += 1
// x++

// console.log(x)


//A través de un ciclo for mostrar en la consola los números del 1 al 100 e indicar si son par o impar

//Bonus: agregar esto y los push para explicar ordenamiento en arreglos después de haber hecho el ejercicio
// var pares = ["Pares:"]
// var impares = ["Impares:"]

for(let i = 1; i <= 100 ; i++) {

  if( i % 2 === 0){
    console.log(i, 'es par')
    // pares.push(i)

  }else {
    console.log(i, 'es impar')
    // impares.push(i)
  }

}

//Mostrar en consola los arreglos pares e impares
// console.log(pares)
// console.log(impares)


// Funciones

const suma = (a, b) => {
  return a + b
}

const resta = function(a, b){
  return a - b
}

let x = suma(10, 6)
let y = suma(x, 100)

let sum = suma(suma(10, 6), 100)

let res = resta(sum, 100)

console.log(y) //116
console.log(sum) //116
console.log(x) //16
console.log(res) //16
