class Voo {
    constructor(codigoVoo, origem, destino, assentosDisponiveis){
        this.codigoVoo = codigoVoo;
        this.origem = origem;
        this.destino = destino;
        this.assentosDisponiveis = assentosDisponiveis;
    }
    reservarAssento(){
        if(this.assentosDisponiveis > 0){
            this.assentosDisponiveis--;
            return this.assentosDisponiveis;
        }
        else{
            console.log("Não há assentos disponíveis para reserva.");
            return 0;
        }
    }
    consultarAssentosDisponiveis(){
        return this.assentosDisponiveis;
    }
}