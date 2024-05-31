// Nível Básico:
// Leitura de JSON: Escreva um programa que leia um arquivo JSON e exiba seu conteúdo no console.
// Busca Simples: Crie uma função que recebe um arquivo JSON e um valor a ser buscado em uma determinada chave.
// A função deve retornar true se o valor for encontrado e false caso contrário.
// Contagem de Elementos: Escreva uma função que conte o número de elementos em um arquivo JSON.


const estudantes = require('./estudantes.json');

function imprimirJson(lista){
    console.log(estudantes);
}

//revisado pelo gpt, na minha versao fiz a coisa tosca de strigfy o json e dei um include na cara dura mesmo kkk funcionou
function buscaSimples(lista, valor){
    for(estudante of lista){
        if(Object.values(estudante).includes(valor)){
            return true;
        }
    }
    return false;
}

imprimirJson(estudantes);
console.log(buscaSimples(estudantes, 'Maria')) //true
console.log(buscaSimples(estudantes, 'Renan')) //false