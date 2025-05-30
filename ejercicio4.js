//Ejercicio 4: Crear un arreglo de números desde 1 hasta un número recibido (n).

function crearArregloDeUnoAN(n) {
    // 'Array.from()' crea un nuevo array a partir de un objeto iterable o similar a un array.
    // Aquí usamos un objeto con una propiedad 'length' igual a 'n'.
    return Array.from({ length: n }, (_, index) => {
      // La función de callback recibe el valor del elemento (que no usamos, por eso '_')
      // y el índice del elemento actual. Sumamos 1 al índice para obtener números desde 1.
      return index + 1;
    });
  }
  
  // Ejemplo de uso:
  let tamaño = 7;
  let resultado4 = crearArregloDeUnoAN(tamaño);
  console.log("Ejercicio 4:", resultado4);