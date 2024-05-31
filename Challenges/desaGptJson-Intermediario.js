// Nível Intermediário:
// Filtragem de Dados: Desenvolva uma função que filtre os dados de um arquivo JSON com base em um critério específico e exiba o resultado.
// Ordenação de Dados: Implemente uma função que ordene os dados de um arquivo JSON com base em uma chave específica.
// Atualização de Dados: Crie uma função que permita atualizar um valor específico em um arquivo JSON e salve as mudanças.

const prompt = require("prompt-sync")({ sigint: true });
const livros = require('./livros.json');

//funcao do desafio filtragem
function filtarPorPropriedade(lista, propriedade, valor){
    return lista.filter((livro) => {
        return livro[propriedade].includes(valor);
    })
}

function ordenar(lista, props){
    return lista.sort((a, b) => {
        if(a[props] < b[props]) return -1;
        if(a[props] > b[props]) return 1;
        return 0;
    })
}

//nao consegui fazer a terceira funcao do intermediario gpt corrige

function atualizarJson(lista, propriedade, valorAntigo, novoValor) {
    lista.forEach(obj => {
        if (obj[propriedade] === valorAntigo) {
            obj[propriedade] = novoValor;
        }
    });
    console.log("Lista atualizada:");
    console.log(lista);
}

// Exemplo de uso
console.log("Antes da atualização:");
console.log(livros);
atualizarJson(livros, 'titulo', 'Harry Potter e a Pedra Filosofal', 'Harry Potter e a Câmara Secreta');