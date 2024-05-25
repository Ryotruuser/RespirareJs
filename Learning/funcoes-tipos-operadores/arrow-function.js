//so chamar apos inicializacao

const estudanteReprovou =  (notaFinal, faltas) => {
    if(notaFinal < 7 && faltas > 4){
        return true;
    }else{
        return false;
    }
}

const reprovou = (notaFinal, faltas) => notaFinal < 7 && faltas > 4 ? true : false; // arrow function da funcao acima com ternario

const exibeNome = (nome) => nome;

// console.log(estudanteReprovou(6, 5));
// console.log(estudanteReprovou(10, 2));
console.log(reprovou(6,5))
console.log(reprovou(10,2))
console.log(exibeNome("caroline"))