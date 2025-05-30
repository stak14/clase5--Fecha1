//Ejercicio 3: Sumar un número a cada elemento de un arreglo.

function sumarNumeroAArreglo(arr, numero) {
    // El método 'map()' crea un nuevo array con los resultados de llamar a una
    // función proporcionada en cada elemento del array original.
    return arr.map(elemento => {
      // Para cada 'elemento' del array, devolvemos el resultado de sumarle el 'numero'.
      return elemento + numero;
    });
  }
  
  // Ejemplo de uso:
  let miArreglo3 = [10, 20, 30];
  let numeroASumar = 5;
  console.log("Ejercicio 3 - Original:", miArreglo3);
  let resultado3 = sumarNumeroAArreglo(miArreglo3, numeroASumar);
  console.log("Ejercicio 3 - Modificado:", resultado3); // El array original no se modifica.