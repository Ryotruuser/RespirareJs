const prompt = require("prompt-sync")({ sigint: true });

//declarando nosso array de objetos
const tarefas = [];

//Programa principal
while(true){
    //pergutando opcao do usuario
    console.log("Gerenciador de tarefas");
    let escolha = parseInt(prompt("[1] Adicionar [2] Remover [3] Concluir [4] Visualizar [5] Sair: "));

    //aqui verificamos se a escolha esta entre as opcoes listadas acima, caso esteja entra no if escolha ===1....
    if(escolha <= 5){
        if(escolha === 1){

            //Aqui perguntamos nome e descricao da tarefa e invocamos a funcao para adicionar tarefa
            let nome = prompt("Digite o nome da tarefa: ");
            let descricao = prompt("Digite a descricao da tarefa: ");
            adicionarTarefa(nome, descricao);
    
        }else if(escolha === 2){
            
            //Solicitado ID da tarefa a ser excluir
            let escolherId = parseInt(prompt("Digite o ID da tarefa que deseja excluir: "));

            //verificamos se o id da tarefa que e igual ao indice no array e maior ou igual ao tamanho da lista de tarefas
            if(escolherId>=tarefas.length){

                console.log("ID invalido, tente novamente. ");

            }else{

                //se o id for menos que o tamanho ou seja se for tamanho - 1 que e igual ao indice informado vai remover a tarefa
                let nomeTarefa = tarefas[escolherId].nome;
                excluirTarefas(escolha);
                console.log(`Tarefa ${nomeTarefa} excluida com sucesso`);
            }

            
        }else if(escolha === 3){
            
            //perguntamos o id da tarefa a ser concluida
            let escolherId = parseInt(prompt("Digite o ID da tarefa que deseja concluir: "));

            //novamente verificamos a questao do indice correto
            if(escolherId >= tarefas.length){
                
                console.log("ID invalido, tente novamente. ");

            }else{

                //estando o indice correto e existente
                let nomeTarefa = tarefas[escolherId].nome;
              
                concluirTarefa(escolherId);
                console.log(`Tarefa concluida com sucesso.`);
                
                //Uma vez concluida a tarefa, perguntamos ao usar se ele deseja remover a tarefa.
                let excluirConcluida = prompt(`Deseja remover a tarefa "${nomeTarefa}" concluida ? [S/N] `).toLowerCase();
                
                //condicional para verificar se o user colocou sim ou nao para excluir a tarefa e saida para possivel erro.
                if(excluirConcluida.includes('s')){

                    excluirTarefas(escolherId);

                }else if(excluirConcluida.includes('n')){

                    continue;

                }else{

                    console.error("Falha, a tarefa nao foi removida.");

                }

            }
    
        }else if(escolha === 4){

            //chamando nossa funcao de exibir

            exibirTarefas()
    
        }else if(escolha === 5){
            //bye bye 
            break;
        }
    
        
    }else{

        //caso a escolha inicial nao esteja no menu princiapl vai cair aqui.
        console.log("\nOpcao nao disponivel!\n");

    }

}


//funcoes complementares

function adicionarTarefa(nome, descricao){
    if(tarefas.length > 0){
        id = tarefas.length;
    }else{
        id = 0;
    }
    concluida = false;
    tarefas.push({id, nome, descricao, concluida});
}

function excluirTarefas(id){
    tarefas.splice(id, 1);
}

function concluirTarefa(id){
    tarefas[id].concluida = true;
}

function exibirTarefas() {
    console.log("Lista de Tarefas:");
    if (tarefas.length === 0) {
        console.log("Nenhuma tarefa encontrada.");
    } else {
        tarefas.forEach(tarefa => {
            console.log("-------------------------");
            console.log(`ID: ${tarefa.id}`);
            console.log(`Nome: ${tarefa.nome}`);
            console.log(`Descrição: ${tarefa.descricao}`);
            console.log(`Concluída: ${tarefa.concluida ? 'Sim' : 'Não'}`);
            console.log("-------------------------");
        });
    }
}