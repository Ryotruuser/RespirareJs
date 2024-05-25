const filaAnimais = [];
const prompt = require("prompt-sync")({ sigint: true });

let nome = prompt("Ola Doutor, me informa seu nome: ");

while(true){
    console.log("\n[1]Tratar proximo paciente [2]Adicionar paciente no final da fila [3]Encerrar expediente\n")
    let escolha = parseInt(prompt(`Ola doutor ${nome} oque faremos a seguir? `));

    if(isNaN(escolha)){
        console.log("ERRO: Escolha invalida.")

    } else{

        if(filaAnimais.length != 0){

            let posicaoNaFila = filaAnimais.length - 1
    
            if(escolha === 1) {
                console.log(`Tratando paciente de ficha numero ${posicaoNaFila} da fila 
                que e ${filaAnimais[posicaoNaFila]}`);
                
    
            } else if(escolha === 2){
    
                let paciente = prompt("Digite o nome do paciente: ");
                filaAnimais.push(paciente);
    
            }else if(escolha === 3){
                console.log(`Poxa Doutor ${nome} ainda possuimos pacientes na espera.`);
            }
            
        }else {
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