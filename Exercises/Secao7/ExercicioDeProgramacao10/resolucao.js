function reverseString(tekst){
    let reverse = [];
    for(let x = 0; x < tekst.length; x++){
        reverse.push(tekst[tekst.length - x - 1]);
    }
    return reverse.join("");
}