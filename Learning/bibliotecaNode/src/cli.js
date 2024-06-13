import fs from 'fs';
import trataErros from './erros/funcoesErro.js';
import { contarPalavras } from './index.js';
const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
const endereco = caminhoArquivo[3];

fs.readFile(link, 'utf-8', (erro, texto) => {
    try{    
        if(erro) throw erro;
        const resultado = contarPalavras(texto);
        criaESalvaArquivo(resultado, endereco);
    }catch(erro){
        trataErros(erro);
  }
})

// funcao assincrona mais nova
// async function criaESalvaArquivo(listaPalavras, endereco){
//     const arquivoNovo = `${endereco}/resultado.txt`;
//     const textoPalavras = JSON.stringify(listaPalavras);
//     try{
//         await fs.promises.writeFile(arquivoNovo, textoPalavras);
//         console.log("Arquivo criado.");

//     } catch(erro){
//         throw erro;
//     }
// }

// funcao assincrona mais antiga
function criaESalvaArquivo(listaPalavras, endereco){
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = JSON.stringify(listaPalavras);
    fs.promises.writeFile(arquivoNovo, textoPalavras)
      .then(() => {
        console.log("Arquivo criado.");
      })
      .catch((erro) => {
        throw erro;
      })
      .finally(() => {
        console.log("Operacao finalizada");
      })
    
}