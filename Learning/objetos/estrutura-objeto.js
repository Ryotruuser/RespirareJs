const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    turma: 'Javascript',
    cpf: '12312312312'
};

console.log(`O nome do estudante e ${estudante.nome}`);
console.log(`Os tres primeiros digitos do cpf do estudante sao ${estudante.cpf.substring(0, 3)}`);