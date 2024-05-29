const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    turma: 'Javascript',
    cpf: '12312312312',
    bolsista: true,
    telefone: ['5511999999998', '551199999997'],
    media: 7.5,
    estaAprovado: function (mediaBase){return this.media >= mediaBase ? true : false}
};

const imprima = {
    isso: function (isso){console.log(isso)}
}

console.log(estudante.estaAprovado(7))
imprima.isso("Aquilo")