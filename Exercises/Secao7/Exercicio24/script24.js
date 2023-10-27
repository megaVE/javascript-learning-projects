function wzmocnienie(numer, wykladnikPotegowy){
    if(wykladnikPotegowy === 0)
        return 1;
    else{
        result = numer;
        if(wykladnikPotegowy > 0){
            while(wykladnikPotegowy > 1){
                result = result * numer;
                wykladnikPotegowy--;
            }
            return result;
        }
        else{
            wykladnikPotegowy = wykladnikPotegowy * (-1);
            while(wykladnikPotegowy > 1){
                result = result * numer;
                wykladnikPotegowy--;
            }
            return 1/result;
        }
    }
}