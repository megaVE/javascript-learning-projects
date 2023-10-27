const carro = {
    marca: "",
    cor: "",
    gasolina_restante: "",
    dirigir_carro: function() {
        if(this.gasolina_restante > 0){
            console.log("NEEEEAHDSAHDAHEHEHEHABS");
            this.gasolina_restante--;
        }
        else
            console.log("tchk tchk tchk tchk tchk tchshhh...");
    },
    abastecer_carro: function() {
        console.log("Seis conto a gasolina #FazOL");
        this.gasolina_restante++;
    }
}