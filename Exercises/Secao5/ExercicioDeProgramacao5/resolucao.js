function classificarNumero(arg){
    if(arg === 0)
        return "Neutro";
    else{
        if(arg < 0)
            return "Negativo";
        else{
            if(arg % 2 === 0)
                return "Positivo e Par";
            else
                return "Positivo e Ímpar";
        }
    }
}
