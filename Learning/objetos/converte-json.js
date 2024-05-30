const estudante = require('./estudante.json');

//convertido para string
const stringEstudante = JSON.stringify(estudante);

console.log(stringEstudante);

//funcao para retornar nome pois via notacao de ponto nao funciona com string, isso foi um teste mesmo
function imprimirNome (nome){
    if(stringEstudante.includes(nome)){
        console.log(`O nome da estudante e ${nome}`);
    }else{
        console.log("falha");
    }
}
console.log(stringEstudante.nome);
imprimirNome("Ana");

//de string para objeto novamente.
const objEstudante = JSON.parse(stringEstudante);
console.log(objEstudante);
console.log(objEstudante.nome);