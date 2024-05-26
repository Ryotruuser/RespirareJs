const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(listaDeNotas){
    //acumulador aqui e o que vai iterar com os elementos
    // const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
    //     return acumulador + nota;
    // },0);

    //reduce comprimido pois so tem um return que pode ser omitido inclusive
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0)

    const media = somaDasNotas / listaDeNotas.length;
    return media;
}


console.log(calculaMedia(salaJS));
console.log(calculaMedia(salaJava));
console.log(calculaMedia(salaPython));