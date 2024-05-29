const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    turma: 'Javascript',
    cpf: '12312312312',
    bolsista: true,
    telefone: ['5511999999998', '551199999997'],
    enderecos: [{
        rua: 'Rua Joseph Climber',
        numero: '48',
        complemento: 'Apto 43'
    },
    {
        rua: 'Rua Dona Clotilde',
        numero: '71',
        complemento: 'Apto S/N'
    }]
};

for(let chave in estudante){
    console.log(estudante[chave]);
}