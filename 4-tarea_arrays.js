// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio del array y añadir el nombre del cliente al final.
function procesarPedido(pedido) {
    //Primero elimino el primer elemento y almaceno el nombre en la variable
    const nombreDelCliente = pedido.shift();
    
    pedido.unshift('bebidas'); //Agrego 'bebidas' al principio de la lista
    pedido.push(nombreDelCliente); //Agrego el valor de la variable al final de la lista
    
    return pedido;
    // Tu código aquí
}

// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
// Debes iterar sobre el array, sumar todos los números pares y devolver la suma.
function sumarPares(numeros) {
    //Se define un valor a la suma
    let suma = 0;
    //Se crea un for que recorrar la el largo de la lista
    for (let i = 0; i < numeros.length; i++){
        //Si el modulo del elemento actual es igual a 0 (Par) 
        if (numeros[i] % 2 === 0){
            //Se suman
            suma += numeros[i];
        }
    }
    // tu código aquí
    //Caso contrario se retorna la suma
    return suma;
}

// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras y devuelva `true` si todas terminan con "a", o `false` si al menos una no lo hace.
function palabrasTerminanConA(palabras) {
    const elementosConA = palabras.filter (palabras => palabras.includes('a'));
    if (elementosConA){
        return true;
    }
    return false;
    // Tu código aquí
}

const palabras = ['casa', 'silla', 'mesa']
console.log(palabrasTerminanConA(palabras)) // -> true

// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras` que reciba dos parámetros: un array `words` y una palabra `word`.
// Busca el índice de la palabra en el array y devuelve todas las palabras después de ese índice en un nuevo array
function buscaPalabras(words, word) {
    const posicionWord = words.indexOf(word);
    if (posicionWord === -1){
        return [];
    }
    return words.slice(posicionWord + 1);
    // Tu código aquí
}

const words = ['hola', 'mundo', 'javascript', 'node'];
console.log(buscaPalabras(words, 'mundo')) // El resultado debe ser: ['javascript', 'node']

// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas y devuelva la posición de "JavaScript".
// Si no la encuentra, devuelve [-1, -1].
function findJavaScript(matrix) {
    for (i = 0; i < matrix.length; i++){
        for (j = 0; j < matrix[i].length; j++){
            if (matrix[i][j] === 'JavaScript'){
                return [i, j];
            }
        }
    }
    return [-1, -1];
    // Tu código aquí
}

const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
    ]

const position = findJavaScript(matrix);
console.log(position); // -> [0, 2]

// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números (representando el número de páginas de libros).
// La función debe devolver un array con dos posiciones: el índice del libro con menos páginas y el índice del libro con más páginas.
function findMinMaxPages(books) {
    let max = books[0]
    let min = books[0]
    for (i = 0; i < books.length; i++){
        if (books[i] < min){
            min = books[i];
        } else {
            max = books[i];
        }
    }
    return [min, max];
    // Tu código aquí
}

const libros = [350, 120, 540, 275, 390, 130, 670];
const resultado = findMinMaxPages(libros);
console.log(resultado); // -> [1, 6]

// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};

