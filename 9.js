function sumaPares(array) {
   
    let suma = 0;
    

    
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) { 
        suma += array[i]; 
    
    
    }
   

}
    


    return suma;
  }
  

  console.log(sumaPares([4, 5, 18, 8, ]));  