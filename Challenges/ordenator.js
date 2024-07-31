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
        if(this.episodios > 10){
            this.status = "Finalizado";
            this.temporada.push(this.detalhes);
        }else{
            this.status = "Dropado";
        }   
    }

    detalhar(){
        return console.log(`\n${this.tempCont} Temporada\nAnime: ${this.nome}\nEpisodios assistidos: ${this.episodios}\nStatus: ${this.status}\n`);
    }
}


const naruto = new Anime("Naruto");
naruto.adicionarEpisodios(1);
naruto.finalizarTemporada();
naruto.detalhar();