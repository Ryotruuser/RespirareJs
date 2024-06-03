const fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true }); 

// Funcao para carregar objetos da lista de objetos JSON
function carregar(listaObjeto, nomeArquivo) {
    const arquivo = `${nomeArquivo}.json`;
    if (fs.existsSync(arquivo)) {
        const data = fs.readFileSync(arquivo, 'utf8');
        const objetosCarregados = JSON.parse(data);
        listaObjeto.length = 0; // Limpa o array original
        objetosCarregados.forEach(obj => listaObjeto.push(obj)); // Adiciona os objetos carregados ao array
        console.log(`${listaObjeto.length} objetos carregados com sucesso.`);
    } else {
        console.log("Nenhum arquivo encontrado.");
    }
}

// Função para salvar lista de objetos em um arquivo JSON
function salvar(listaObjeto, nomeArquivo) {
    const data = JSON.stringify(listaObjeto, null, 2);
    fs.writeFileSync(`${nomeArquivo}.json`, data);
    console.log(`Dados exportados com sucesso para '${nomeArquivo}.json'`);
}

// Funcao para adicionar um objeto na lista de objetos
function adicionar(listaObjeto, nomeProp1, nomeProp2, nomeProp3) {
    const id = listaObjeto.length ? listaObjeto[listaObjeto.length - 1].id + 1 : 1;
    const prop1 = prompt(`Favor digitar ${nomeProp1}: `);
    const prop2 = prompt(`Favor digitar ${nomeProp2}: `);
    const prop3 = prompt(`Favor digitar ${nomeProp3}: `);

    const objetoDaLista = { id: id };
    objetoDaLista[nomeProp1] = prop1;
    objetoDaLista[nomeProp2] = prop2;
    objetoDaLista[nomeProp3] = prop3;
    
    listaObjeto.push(objetoDaLista);
    console.log("Cadastrado com sucesso.");
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