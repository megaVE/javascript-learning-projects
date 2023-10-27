const conta = {
    saldo: 50,
    deposito: function(valor){
        this.saldo = this.saldo + valor;
        return this.saldo;
    },
    saque: function(valor){
        if(valor > this.saldo)
            console.log("Saldo insuficiente!")
        else
            this.saldo = this.saldo - valor;
        return this.saldo;
    },
}