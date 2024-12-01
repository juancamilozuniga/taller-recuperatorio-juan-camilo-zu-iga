
let miElemento = document.getElementById("miElemento");


let boton = document.getElementById("toggleButton");


boton.addEventListener("click", function() {
  
    if (miElemento.style.display === "none") {
  
        miElemento.style.display = "block"; 
  
  
    } else {
    miElemento.style.display = "none"; 
 

 }


});