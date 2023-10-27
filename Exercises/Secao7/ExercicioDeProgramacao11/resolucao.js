function countVowels(tekst){
    let x = 0;
    for(let i = 0; i < tekst.length; i++)
        if(tekst[i] == 'a' || tekst[i] == 'e' || tekst[i] == 'i' || tekst[i] == 'o' || tekst[i] == 'u')
            x++;
    return x;
}