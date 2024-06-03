const funcoesUteis = require('./funcoesUteis');
const prompt = require("prompt-sync")({ sigint: true });

let pets = [{id:0, nome: 'cholinho', meses: 24, situacao: 'adotado'},{id:1, nome: 'dogo', meses: 12, situacao: 'disponivel'}]

funcoesUteis.visualizar(pets);
funcoesUteis.remover(pets);
funcoesUteis.adicionar(pets, "nome", "meses", "situacao");
funcoesUteis.visualizar(pets);