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
        return `\nTitulo: ${this.titulo}\nAutor(a): ${this.autor}\nQuantidade: ${this.quantidade}\n`;
    }

}

class SistemaEstoque{
    #estoqueLivros
    constructor(){
        this.#estoqueLivros = [];
    }

    get estoqueLivros(){
        return this.#estoqueLivros;
    }


    adicionarLivro(livro){
        this.estoqueLivros.push(livro);
        return `"${livro.titulo}" adicionado com sucesso.`
    }

    removerLivro(livro){
        this.estoqueLivros.pop(livro);
        return `"${livro.titulo}" removido com sucesso.`
    }

    listarLivros(){
        return this.estoqueLivros.map(livro => livro.apresentar()).join("\n");
    }

}


const biblioteca = new SistemaEstoque;
const l1 = new Livro("Harry Potter Death Hollows pt1", "J.K Rowling");
console.log(l1.adicionarUnidade(5));

console.log(biblioteca.adicionarLivro(l1));
console.log(biblioteca.listarLivros())
