const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//funcao de callback
// notas.forEach((nota) => {
//     somaDasNotas += nota;
// })

// as linhas abaixo sao o mesmo que ocorre no comentario acima
notas.forEach(somaNotas);
function somaNotas (nota){
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`A media das notas e ${media}`);