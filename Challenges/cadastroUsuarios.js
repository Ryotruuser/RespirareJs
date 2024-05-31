const prompt = require("prompt-sync")({ sigint: true }); 

// const usuario = {
//     id: id,
//     nome: nome,
//     email: email,
//     idade: idade,
// }


const usuarios = [];

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
    `)
    const opcao = parseInt(prompt("Digite a opcao desejada: "));
    if(opcao == 0){
        break;
    }



}