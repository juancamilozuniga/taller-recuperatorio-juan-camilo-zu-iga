function arregloinvertido(arreglo) {
 let arregloinvertido= [];
 for (let i = arreglo.length - 1; i >= 0; i--) {
        arregloinvertido.push(arreglo[i]);
    }
    return arregloinvertido;  
}

let numeros = [10,9,3,2,1];
console.log(arregloinvertido(numeros)); 


let num = [10,30,40,];
console.log(arregloinvertido(num)); 


