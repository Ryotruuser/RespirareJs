import { carregar, salvar, adicionar, remover, visualizar } from './funcoesUteis.js';
import promptSync from 'prompt-sync';

const prompt = promptSync({ sigint: true });
class Anime{
    constructor(nome) {
        this.nome = nome;
        this.episodios = 0;
        this.classificacao = 0;
        this.temporada = [];
        this.status = "";
        this.tempCont = 1;
    }

    adicionarEpisodios(num){
        this.episodios += num;
        this.status = "acompanhando"
    }

    classificar(nota){
        this.classificacao = nota;
    }

    finalizarTemporada(){
        const fimTemp = `${this.tempCont} temporada, ${this.status}`;
        if(this.episodios > 10){
            this.status = "Finalizado";
            this.temporada.push(fimTemp);
        }else{
            this.status = "Dropado";
            this.temporada.push(fimTemp);
            
        }   
    }

    detalhar(){
        return console.log(`\n${this.tempCont} Temporada\nAnime: ${this.nome}\nEpisodios assistidos: ${this.episodios}\nStatus: ${this.status}\nTemporada: ${this.temporada}`);
    }
}

const listaAnimes = [];

while(true){
    //carregar JSON
    // carregar(listaAnimes, "animes");

    //main menu
    console.log("\nOrdenador de Animes\n");
    console.log( `[1] Listar Animes\n[2] Gerenciar Animes\n[3] Sair\n`);
    const opcao = prompt("Digite sua opcao: ");
    console.log("\n")
    
    //opcoes
    if(opcao == 1){
        visualizar(listaAnimes);
    }else if(opcao == 2){
        console.clear();
        let vdd = true;
        while(vdd){
            console.log("\nGerenciador de animes\n");
            console.log("[1] Adicionar Anime\n[2] Contabilizar episodio\n[3] Alterar status\n[4] Finalizar temporada\n[5] Voltar");
            const op = parseInt(prompt("Digite sua opcao: "));
            console.log("\n");

            //switch
            switch (op) {
                case 1:
                    console.log("heheXD");
                    break;
                
                case 5:
                    vdd = false;
                    break;
                default:
                    break;
            }
        }
    }else if(opcao == 3){
        break;
    }

};