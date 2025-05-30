//Ejercicio 1: Eliminar el primer elemento del arreglo.

function eliminarPrimero(arr) {
    // El método 'shift()' elimina el primer elemento de un array
    // y modifica el array original. Además, devuelve el elemento eliminado.
    arr.shift();
    return arr; // Devolvemos el array modificado.
  }
  
  // Ejemplo de uso:
  let miArreglo1 = [1, 2, 3, 4];
  console.log("Ejercicio 1 - Original:", miArreglo1); // Muestra el array antes de la modificación
  let resultado1 = eliminarPrimero(miArreglo1);
  console.log("Ejercicio 1 - Modificado:", resultado1); // Muestra el array después de eliminar el primer elemento