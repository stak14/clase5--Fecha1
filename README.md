# Ejercicios de Arreglos en JavaScript

Este repositorio contiene una serie de ejercicios diseñados para practicar la manipulación de arreglos en JavaScript. Cada ejercicio se encuentra en su propio archivo `.js` y también hay un archivo consolidado llamado `todosEjercicios.js` que incluye todas las soluciones.

## Descripción de los Ejercicios

A continuación, se detalla cada uno de los ejercicios:

### 1. Eliminar el primer elemento de un arreglo
* **Archivo:** `ejercicio1.js`
* **Función:** `eliminarPrimero(arr)`
* **Descripción:** Esta función toma un arreglo `arr` y utiliza el método `shift()` para eliminar su primer elemento. Devuelve el arreglo modificado.
* **Ejemplo:**
    ```javascript
    let miArreglo1 = [1, 2, 3, 4];
    eliminarPrimero(miArreglo1); // Devuelve [2, 3, 4]
    ```

### 2. Eliminar los últimos 3 elementos si el arreglo tiene más de 5 elementos
* **Archivo:** `ejercicio2.js`
* **Función:** `eliminarUltimosTresSiMayorQueCinco(arr)`
* **Descripción:** La función verifica si la longitud del arreglo `arr` es mayor que 5. Si es así, elimina los últimos 3 elementos usando `splice(-3, 3)`. Si no, devuelve un mensaje de error.
* **Ejemplo:**
    ```javascript
    let miArreglo2_mayor = [1, 2, 3, 4, 5, 6, 7, 8];
    eliminarUltimosTresSiMayorQueCinco(miArreglo2_mayor); // Devuelve [1, 2, 3, 4, 5]

    let miArreglo2_menor = [1, 2, 3];
    eliminarUltimosTresSiMayorQueCinco(miArreglo2_menor); // Devuelve "Error: El arreglo debe tener más de 5 elementos."
    ```

### 3. Sumar un número a cada elemento de un arreglo
* **Archivo:** `ejercicio3.js`
* **Función:** `sumarNumeroAArreglo(arr, numero)`
* **Descripción:** Esta función utiliza el método `map()` para crear un nuevo arreglo donde a cada elemento del arreglo original `arr` se le ha sumado el `numero` proporcionado. El arreglo original no se modifica.
* **Ejemplo:**
    ```javascript
    let miArreglo3 = [10, 20, 30];
    let numeroASumar = 5;
    sumarNumeroAArreglo(miArreglo3, numeroASumar); // Devuelve [15, 25, 35]
    ```

### 4. Crear un arreglo de números desde 1 hasta n
* **Archivo:** `ejercicio4.js`
* **Función:** `crearArregloDeUnoAN(n)`
* **Descripción:** La función crea y devuelve un nuevo arreglo que contiene números secuenciales desde 1 hasta el número `n` especificado. Utiliza `Array.from()` con un objeto de longitud `n` y una función de mapeo que devuelve `index + 1`.
* **Ejemplo:**
    ```javascript
    let tamaño = 7;
    crearArregloDeUnoAN(tamaño); // Devuelve [1, 2, 3, 4, 5, 6, 7]
    ```

### 5. Encontrar el número distinto en un arreglo
* **Archivo:** `ejercicio5.js`
* **Función:** `encontrarUnico(arr)`
* **Descripción:** Esta función toma un arreglo `arr` donde se asume que todos los números son iguales excepto uno. Cuenta la frecuencia de cada número y devuelve aquel cuya frecuencia es 1. Si no hay un número único o el arreglo está vacío de esa manera, podría devolver `null`. El número devuelto es convertido a entero.
* **Ejemplo:**
    ```javascript
    let miArreglo5 = [5, 5, 5, 2, 5, 5];
    encontrarUnico(miArreglo5); // Devuelve 2
    ```

## Archivo Consolidado

* **Archivo:** `todosEjercicios.js`
* **Descripción:** Este archivo contiene el código de todas las funciones de los ejercicios anteriores (Ejercicio 1 al 5) junto con sus respectivos ejemplos de uso.

## Cómo Ejecutar los Ejercicios

Para ejecutar estos ejercicios:
1.  Asegúrate de tener Node.js instalado en tu sistema.
2.  Abre una terminal o línea de comandos.
3.  Navega hasta el directorio donde guardaste los archivos `.js`.
4.  Ejecuta el archivo deseado usando Node.js. Por ejemplo, para ejecutar `ejercicio1.js`:
    ```bash
    node ejercicio1.js
    ```
    O para ejecutar el archivo que contiene todos los ejercicios:
    ```bash
    node todosEjercicios.js
    ```
5.  Los resultados (salidas `console.log`) se mostrarán en la terminal.

Alternativamente, puedes copiar y pegar el contenido de cualquier archivo `.js` en la consola de desarrollador de tu navegador web para ver los resultados.
