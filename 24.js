
let contadorElement = document.getElementById("contador");


let boton = document.getElementById("aumentarContador");

let contador = 0;


boton.addEventListener("click", function() {
 
 
    contador++; 
 
    contadorElement.textContent = contador; 
});