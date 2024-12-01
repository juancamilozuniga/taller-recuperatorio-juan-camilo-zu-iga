function sumarArray(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]; 
    }
    return suma;
}
const array = [15, 9, 3, 10, 5,20]; 
const resultado = sumarArray(array);
console.log("La suma del array es:", resultado)