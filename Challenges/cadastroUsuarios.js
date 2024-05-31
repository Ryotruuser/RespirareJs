const fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true }); 

let usuarios = [{id: 0, nome: 'jose', email: 'smth@mgail.com', idade: 22}];

// Função para carregar usuários de um arquivo JSON
function carregarUsuarios() {
    if (fs.existsSync('usuarios.json')) {
        const data = fs.readFileSync('usuarios.json', 'utf8');
        usuarios = JSON.parse(data);
    }
}

// Função para salvar usuários em um arquivo JSON
function salvarUsuarios() {
    const data = JSON.stringify(usuarios, null, 2);
    fs.writeFileSync('usuarios.json', data);
}

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

// Funcao para remover usuario da lista usuarios
function removerUsuario(){
    const id = parseInt(prompt("Digite o id do usuario a ser removido: "));
    let usuario;
    let indice = usuarios.indexOf(usuario);
    for(usuario of usuarios){
        if(usuario.id === id){
            usuario = usuario;
        }
    }
    usuarios.splice(indice, 1);
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

    if(propASerAlterada === 1){usuario.nome = prompt("Digite o novo nome: ")};
    if(propASerAlterada === 2){usuario.email = prompt("Digite o novo email: ")};
    if(propASerAlterada === 3){usuario.idade = parseInt(prompt("Digite a nova idade: "))};
    console.log("Usuario atualizado com sucesso.");
    if(propASerAlterada === 4){return};

    

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
    if(opcao == 2){ usuarios.length > 0 ? removerUsuario() : console.log("Nao existem usuarios cadastrados"); }
    if(opcao == 3){ usuarios.length > 0 ? atualizarUsuario() : console.log("Nao existem usuarios cadastrados");}
    if(opcao == 4){ usuarios.length > 0 ? visualizarUsuarios() : console.log("Nao existem usuarios cadastrados"); }
    if(opcao == 5){ usuarios.length > 0 ? salvarUsuarios() : console.log("Nao existem usuarios cadastrados");}
    if(opcao == 6){ carregarUsuarios(); }
}