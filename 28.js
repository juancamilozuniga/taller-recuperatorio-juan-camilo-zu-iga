
let tiempoRestante = document.getElementById("temporizador");
let boton = document.getElementById("iniciarTemporizador");


let segundos = 10;


boton.addEventListener("click", function() {
  
  boton.disabled = true;

 
  let intervalo = setInterval(function() {
    segundos--; 
    tiempoRestante.textContent = segundos; 

    
    if (segundos <= 0) {
      clearInterval(intervalo);
      tiempoRestante.textContent = "¡Tiempo agotado!";
      boton.disabled = false; 
    }
  }, 1000); 
});