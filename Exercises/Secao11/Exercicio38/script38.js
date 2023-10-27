let adress = {
    rua:"",
    mudaRua: function(rua){
        this.rua = rua;
        return rua;
    },
    bairro:"",
    mudaBairro: function(bairro){
        this.bairro = bairro;
        return bairro;
    },
    cidade:"",
    mudaCidade: function(cidade){
        this.cidade = cidade;
        return cidade;
    },
    estado:"",
    mudaEstado: function(estado){
        this.estado = estado;
        return estado;
    },
}

function createAdress(rua, bairro, cidade, estado){
    let createdAdress = Object.create(adress);
    createdAdress.rua = rua;
    createdAdress.bairro = bairro;
    createdAdress.cidade = cidade;
    createdAdress.estado = estado;
    return createdAdress;
}