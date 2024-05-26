const notas = [7, 7, 8, 9];

const nnotas = notas;
nnotas.push(10);

console.log(notas);
console.log(nnotas);

// No exemplo acima oque vai ocorrer e que vai mudar ambas as listas pois foi passado como referencia e quando e mudado a referencia muda em ambos lugares que a referenciamm
console.log("\n");
console.log("----com spread operator-----\n");

const notas1 =  [7, 7, 8, 9];

// agora com spread operator

const novalistaNotas = [...notas1, 10];
// novalistaNotas.push(10);

console.log(notas1);
console.log(novalistaNotas);