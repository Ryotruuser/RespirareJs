const nomes = ["Ana", "Clara", "Maria", "Maria", "Joao", "Joao", "Joao"];

// const nomesAtualizados = new Set(nomes);
// const listaNomesAtualizados = [...nomesAtualizados];

//forma contracta de fazer

const listaNomesAtualizados = [...new Set(nomes)];

console.log(listaNomesAtualizados)