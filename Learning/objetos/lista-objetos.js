const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    turma: 'Javascript',
    cpf: '12312312312',
    bolsista: true,
    telefone: ['5511999999998', '551199999997'],
    endereco: [{
        rua: 'Rua Joseph Climber',
        numero: '48',
        complemento: 'Apto 43'
    }]
};

estudante.endereco.push({
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: ''

})

// console.log(estudante.endereco);
// console.log(estudante.endereco[0]);

const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento);

console.log(listaEnderecosComComplemento);