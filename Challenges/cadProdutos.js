import fs from 'fs';

class Produto{
    constructor(nome, preco, quantidade = 0){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    adicionarAoEstoque(valor){
        this.quantidade += valor;
        return `Estoque abastecido, quantidade de ${this.nome} atual e ${this.quantidade}`
    }

    removerDoEstoque(valor){
        if(valor > this.quantidade){
            return `Estoque insuficiente`
        }
        this.quantidade -= valor;
        return `${valor} unidades removidas do estoque, estoque atual ${this.quantidade}`
    }

}

class SistemaCadastro {
    constructor(){
        this.produtos = []
    }

    adicionarProduto(produto){

        this.produtos.push(produto);
        return `Produto ${produto.nome} cadastro com sucesso.`

    }

    listarProdutos(){
        let listaProdutos = '';
        this.produtos.forEach(produto => {
            listaProdutos += `Nome Produto: ${produto.nome} | Preço Produto: ${produto.preco} | Em Estoque: ${produto.quantidade}\n`;
        });
        return listaProdutos;
    }

    carregarProdutos(nomeArquivo) {
        const arquivo = `${nomeArquivo}.json`;
        if (fs.existsSync(arquivo)) {
            const data = fs.readFileSync(arquivo, 'utf8');
            const objetosCarregados = JSON.parse(data);
            this.produtos.length = 0; // Limpa o array original
            objetosCarregados.forEach(obj => {
                const produto = new Produto(obj.nome, obj.preco, obj.quantidade);
                this.produtos.push(produto); // Adiciona os produtos carregados ao array
            });
            return `${this.produtos.length} objetos carregados com sucesso.`;
        } else {
            return "Nenhum arquivo encontrado.";
        }
    }

    salvarProdutos(nomeArquivo){
        const data = JSON.stringify(this.produtos, null, 2);
        fs.writeFileSync(`${nomeArquivo}.json`, data);
        return `Dados exportados com sucesso para '${nomeArquivo}.json'`;
    
    }


}


const Smartwatch = new Produto("MI Band 8", 400, 4);

const techStoreProdutos = new SistemaCadastro();

console.log(techStoreProdutos.carregarProdutos("eletronicos"));
console.log(techStoreProdutos.adicionarProduto(Smartwatch));
console.log(techStoreProdutos.listarProdutos());
console.log(techStoreProdutos.salvarProdutos("novosEletronicos"));