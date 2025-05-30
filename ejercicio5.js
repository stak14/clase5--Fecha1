//Ejercicio 5: Encontrar el número distinto en un arreglo donde todos los demás son iguales.

function encontrarUnico(arr) {
    // Creamos un objeto para contar la frecuencia de cada número en el array.
    const conteo = {};
    // Iteramos sobre cada número del array.
    for (const num of arr) {
      // Si el número ya existe como clave en 'conteo', incrementamos su valor.
      // Si no existe, lo agregamos con un valor de 1.
      conteo[num] = (conteo[num] || 0) + 1;
    }
    // Iteramos sobre las claves (los números) del objeto 'conteo'.
    for (const num in conteo) {
      // Si la frecuencia de un número es igual a 1, ese es el número único.
      if (conteo[num] === 1) {
        // 'num' es una cadena (la clave del objeto), así que la convertimos a entero.
        return parseInt(num);
      }
    }
    // Si no se encuentra ningún número con frecuencia 1, devolvemos null.
    return null;
  }
  
  // Ejemplo de uso:
  let miArreglo5 = [5, 5, 5, 2, 5, 5];
  console.log("Ejercicio 5 - Arreglo:", miArreglo5);
  let resultado5 = encontrarUnico(miArreglo5);
  console.log("Ejercicio 5 - Número único:", resultado5);