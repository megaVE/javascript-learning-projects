const Item = {
    nome: "",
    valor: 0,
}

const Carrinho = {
    itens: [],
    quantidade_total: 0,
    valor_total: 0,
    adiciona_item: function(nome, valor){
        let item = Object.create(Item);
        item.nome = nome;
        item.valor = valor;
        this.itens.push(item);
        this.quantidade_total++;
        this.valor_total += valor;
    },
    remove_item: function(nome){
        for(let i = 0; i < this.itens.length; i++){
            if(this.itens[i].nome === nome){
                this.quantidade_total--;
                this.valor_total -= this.itens[i].valor;
                delete this.itens[i];
                break;
            }
        }
    },
}