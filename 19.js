function contarPalabra(array, palabra) {
    return array.filter(elemento => elemento === palabra).length;
  }
  
  
  let palabras = ["hola", , "hola",  "juan"];
  console.log(contarPalabra(palabras, "hola")); 