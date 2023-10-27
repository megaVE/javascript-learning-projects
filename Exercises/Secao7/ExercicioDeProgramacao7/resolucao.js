function faixaEtaria(idade) {
    
    if(idade < 12) {
        return "Criança"
    } else if(idade >= 12 && idade <= 24) {
        return "Jovem"
    } else {
        return "Adulto"
    }
    
}

const crianca = faixaEtaria(10)

const adulto = faixaEtaria(34)