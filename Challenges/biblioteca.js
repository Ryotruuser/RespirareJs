const fs = require('fs');
const funcoesUteis = require('./funcoesUteis');
const prompt = require("prompt-sync")({ sigint: true }); 

let livros = [];

//loop do programa principal
while (true) {
    console.log(`Biblioteca JS`);
    console.log(`
    --------------------------
    [1] Adicionar Livro 
    [2] Remover Livro 
    [3] Atualizar Livro 
    [4] Exibir Livros 
    [5] Alugar Livro
    [6] Devolver Livro
    [7] Exportar Livros 
    [8] Importar Livros 
    [0] Sair
    --------------------------
    `);

    const opcao = parseInt(prompt("Digite a opção desejada: "), 10);

    switch (opcao) {
        case 0:
            return;
        case 1:
            adicionarLivro();
            break;
        case 2:
            livros.length > 0 ? funcoesUteis.remover(livros) : console.log("Não existem livros cadastrados.");
            break;
        case 3:
            livros.length > 0 ? atualizarLivro() : console.log("Não existem livros cadastrados.");
            break;
        case 4:
            livros.length > 0 ? visualizarLivros() : console.log("Não existem livros cadastrados.");
            break;
        case 5:
            livros.length > 0 ? alugarLivro() : console.log("Não existem livros cadastrados.");
            break;
        case 6:
            livros.length > 0 ? devolverLivro() : console.log("Não existem livros cadastrados.");
            break;
        case 7:
            livros.length > 0 ? funcoesUteis.salvar(livros, 'livros') : console.log("Não existem livros cadastrados.");
            break;
        case 8:
            funcoesUteis.carregar(livros, 'livros');
            break;
        default:
            console.log("Opção inválida.");
    }
}

// Funcao para adicionar livro na lista de usuarios
function adicionarLivro(){
    const id = livros.length ? livros[livros.length - 1].id + 1 : 1;
    const titulo = prompt("Digite o titulo: ");
    const autor = prompt("Digite o autor: ");
    const ano = parseInt(prompt("Digite o ano da obra: "));
    if (isNaN(ano)) {
        console.log("Ano inválido. Por favor, tente novamente.");
        return;
    }
    const disponivel = true;

    const livro = {id: id, titulo: titulo, autor: autor, ano: ano, disponivel};
    livros.push(livro);
    console.log("Livro cadastrado com sucesso.");
}

// Funcao atualizar livro na lista
function atualizarLivro(){
    const id = parseInt(prompt("Digite o id do livro a ser alterado: "), 10);
    const livro = livros.find(livro => livro.id === id);
    if(livro){
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
            console.log(`Nome do titulo alterado para ${livro.titulo}`);
        }else if(propASerAlterada === 2){
            livro.autor = prompt("Digite o novo Autor: ");
            console.log(`Autor do livro alterado para ${livro.autor}`);
        }else if(propASerAlterada === 3){
            const novoAno = parseInt(prompt("Digite o novo ano: "), 10);
            if (isNaN(novoAno)) {
                console.log("Ano inválido. Por favor, tente novamente.");
                return;
            }
            livro.ano = novoAno;
            console.log(`Ano do livro alterado para ${livro.ano}`);
        }else if(propASerAlterada === 4){
            return;
        }else{
            console.log("Opcao invalida! ");
        }

    }else{
        console.log("ID do livro nao encontrado.");
    }
    
}

// Funcao para exibir livro 
function visualizarLivros(disponiveis = true){

    if(disponiveis){
        for(livro of livros){
            if(livro.disponivel){
                nomeLivro = livro.titulo;
                console.log(`
                ==========================================================================
                ${nomeLivro.toUpperCase()}                                       
                ==========================================================================
                ID: ${livro.id}
                AUTOR: ${livro.autor}
                ANO: ${livro.ano}
                DISPONIVEL: ${livro.disponivel ? "Disponivel" : "Alugado"}
                ===========================================================================
                `);
            }
        }; //end for
    }else{
        for(livro of livros){
            if(livro.disponivel === false){
                nomeLivro = livro.titulo;
                console.log(`
                ==========================================================================
                ${nomeLivro.toUpperCase()}                                                             
                ==========================================================================
                ID: ${livro.id}
                TITULO: ${livro.titulo}
                AUTOR: ${livro.autor}
                ANO: ${livro.ano}
                DISPONIVEL: ${livro.disponivel ? "Disponivel" : "Alugado"}
                ==========================================================================
                `);
            }  
        }; //end for
    }
}

//funcao para devolver livro
function devolverLivro(){
    visualizarLivros(false);
    const livroADevolver = parseInt(prompt("ID da obra que deseja devolver: "), 10);
    for(livro of livros){
        if(livro.id === livroADevolver && livro.disponivel === false){
            livro.disponivel = true;
            console.log("Livro devolvido com sucesso");
        }
    }
}

//Funcao alugar livro
function alugarLivro(){
    visualizarLivros();
    const livroASerAlugado = parseInt(prompt("ID do livro que deseja alugar: "), 10);
    for(livro of livros){
        if(livro.id === livroASerAlugado && livro.disponivel === true){
            livro.disponivel = false;
            console.log("Livro alugado com sucesso");
        }else if(livro.id === livroASerAlugado && livro.disponivel === false){
            console.log("Titulo indisponivel para aluguel.");
        }
    }
}