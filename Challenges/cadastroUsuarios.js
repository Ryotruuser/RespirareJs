const fs = require('fs');
const funcoesUteis = require('./funcoesUteis');
const prompt = require("prompt-sync")({ sigint: true }); 

let usuarios = [];

// Funcao para adicionar usuario na lista de usuarios
function adicionarUsuario(){
    const id = usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1; //revisar logica
    const nome = prompt("Digite um nome: ");
    const email = prompt("Digite um e-mail: ");
    const idade = parseInt(prompt("Digite sua idade: "));

    const  usuario = {id: id, nome: nome, email: email, idade: idade};
    usuarios.push(usuario);
    console.log("Usuario cadastrado com sucesso.");
}

// Funcao atualizar usuario na lista
function atualizarUsuario(){
    const id = parseInt(prompt("Digite o id do usuario a ser alterado: "));
    let usuario;
    for(usuario of usuarios){
        if(usuario.id === id){
            usuario = usuario;
        }
    }
    console.log(`Informacoes atuais: ID: ${usuario.id} | NOME: ${usuario.nome} | EMAIL: ${usuario.email} | IDADE: ${usuario.idade}`);

    console.log(`
    -------------------------------------
    Digite a propriedade a ser alterada 

    [1] NOME 
    [2] EMAIL 
    [3] IDADE
    [4] SAIR
    -------------------------------------
    `);
    
    const propASerAlterada = parseInt(prompt("Digite sua opcao: "));

    if(propASerAlterada === 1){
        usuario.nome = prompt("Digite o novo nome: ");
        console.log(`Nome do usuario alterado para ${usuario.nome}`);
    }else if(propASerAlterada === 2){
        usuario.email = prompt("Digite o novo email: ");
        console.log(`Email do usuario alterado para ${usuario.email}`);
    }else if(propASerAlterada === 3){
        usuario.idade = parseInt(prompt("Digite a nova idade: "));
        console.log(`Idade do usuario alterada para ${usuario.idade}`);
    }else if(propASerAlterada === 4){
        return;
    }else{
        console.log("Opcao invalida! ");
    }
}

// Funcao para exibir usuarios 
function visualizarUsuarios(){
    for(usuario of usuarios){
        console.log(`
        ID: ${usuario.id}
        NOME: ${usuario.nome}
        E-MAIL: ${usuario.email}
        IDADE: ${usuario.idade}
        `);
    };
}

//loop do programa principal
while(true){
    console.log(`Gerenciador de usuarios`);
    console.log(`
    --------------------------
    [1] Adicionar usuario 
    [2] Remover usuario 
    [3] Atualizar usuario 
    [4] Exibir usuarios 
    [5] Exportar usuarios 
    [6] Importar Usuarios 
    [0] Sair
    --------------------------
    `);

    const opcao = parseInt(prompt("Digite a opcao desejada: "));

    if(opcao == 0){ break; }
    if(opcao == 1){ adicionarUsuario()}
    if(opcao == 2){ usuarios.length > 0 ? funcoesUteis.remover(usuarios) : console.log("Nao existem usuarios cadastrados"); }
    if(opcao == 3){ usuarios.length > 0 ? atualizarUsuario() : console.log("Nao existem usuarios cadastrados");}
    if(opcao == 4){ usuarios.length > 0 ? visualizarUsuarios() : console.log("Nao existem usuarios cadastrados"); }
    if(opcao == 5){ usuarios.length > 0 ? funcoesUteis.salvar(usuarios, 'usuarios') : console.log("Nao existem usuarios cadastrados");}
    if(opcao == 6){ funcoesUteis.carregar(usuarios, 'usuarios'); }
}