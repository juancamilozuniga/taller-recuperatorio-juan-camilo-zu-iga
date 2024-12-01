
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;



let botonComprobar = document.getElementById("comprobar");

let inputNumero = document.getElementById("numero");


let mensaje = document.getElementById("mensaje");


botonComprobar.addEventListener("click", function() {
  let numeroUsuario = parseInt(inputNumero.value); 

  
  if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
    mensaje.textContent = " ingresa un número válido entre 1 y 100.";
    return;
  }

  intentos++; 

 
 
  if (numeroUsuario === numeroSecreto) {
    mensaje.textContent = ¡Felicidades! Adivinaste el número en ${intentos} intentos.;
 
  } else if (numeroUsuario < numeroSecreto) {
    mensaje.textContent = "El número es mayor. ¡juega de nuevo!";
 
  } else {
 
    mensaje.textContent = "El número es menor. ¡juega de nuevo!";
  }

 
 
  inputNumero.value = ""; 
  inputNumero.focus(); 
});