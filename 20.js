function crearObjeto(claves, valores) {
    let objeto = {};
    
    
    for (let i = 0; i < claves.length; i++) {
      objeto[claves[i]] = valores[i];
    }
    
    return objeto;
  }
  
  
  let claves = ["nombre", "edad", "ciudad"];
  let valores = ["peoe", 40, "cali"];
  
  let objeto = crearObjeto(claves, valores);
  console.log(objeto);
  