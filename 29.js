// Array con las URLs de las imágenes
let imagenes = [
    "rolex1.jpeg",
    "rolex2.jpeg",
    "rolex3.jpeg",


];
    

  
  
  let indiceActual = 0;
  

 
  
  
  let imagenGaleria = document.getElementById("imagenGaleria");
  
  let botonAnterior = document.getElementById("anterior");
  
  
  let botonSiguiente = document.getElementById("siguiente");
  
  
  function actualizarImagen() {
   
   
   
   
    imagenGaleria.src = imagenes[indiceActual];
  }
  
  
  botonAnterior.addEventListener("click", function() {
    if (indiceActual > 0) {
      indiceActual--; 
      indiceActual = imagenes.length - 1; 
    }
    actualizarImagen(); 
  });
  
  
  botonSiguiente.addEventListener("click", function() {
    if (indiceActual < imagenes.length - 1) {
      indiceActual++; 
    } else {
      indiceActual = 0; 
    }
    actualizarImagen(); 
  });