import fs from 'fs';

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

    toJSON() {
        return {
            titulo: this.#titulo,
            autor: this.#autor,
            quantidade: this.#quantidade,
        };
    }

    static fromJSON(obj) {
        return new Livro(obj.titulo, obj.autor, obj.quantidade);
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


    adicionarLivro(novoLivro){
        for (const livro of this.#estoqueLivros) {
            if (livro.titulo === novoLivro.titulo) {
                return `${livro.titulo} já existe no estoque`;
            }
        }
        this.#estoqueLivros.push(novoLivro);
        return `"${novoLivro.titulo}" adicionado com sucesso.`;
    }

    removerLivro(livro){
        this.estoqueLivros.pop(livro);
        return `"${livro.titulo}" removido com sucesso.`
    }

    listarLivros(){
        return this.estoqueLivros.map(livro => livro.apresentar()).join("\n");
    }

    carregarLivros(nomeArquivo){
        const arquivo = `${nomeArquivo}.json`;
        if (fs.existsSync(arquivo)) {
            const data = fs.readFileSync(arquivo, 'utf8');
            const objetosCarregados = JSON.parse(data);
            this.estoqueLivros.length = 0; // Limpa o array original
            objetosCarregados.forEach(obj => {
                const livro = new Livro(obj.titulo, obj.autor, obj.quantidade);
                this.estoqueLivros.push(livro); // Adiciona os produtos carregados ao array
            });
            return `${this.estoqueLivros.length} objetos carregados com sucesso.`;
        } else {
            return "Nenhum arquivo encontrado.";
        }
    }


    salvarLivros(nomeArquivo){
        const data = JSON.stringify(this.estoqueLivros, null, 2);
        fs.writeFileSync(`${nomeArquivo}.json`, data);
        return `Dados exportados com sucesso para '${nomeArquivo}.json'`;
    
    }
}


const biblioteca = new SistemaEstoque;
const livroRepetido = new Livro("Alem do Bem e do Mal","Nietzsche", 25 );
const livroNiet2 = new Livro("Crepusculo dos Idolos", "Nietzsche", 25);

console.log(biblioteca.carregarLivros("estoqueLivrosCheio"));
console.log(biblioteca.adicionarLivro(new Livro("Harry Potter e o Prisioneiro de Azkaban", "J.K ROWLING", 3)));
console.log(biblioteca.adicionarLivro(livroRepetido));
console.log(biblioteca.adicionarLivro(livroNiet2));
console.log(biblioteca.salvarLivros("estoqueLivrosDoar"));
console.log(biblioteca.listarLivros());