function calculateAverage(numer){
    let n;
    let soma = 0;
    if(numer.length === 0)
        return 0;
    for(n = 0; n < numer.length;n++){
        soma = soma + numer[n];
    }
    return soma/n;
}