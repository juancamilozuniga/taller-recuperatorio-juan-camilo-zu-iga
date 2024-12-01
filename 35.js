
const personas = [
    { nombre: "Juan", edad: 25, profesion: "Desarrollador" },
    { nombre: "Ana", edad: 30, profesion: "Diseñadora" },
    { nombre: "Carlos", edad: 22, profesion: "Estudiante" },
    { nombre: "Laura", edad: 27, profesion: "Arquitecta" }
  ];
  
  
  function crearTabla(personas) {
    const tablaContainer = document.getElementById("tabla-container");
  
  
    let tabla = document.createElement("table");
  
    
    
    let thead = document.createElement("thead");
    
    let tr = document.createElement("tr");
  
    
    
    
    
    Object.keys(personas[0]).forEach(propiedad => {
    
    
    
    
        let th = document.createElement("th");
      th.textContent = propiedad.charAt(0).toUpperCase() + propiedad.slice(1); 
      tr.appendChild(th);
    });
    
    thead.appendChild(tr);
    

    tabla.appendChild(thead);
  
    
    
    let tbody = document.createElement("tbody");
  
    
    
    personas.forEach(persona => {
      let tr = document.createElement("tr");
      Object.values(persona).forEach(valor => {
    
        let td = document.createElement("td");
    
        td.textContent = valor;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
  
    tabla.appendChild(tbody);
  
   
    tablaContainer.appendChild(tabla);
  }
  
  // Llamar a la función para crear la tabla
  crearTabla(personas);
  