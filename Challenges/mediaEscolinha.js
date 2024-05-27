const prompt = require("prompt-sync")({ sigint: true });

const aluno = {
    nome: "Joaozinho",
    idade: 8,
    turma: '2 - F',
    notas: 
    {
        portugues: [2, 5, 7],
        matematica: [],
        ciencias: [],
        historia: []
    }
};



// evitamos diversos if e else ifs pra cada materia com objeto usando um metodo de chave dinamica que consegui pensar por mim mesmo o.O estaria os estudos dando resultados
while(true){
    console.log("Opcoes do programa: Portugues | Matematica | Ciencias | Historia | Sair \n")

    // Solicita ao usuário a matéria para a qual deseja adicionar uma nota
    let escolha = prompt("Digite sua opcao: ").toLowerCase();

    // Verifica se a matéria existe no objeto de notas do aluno
    if(aluno.notas[escolha]){

        // Verifica se já foram inseridas 4 notas para a matéria
        if(aluno.notas[escolha].length >= 4){
                
            console.log(`\nNotas das 4 unidades ja preenchidas para a materia de ${escolha} \n`);

            //percorre as materias do aluno e retona seus valores, se preenchidos ou nao. ty god for stackoverflow
            for (let materia in aluno.notas) {
                if(aluno.notas.hasOwnProperty(materia)) {
                    console.log(`${materia}: ${aluno.notas[materia]} \n`);
                }
            }

        }else{

            // Aqui usei um ternario para controlar a exibicao caso nao tenha nenhuma nota cadastrada ainda nao ficar so em branco
            console.log(`\nNotas atuais da materia do estudante: ${aluno.notas[escolha].length > 0 ? aluno.notas[escolha] : 'nenhuma nota cadastrada ainda.'}\n`);

            // Solicita ao usuário a próxima nota
            let nota = parseInt(prompt(`Digite a ${aluno.notas[escolha].length + 1} nota do estudante: \n`));
            aluno.notas[escolha].push(nota);
        }

    }else{

        // se a escolha nao for materia pode ser que o usuario queira fechar a aplicacao ne.
        if (escolha === 'sair'){
            console.log("\nEncerrando...")
            break;
        }

        // Informa ao usuário que a matéria não existe
        console.log("\nMateria nao existe na grade do aluno. \n");
    }
};