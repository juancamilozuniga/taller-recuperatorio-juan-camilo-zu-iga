
let lista = document.getElementById("miLista");


let boton = document.getElementById("agregarElemento");


boton.addEventListener("click", function() {
  
  let nuevoElemento = document.createElement("li");
  
  
  nuevoElemento.textContent = "Nuevo Elemento";
  
  
  lista.appendChild(nuevoElemento);
});