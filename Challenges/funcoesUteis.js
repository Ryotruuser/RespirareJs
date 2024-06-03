const fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true }); 

// Funcao para carregar objetos da lista de objetos JSON
function carregar(listaObjeto) {
    if (fs.existsSync(`${listaObjeto}.json`)) {
        const data = fs.readFileSync(`${listaObjeto}.json`, 'utf8');
        listaObjeto = JSON.parse(data);
        console.log(`${listaObjeto} carregados com sucesso.`);
    }else {
        console.log("Nenhum arquivo encontrado.");
    }
}

// Função para salvar lista de objetos em um arquivo JSON
function salvar(listaObjeto) {
    const data = JSON.stringify(listaObjeto, null, 2);
    fs.writeFileSync(`${listaObjeto}.json`, data);
    console.log(`Dados exportados com sucesso para '${listaObjeto}.json'`);
}

// Funcao para adicionar um objeto na lista de objetos
function adicionar(listaObjeto, prop1, prop2, prop3){
    const id = listaObjeto.length ? listaObjeto[listaObjeto.length - 1].id + 1 : 1;
    prop1 = prompt(`Favor digitar ${prop1}: `);
    prop2 = prompt(`Favor digitar ${prop2}: `);
    prop3 = prompt(`Favor digitar ${prop2}: `);

    const objetoDaLista = {id: id, prop1: prop1, prop2: prop2, prop3: prop3 };
    candidatos.push(objetoDaLista);
    console.log("cadastrado com sucesso.");
}

// Funcao para remover um objeto na lista de objetos
function remover(listaObjeto){
    const id = parseInt(prompt("Digite o id a ser removido: "), 10);
    const indice = listaObjeto.findIndex(objeto => objeto.id === id);
    if (indice !== -1) {
        listaObjeto.splice(indice, 1);
        console.log("Removido com sucesso! ");
    } else {
        console.log("ID nao encontrado.");
    }
}

// Funcao para visualizar toda a lista de objetos 
function visualizar(listaObjeto){
    for(objeto of listaObjeto){
        console.log(objeto);
    };
}

// Exportando as funções
module.exports = {
    carregar,
    salvar,
    adicionar,
    remover,
    visualizar
};