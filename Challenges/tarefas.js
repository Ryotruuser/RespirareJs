const prompt = require("prompt-sync")({ sigint: true });

const tarefas = [
    {
        id: 0,
        nome: 'js',
        descricao: "Estudar JavaScript",
        concluida: false
    },{
        id: 1,
        nome: 'js',
        descricao: "Estudar JavaScript",
        concluida: false
    }
   
];

function adicionarTarefa(nome, descricao){
    if(tarefas.length > 0){
        id = tarefas.length;
    }else{
        id = 0;
    }
    concluida = false;
    tarefas.push({id, nome, descricao, concluida});
}

while(true){
    console.log("Gerenciador de tarefas");
    let escolha = parseInt(prompt("[1] Adicionar [2] Remover [3] Concluir [4] Visualizar [5] Sair"));

    if(escolha === 1){
        let nome = prompt("Digite o nome da tarefa: ");
        let descricao = prompt("Digite a descricao da tarefa: ");
        adicionarTarefa(nome, descricao);
    }else if(escolha === 4){
        for(let tarefa of tarefas){
            console.log(tarefa);
        }
    }else if(escolha === 5){
        break;
    }

}

// const descricao = prompt("digite a descricao da tarefa");

// console.log(tarefas)
// let escolha = prompt("Informe o Id da tarefa a ser deletada: ");

// tarefas.splice(escolha,1);

// console.log(tarefas)