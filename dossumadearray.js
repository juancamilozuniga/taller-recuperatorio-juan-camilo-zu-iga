function sumarArreglo(arr) {
    let suma = 0; 
    for (let i = 0; i < arr.length; i++) {
      suma += arr[i]; 
    }
    return suma;
  }
  
  
  let numeros = [1,2,3,4,5];
  let resultado = sumarArreglo(numeros);
  console.log(resultado);  