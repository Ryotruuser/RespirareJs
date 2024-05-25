//para usar essa aplicacao com node necessario usar  'npm install prompt-sync'
const prompt = require("prompt-sync")({ sigint: true }); // metodo para usar prompt no node

const filaAnimais = []; // nosso array

// whats your name doctar
let nome = prompt("Ola Doutor, me informa seu nome: ");

while(true){

    //imprimindo valores e pegando a escolha

    console.log("\n[1]Tratar proximo paciente [2]Adicionar paciente no final da fila [3]Encerrar expediente\n")
    let escolha = parseInt(prompt(`Ola doutor ${nome} oque faremos a seguir? `));

    //verifica se a opcao escolha e um numero

    if(isNaN(escolha)){
        console.log("ERRO: Escolha invalida.");

    } else{

        //caso a escolha seja valida, vamos verificar se a fila esta vazia
        if(filaAnimais.length != 0){

            // com a fila com pelo menos um paciente seguimos conforme abaixo
    
            if(escolha === 1) {
                //saudacao inicial com o primeiro da fila
                console.log(`Bem vindo ao consultorio ${filaAnimais[0]} \n`);

                //remove o primeiro da fila ja que ele foi tratado
                filaAnimais.shift();

                //pega o ultimo da fila que e o total de itens na fila - 1 pois o indice comeca em 0
                let ultimoDaFila = filaAnimais.length - 1;

                //Verifica se foi o ultimo paciente
                if(filaAnimais.length > 0){
                    console.log(`O proximo paciente da fila e ${filaAnimais[0]} o ultimo paciente e ${filaAnimais[ultimoDaFila]}`);

                } else{

                    console.log("Muito bem Doutor todos os pacientes foram atendidos.")
                }
                

    
            } else if(escolha === 2){
    
                let paciente = prompt("Digite o nome do paciente: ");
                filaAnimais.push(paciente);
    
            }else if(escolha === 3){
                console.log(`Poxa Doutor ${nome} ainda possuimos pacientes na espera. O proximo paciente da fila e ${filaAnimais[0]}`);
            }
            
        }else {
            //se a escolha for valida porem a fila estiver vazia caimos aqui

            if(escolha === 1){
                console.log(`Doutor ${nome} no momento estamos sem pacientes na fila, voce pode adicionar um paciente ao selecionar 2 no menu.`);

            }else if(escolha === 2){
                let paciente = prompt("Digite o nome do paciente: ");
                filaAnimais.push(paciente);

            }else if(escolha === 3){
                console.log("Fim de expediente por hoje...");
                break;

            }else{
                console.log("Nao tem nenhum paciente na fila de espera.");
            }
        }
    }

}