//declaradas com hoisting

function exibeInfoEstudante (nome, nota) {
    return `o nome e ${nome} e a nota e ${nota}`;
    //console.log(`o nome e ${nome} e a nota e ${nota}`);
}

console.log(exibeInfoEstudante("Renan", 10));