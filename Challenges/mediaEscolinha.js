const prompt = require("prompt-sync")({ sigint: true });

const aluno = {
    nome: "Joaozinho",
    idade: 8,
    turma: '2 - F',
    notas: 
    {
        portugues: [],
        matematica: [],
        ciencias: [],
        historia: []
    }
};

while(true){
    console.log("Portugues | Matematica | Ciencias | Historia | Sair \n")
    let escolha = prompt("Digite a materia que deseja colocar a nota:").toLowerCase();

    if(aluno.notas[escolha]){
        if(aluno.notas[escolha].length >= 4){
                
            console.log("\nNotas das 4 unidades ja preenchidas.");
            console.log(aluno.notas[escolha]);
            break;

        }else{

            console.log(`\nNotas atuais da materia do estudante: ${aluno.notas[escolha].length > 0 ? aluno.notas[escolha] : 'nenhuma nota cadastrada ainda.'}\n`);
            let nota = parseInt(prompt(`Digite a ${aluno.notas[escolha].length + 1} nota do estudante: `));
            aluno.notas[escolha].push(nota);
        }
    }else{
        console.log("\nMateria nao existe na grade do aluno. \n");
    }
};