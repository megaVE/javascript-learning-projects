function findMaxNumber(arrayN){
    let max = arrayN[0];
    arrayN.forEach((number) => {number > max ? max = number : max = max});
    return max;
}