class Pet{
    constructor(nome, tipo, idade, genero, sede = 0, fome = 0){
        this.nome = nome;
        this.tipo = tipo;
        this.idade = idade;
        this.genero = genero;
        this.sede = sede;
        this.fome = fome;
    }


    apresentar(){
        if(this.tipo == "cao"){
            return `Au au sou o ${this.nome} um caozinho muito esperto de ${this.idade} anos, sou ${this.genero == "M" ? "menino" : "menina"}`;
        }else if(this.tipo == "gato"){
            return `Meow sou o ${this.nome} um gatinho muito agitado de ${this.idade} anos, sou ${this.genero == "M" ? "menino" : "menina"}`;
        }else{
            return `Brr sou o ${this.nome} um passaro muito sapeca de ${this.idade} anos, sou ${this.genero == "M" ? "menino" : "menina"}`;
        }
    }

    comer(){
        this.fome += 1;
    }

    beber(){
        this.sede += 1;
    }
}

class Pessoa{
    constructor(nome, idade, pets = []){
        this.nome = nome;
        this.idade = idade;
        this.pets = pets;
    }

    listarPets(){
        this.pets.map(pet => {
            pet.apresentar();
        })
    }


    apresentar(){
        return `Meu nome e ${this.nome} tenho ${this.idade} anos e essa e minha familia:\n${this.listarPets()}`;
    }
}

const cao = new Pet("Tchutchucao", "cao", 2, "F");
console.log(cao.apresentar());