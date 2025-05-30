//Ejercicio 1: Eliminar el primer elemento del arreglo.
function eliminarPrimero(arr) {
  arr.shift();
  return arr;
}

// Ejemplo:
let miArreglo1 = [1, 2, 3, 4];
console.log("Ejercicio 1 - Original:", miArreglo1);
let resultado1 = eliminarPrimero(miArreglo1);
console.log("Ejercicio 1 - Modificado:", resultado1);

//Ejercicio 2: Eliminar los últimos 3 elementos de un arreglo con más de 5 elementos, mostrando un error si no.

function eliminarUltimosTresSiMayorQueCinco(arr) {
  if (arr.length > 5) {
    arr.splice(-3, 3);
    return arr;
  } else {
    return "Error: El arreglo debe tener más de 5 elementos.";
  }
}

// Ejemplos de uso:
let miArreglo2_mayor = [1, 2, 3, 4, 5, 6, 7, 8];
let miArreglo2_menor = [1, 2, 3];
console.log("Ejercicio 2 (mayor) - Original:", miArreglo2_mayor);
let resultado2_mayor = eliminarUltimosTresSiMayorQueCinco(miArreglo2_mayor);
console.log("Ejercicio 2 (mayor) - Modificado:", resultado2_mayor);
console.log(
  "Ejercicio 2 (menor):",
  eliminarUltimosTresSiMayorQueCinco(miArreglo2_menor)
);

//Ejercicio 3: Sumar un número a cada elemento de un arreglo.

function sumarNumeroAArreglo(arr, numero) {
  return arr.map((elemento) => {
    return elemento + numero;
  });
}

// Ejemplo de uso:
let miArreglo3 = [10, 20, 30];
let numeroASumar = 5;
console.log("Ejercicio 3 - Original:", miArreglo3);
let resultado3 = sumarNumeroAArreglo(miArreglo3, numeroASumar);
console.log("Ejercicio 3 - Modificado:", resultado3);

//Ejercicio 4: Crear un arreglo de números desde 1 hasta un número recibido (n).

function crearArregloDeUnoAN(n) {
  return Array.from({ length: n }, (_, index) => {
    return index + 1;
  });
}

// Ejemplo de uso:
let tamaño = 7;
let resultado4 = crearArregloDeUnoAN(tamaño);
console.log("Ejercicio 4:", resultado4);

//Ejercicio 5: Encontrar el número distinto en un arreglo donde todos los demás son iguales.

function encontrarUnico(arr) {
  const conteo = {};

  for (const num of arr) {
    conteo[num] = (conteo[num] || 0) + 1;
  }
  for (const num in conteo) {
    if (conteo[num] === 1) {
      return parseInt(num);
    }
  }
  return null;
}

// Ejemplo de uso:
let miArreglo5 = [5, 5, 5, 2, 5, 5];
console.log("Ejercicio 5 - Arreglo:", miArreglo5);
let resultado5 = encontrarUnico(miArreglo5);
console.log("Ejercicio 5 - Número único:", resultado5);
