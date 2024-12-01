function encontrarNumeroMayor(arreglo) {

    
    if (arreglo.length === 0) {
        return null; 


    }

    let numeroMayor = arreglo[0];



    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > numeroMayor) {
            numeroMayor = arreglo[i];
        }

    }

    return numeroMayor;
}



console.log(encontrarNumeroMayor([2,5,3,7]));


console.log(encontrarNumeroMayor([10,20,30])); 