let x = 149;

if(x <= 0)
    console.log("Entrada inválida");
else
    if(x == 1)
        console.log(`${x} não é primo!`);
    else{
        let v;
        for(v = 2; v < x; v++){
            if (x % v == 0){
                console.log(`${x} não é primo!`);
                v = x+1;
            }
        }
        if(v == x)
            console.log(`${x} é primo!`);
    }