class Livro{
    #titulo
    #autor    
    #quantidade
    constructor(titulo, autor, quantidade = 0){
        this.#titulo = titulo;
        this.#autor = autor;
        this.#quantidade = quantidade;
    }

    get titulo(){
        return this.#titulo;
    }
    set titulo(titulo){
        return this.#titulo = titulo;
    }

    get autor(){
        return this.#autor;
    }
    set autor(autor){
        return this.#autor = autor;
    }

    get quantidade(){
        return this.#quantidade;
    }
    set quantidade(quantidade){
        return this.#quantidade = quantidade;
    }

    adicionarUnidade(unidade){
        this.quantidade += unidade;
        return `${unidade} unidades de ${this.titulo} adicionadas.`;
        

    }

    removerUnidade(unidade){
        this.quantidade -= unidade;
        return `${unidade} unidades de ${this.titulo} removidas.`;
        
        
    }

    apresentar(){
        return `Titulo: ${this.titulo}\nAutor(a): ${this.autor}\nQuantidade: ${this.quantidade}`;
    }

}

const l1 = new Livro("Harry Potter Death Hollows pt1", "J.K Rowling");
console.log(l1.apresentar());
console.log(l1.adicionarUnidade(5));
console.log(l1.removerUnidade(3));
console.log(l1.apresentar());