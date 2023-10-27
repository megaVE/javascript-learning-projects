function sumUniqueNumbers (arrayN){
    let suma = 0;
    arrayN.forEach((element) => {arrayN.indexOf(element) === arrayN.lastIndexOf(element) ? suma += element : suma})
    return suma;
}