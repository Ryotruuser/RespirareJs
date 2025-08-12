import livros from './listaLivros.js';

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++) {
    if(livros[atual].preco < livros[maisBarato].preco){
        maisBarato = atual;
    }
}

console.log(`O menor valor encontrado foi ${livros[maisBarato].preco} e o titulo e ${livros[maisBarato].titulo}`);













