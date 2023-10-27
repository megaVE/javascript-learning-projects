class ContaBancaria {
    constructor(numero, saldo){
        this.numeroConta = numero;
        this.saldo = saldo;
    }
    
    depositar(valor){
        this.saldo += valor;
    }
    
    sacar(valor){
        if(this.saldo >= valor)
            this.saldo -= valor;
        else
            console.log("Saldo insuficiente");
    }
    
    consultarSaldo(){
        return this.saldo;
    }
}