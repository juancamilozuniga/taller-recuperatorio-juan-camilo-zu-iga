function filtrarMayoresQue10(arr) {
    
    let mayoresQue10 = [];  
    
    
    let num = 0;  

    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) { 
           
            mayoresQue10[num] = arr[i]; 
          
            num++;  
       
    
        }
    
    
    }





    return mayoresQue10;  
}
let arreglo = [ 15, 20, 7,5,70,45,3];
console.log(filtrarMayoresQue10(arreglo));