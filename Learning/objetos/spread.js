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

function exibirTelefone (tel1, tel2){
    console.log(`Ligar para ${tel1}`);
    console.log(`Ligar para ${tel2}`);
}

exibirTelefone(...estudante.telefone);

const dadosEnvio = {
    destinataruio: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio)
console.log(dadosEnvio.rua)