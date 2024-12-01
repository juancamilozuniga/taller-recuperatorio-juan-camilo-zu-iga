function mayusculas(arr) {
    return arr.map(function(elemento) {
        return elemento.toUpperCase();  
    });
}

// Ejemplo de uso:
let arreglo = ["hola", "juan", "camilo","zuñiga"];
console.log(mayusculas(arreglo)); 