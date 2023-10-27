class Livro {
    constructor(titulo, autor, disponivel){
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true;
    }
    emprestar(){
        if(this.disponivel === true){
            this.disponivel = false;
            console.log("Disponível");
            return "Disponível";
        }
        else{
            console.log("O livro não está disponível para empréstimo.");
            return "O livro não está disponível para empréstimo."
        }
    }
    devolver(){
        if(this.disponivel === false){
            this.disponivel = true;
            console.log("Indisponível");
            return "Indisponível";
        }
        else{
            console.log("O livro já está disponível.");
            return "O livro já está disponível.";
        }
    }
    consultarDisponibilidade(){
        //return this.disponivel;
        if(this.disponivel === true){
            console.log("Disponível");
            return "Disponível";
        }
        else{
            console.log("Indisponível");
            return "Indisponível";
        }
    }
}