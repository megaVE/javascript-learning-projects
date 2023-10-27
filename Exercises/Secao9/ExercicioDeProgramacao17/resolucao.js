function removeDuplicates(arrayI){
    let arrayE = [];
    arrayI.forEach((element) => {!arrayE.includes(element) ? arrayE.push(element) : arrayE = arrayE})
    return arrayE;
}