const fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true }); 

let candidatos = [];

// Função para carregar Candidatos de um arquivo JSON
function carregarCandidatos() {
    try {
        if (fs.existsSync('candidatos.json')) {
            const data = fs.readFileSync('candidatos.json', 'utf8');
            candidatos = JSON.parse(data);
            console.log("Candidatos carregados com sucesso.");
        } else {
            console.log("Nenhum arquivo de candidatos encontrado.");
        }
    } catch (error) {
        console.error("Erro ao carregar candidatos:", error);
    }
}

// Função para salvar Candidatos em um arquivo JSON
function salvarCandidatos() {
    try {
        const data = JSON.stringify(candidatos, null, 2);
        fs.writeFileSync('candidatos.json', data);
        console.log("Candidatos exportados com sucesso para 'candidatos.json'");
    } catch (error) {
        console.error("Erro ao salvar candidatos:", error);
    }
}

function adicionarCandidato(){
    const nome = prompt("Digite o nome: ").trim();
    if (!nome) {
        console.log("Nome não pode ser vazio.");
        return;
    }
    const id = candidatos.length ? candidatos[candidatos.length - 1].id + 1 : 1;
    const candidato = {id: id, nome: nome, votos: 0};
    candidatos.push(candidato);
    console.log("Candidato cadastrado com sucesso.");
}


function removerCandidato(){
    const id = parseInt(prompt("Digite o id do candidato a ser removido: "), 10);
    const indice = candidatos.findIndex(candidato => candidato.id === id);
    if (indice !== -1) {
        candidatos.splice(indice, 1);
        console.log("candidato removido com sucesso! ");
    } else {
        console.log("ID do candidato nao encontrado.");
    }
}

function visualizarCandidatos(){
    candidatos.forEach(candidato => {
        console.log(`
        ID: ${candidato.id}
        NOME: ${candidato.nome}
        VOTOS: ${candidato.votos}
        `);
    });
}


function registrarVoto(){
    const id = parseInt(prompt("Digite o id do candidato a ser votado: "), 10);
    const candidato = candidatos.find(candidato => candidato.id === id);
    if (candidato) {
        candidato.votos += 1;
        if (candidato.votos >= 5) {
            exibirVencedor();
        } else {
            console.log(`Voto registrado para ${candidato.nome}.`);
        }
    } else {
        console.log("ID do candidato não encontrado.");
    }
}


function exibirVencedor(){
    let vencedor = false;
    candidatos.forEach(candidato => {
        if (candidato.votos >= 5) {
            console.log(`
            ==============================
                     VENCEDOR 
            ==============================
            ID: ${candidato.id}
            NOME: ${candidato.nome}
            VOTOS: ${candidato.votos}
            ===============================
            `);
            vencedor = true;
        }
    });
    if (!vencedor) {
        console.log("Nenhum candidato atingiu o número de votos necessários para vencer.");
    }
}



//loop
while(true){

    console.log(`
    --------------------------
        Sistema de Votacao
    --------------------------
    [1] Adicionar candidato 
    [2] Remover candidato 
    [3] Realizar voto
    [4] Exibir candidatos 
    [5] Exibir vencedor
    [6] Exportar candidatos
    [7] Importar candidatos 
    [0] Sair
    --------------------------
    `);

    const opcao = parseInt(prompt("Digite a opcao desejada: "));

    if(opcao == 0){ break; }
    if(opcao == 1){ adicionarCandidato()}
    if(opcao == 2){ candidatos.length > 0 ? removerCandidato() : console.log("Nao existem candidatos cadastrados"); }
    if(opcao == 3){ candidatos.length > 0 ? registrarVoto() : console.log("Nao existem candidatos cadastrados");}
    if(opcao == 4){ candidatos.length > 0 ? visualizarCandidatos() : console.log("Nao existem candidatos cadastrados"); }
    if(opcao == 5){ candidatos.length > 0 ? exibirVencedor() : console.log("Nao existem candidatos cadastrados");}
    if(opcao == 6){ candidatos.length > 0 ? salvarCandidatos() : console.log("Nao existem candidatos cadastrados");}
    if(opcao == 7){ carregarCandidatos(); }
}