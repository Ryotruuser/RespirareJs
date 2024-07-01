import Pessoa from "./pessoa.js";

class Guarda extends Pessoa{    
    constructor(nome, idade, genero, profissao) {
        super(nome, idade, genero, profissao);
    }

    multar(){
        if(this.profissao == "guarda"){
            return `voce esta multado!!`
        }else{
            return this.setErrorProfissao("guarda");
        }
        
    }

}


// const p1 = new Pessoa("Carlos", 15, "masculino", "padeiro");
// console.log(p1.apresentar())
const g1 = new Guarda("Josue", 25, "masculino", "padeiro")
console.log(g1.multar());
