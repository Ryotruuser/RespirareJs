const estudantes = require('./estudantes.json');

function imprimirJson(lista){
    console.log(estudantes);
}

//revisado pelo gpt, na minha versao fiz a coisa tosca de strigfy o json e dei um include na cara dura mesmo kkk funcionou
function buscaSimples(lista, valor){
    for(estudante of lista){
        if(Object.values(estudante).includes(valor)){
            return true;
        }
    }
    return false;
}

imprimirJson(estudantes);
console.log(buscaSimples(estudantes, 'Maria')) //true
console.log(buscaSimples(estudantes, 'Renan')) //false