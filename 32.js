function miMap(array, callback) {
   
    let nuevoArray = []; 
  
    
    for (let i = 0; i < array.length; i++) {
     
     
        nuevoArray.push(callback(array[i], i, array));
    }
  
    return nuevoArray; 
  }
  
  
  
  
  
  let numeros = [1, 2, 3, 4, 5];
  
  
  let resultado = miMap(numeros, function(numero) {
    return numero * 2; // Multiplicamos cada número por 2
  

});
  
  console.log(resultado); // [2, 4, 6, 8, 10]