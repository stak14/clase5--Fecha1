//Ejercicio 2: Eliminar los últimos 3 elementos de un arreglo con más de 5 elementos, mostrando un error si no.

function eliminarUltimosTresSiMayorQueCinco(arr) {
    // Verificamos si la longitud del array es mayor que 5.
    if (arr.length > 5) {
      // El método 'splice()' puede añadir o eliminar elementos de un array.
      // Aquí lo usamos para eliminar. El primer argumento (-3) indica que
      // queremos empezar a eliminar desde el tercer elemento contando desde el final.
      // El segundo argumento (3) indica cuántos elementos queremos eliminar.
      arr.splice(-3, 3);
      return arr; // Devolvemos el array modificado.
    } else {
      // Si la condición no se cumple, devolvemos un mensaje de error.
      return "Error: El arreglo debe tener más de 5 elementos.";
    }
  }
  
  // Ejemplos de uso:
  let miArreglo2_mayor = [1, 2, 3, 4, 5, 6, 7, 8];
  let miArreglo2_menor = [1, 2, 3];
  console.log("Ejercicio 2 (mayor) - Original:", miArreglo2_mayor);
  let resultado2_mayor = eliminarUltimosTresSiMayorQueCinco(miArreglo2_mayor);
  console.log("Ejercicio 2 (mayor) - Modificado:", resultado2_mayor);
  console.log("Ejercicio 2 (menor):", eliminarUltimosTresSiMayorQueCinco(miArreglo2_menor));