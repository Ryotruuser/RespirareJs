const estudantes = require('./estudantes.json');

function filtarPorPropriedade(lista, propriedade){
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    })
}

const enderecosInvalidos = filtarPorPropriedade(estudantes, 'cep');
console.log(enderecosInvalidos);