const notas = [10, 6.5, 8, 7.5];
let totNotas = 0;

for(let i = 0; i < notas.length; i++){
    totNotas += notas[i];
}

const media = totNotas / notas.length;
console.log(media);