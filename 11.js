function mayoresQue(arreglo, num) {
    let resultado = [];
  
    
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] > num) {
        resultado.push(arreglo[i]);
      }
    }
  
    return resultado;
  }
  
  console.log(mayoresQue([24, 1, 10, 40, 7], 6)); 