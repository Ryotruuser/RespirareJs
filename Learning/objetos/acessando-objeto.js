const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    turma: 'Javascript',
    cpf: '12312312312'
};

function exibeInfoEstudante (objEstudante, infoEstudante){
    return objEstudante[infoEstudante];
}

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));