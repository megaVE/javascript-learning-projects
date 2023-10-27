class ContaBancaria {
    constructor(corrente, poupanca, juros){
        this.saldoContaCorrente = corrente;
        this.saldoContaPoupanca = poupanca;
        this.jurosPoupanca = juros;
    }

    deposito(valor) {return this.saldoContaPoupanca += valor}
    saque(valor){
        if(this.saldoContaCorrente >= valor)
            return this.saldoContaCorrente -= valor; 
        else{
            console.log("Saldo insuficiente");
            return this.saldoContaCorrente;
        }
    }
    transferir(valor){
        if(this.saldoContaPoupanca >= valor){
            this.saldoContaPoupanca -= valor;
            return this.saldoContaCorrente += valor;
        }
        else{
            console.log("Saldo insuficiente");
            return this.saldoContaPoupanca;
        }
    }
}

class ContaEspecial extends ContaBancaria {
    constructor(corrente, poupanca, juros){
        super(corrente, poupanca, juros * 2);
    }
}