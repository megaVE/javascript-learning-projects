class WordCounter {
    constructor(){    }
    countWords(palavra){
        if(palavra === "")
            return 0;
        else
            return palavra.split(/\s+/).length;
    }
}