const fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true }); 

let livros = [{id: 0, titulo: "Harry Potter", autor: "J.K ROWLING", ano: 1997, disponivel: false},
{id: 1, titulo: "Harry Potter 2", autor: "J.K ROWLING", ano: 1997, disponivel: true},
{id: 2, titulo: "Harry Potter 3", autor: "J.K ROWLING", ano: 1997, disponivel: false}];

// Função para carregar livros de um arquivo JSON
function carregarUsuarios() {
    if (fs.existsSync('livros.json')) {
        const data = fs.readFileSync('livros.json', 'utf8');
        usuarios = JSON.parse(data);
        console.log("Livros carregados com sucesso.");
    }
}

// Função para salvar livros em um arquivo JSON
function salvarUsuarios() {
    const data = JSON.stringify(livros, null, 2);
    fs.writeFileSync('livros.json', data);
    console.log("Livros exportados com sucesso para 'usuarios.json'");
}

// Funcao para adicionar livro na lista de usuarios
function adicionarLivro(){
    const id = livros.length ? livros[livros.length - 1].id + 1 : 1;
    const titulo = prompt("Digite o titulo: ");
    const autor = prompt("Digite o autor: ");
    const ano = parseInt(prompt("Digite o ano da obra: "));
    const disponivel = true;

    const livro = {id: id, titulo: titulo, autor: autor, ano: ano};
    livros.push(livro);
    console.log("Livro cadastrado com sucesso.");
}

// Funcao para remover livro da lista usuarios
function removerLivro(){
    const id = parseInt(prompt("Digite o id do livro a ser removido: "));
    let livro;
    let indice = livros.indexOf(livro);
    for(livro of livros){
        if(livro.id === id){
            livro = livro;
        }
    }
    livros.splice(indice, 1);
    console.log("Livro removido com sucesso! ");
}

// Funcao atualizar livro na lista
function atualizarLivro(){
    const id = parseInt(prompt("Digite o id do livro a ser alterado: "));
    let livro;
    for(livro of livros){
        if(livro.id === id){
            livro = livro;
        }
    }
    console.log(`Informacoes atuais: ID: ${livro.id} | TITULO: ${livro.titulo} | AUTOR: ${livro.autor} | ANO: ${livro.ano} | DISPONIVEL: ${livro.disponivel ? "Disponivel" : "Alugado"}`);

    console.log(`
    -------------------------------------
    Digite a propriedade a ser alterada 

    [1] TITULO 
    [2] AUTOR 
    [3] ANO
    [4] SAIR
    -------------------------------------
    `);
    
    const propASerAlterada = parseInt(prompt("Digite sua opcao: "));

    if(propASerAlterada === 1){
        livro.titulo = prompt("Digite o novo titulo: ");
        console.log(`Nome do titulo alterado para ${titulo.nome}`);
    }else if(propASerAlterada === 2){
        livro.autor = prompt("Digite o novo Autor: ");
        console.log(`Autor do livro alterado para ${livro.autor}`);
    }else if(propASerAlterada === 3){
        livro.ano = parseInt(prompt("Digite novo ano: "));
        console.log(`Ano do livro alterado para ${livro.ano}`);
    }else if(propASerAlterada === 4){
        return;
    }else{
        console.log("Opcao invalida! ");
    }
}

// Funcao para exibir livro 
function visualizarLivros(){
    for(livro of livros){
        console.log(`
        ID: ${livro.id}
        TITULO: ${livro.titulo}
        AUTOR: ${livro.autor}
        ANO: ${livro.ano}
        DISPONIVEL: ${livro.disponivel ? "Disponivel" : "Alugado"}
        `);
    };
}

//funcao para devolver livro
function devolverLivro(){
    const livroADevolver = parseInt(prompt("ID da obra a ser devolvida: "));
    for(livro of livros){
        if(livro.id === livroADevolver && livro.disponivel === false){
            livro.disponivel = true;
            console.log("Livro devolvido com sucesso");
        }
    }
}

//Funcao alugar livro
