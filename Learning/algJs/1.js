const precosLivros = [25, 15 ,30, 20, 50, 45];
const randomNumbers = [100, 45, 978, 1345, 12, 6, 5, 2];

let maisBarato = 0;

for (let atual = 0; atual < precosLivros.length; atual++) {
    if(precosLivros[atual] < precosLivros[maisBarato]){
        maisBarato = atual;
    }
}

console.log(`O menor valor encontrado foi ${precosLivros[maisBarato]}`);













