const estudantes = require('./estudantes.json');

function ordena(lista, propriedade ){

    // return lista.sort((a, b) => a[propriedade].localeCompare(b[propriedade])); // metoto que o chat gpt me ensinou

    // metodo alura
    return lista.sort((a, b)=>{
        if(a[propriedade] < b[propriedade]) return -1; //fornecer um valor negativo caso A precise ser ordenado antes de B
        if(a[propriedade] > b[propriedade] ) return 1; //Um valor positivo se A deve ser ordenado depois de B.
        return 0; // Zero se a e b são considerados iguais (não altera a ordem relativa deles).
    })
}

const listOrdenada = ordena(estudantes, 'nome');
console.log(listOrdenada)