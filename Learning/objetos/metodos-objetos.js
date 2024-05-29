const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    turma: 'Javascript',
    cpf: '12312312312',
    bolsista: true,
    telefone: ['5511999999998', '551199999997'],
    // enderecos: [{
    //     rua: 'Rua Joseph Climber',
    //     numero: '48',
    //     complemento: 'Apto 43'
    // },
    // {
    //     rua: 'Rua Dona Clotilde',
    //     numero: '71',
    //     complemento: 'Apto S/N'
    // }]
};

const chavesObjetos = Object.keys(estudante);
console.log(chavesObjetos);

if(!chavesObjetos.includes('enderecos')){
    console.error("E necessario incluir endereco!");
}