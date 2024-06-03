const funcoesUteis = require('./funcoesUteis');
const prompt = require("prompt-sync")({ sigint: true });

let pets = [{id:0, nome: 'cholinho', meses: 24, situacao: 'adotado'}]


funcoesUteis.visualizar(pets);