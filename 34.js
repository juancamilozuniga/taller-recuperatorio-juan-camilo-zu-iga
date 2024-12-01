
let inputTarea = document.getElementById("nuevaTarea");
let botonAgregar = document.getElementById("agregarTarea");
let listaTareas = document.getElementById("listaTareas");


botonAgregar.addEventListener("click", function() {
  let tarea = inputTarea.value.trim();

  if (tarea !== "") {
    let li = document.createElement("li"); 
    li.innerHTML = `
      <span>${tarea}</span>
      <button class="completar">Completar</button>
      <button class="eliminar">Eliminar</button>
    `;

   
    let botonCompletar = li.querySelector(".completar");
    botonCompletar.addEventListener("click", function() {
      li.querySelector("span").classList.toggle("completada");
    });

   
    let botonEliminar = li.querySelector(".eliminar");
    botonEliminar.addEventListener("click", function() {
      listaTareas.removeChild(li); 

    
    listaTareas.appendChild(li);

    
    inputTarea.value = "";
  } else {
    
    alert("Por favor ingresa una tarea.");
  }
});


inputTarea.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    botonAgregar.click(); 
  }
});