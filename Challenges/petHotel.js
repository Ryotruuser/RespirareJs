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
            return `Au au me chamo ${this.nome} um caozinho muito esperto de ${this.idade} meses, sou ${this.genero == "M" ? "menino" : "menina"}`;
        }else if(this.tipo == "gato"){
            return `Meow me chamo ${this.nome} um felino muito agitado de ${this.idade} meses, sou ${this.genero == "M" ? "menino" : "menina"}`;
        }else{
            return `Brr me chamo ${this.nome} sou uma ave muito sapeca de ${this.idade} meses, sou ${this.genero == "M" ? "menino" : "menina"}`;
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
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.pets = [];
    }

    listarPets(){
        if(this.pets.length === 0){
            return `Nao possuo pets.`
        }
        return this.pets.map(pet => pet.apresentar()).join("\n");
    
    }

    adotarPet(pet){
        this.pets.push(pet);
        return `parabens voce adotou um pet do tipo ${pet.tipo}`;
    }

    apresentar(){
        return `\nMeu nome e ${this.nome} tenho ${this.idade} anos e possuo ${this.pets.length} pets e essa e minha familia:\n${this.listarPets()}`;
    }
}

const humano = new Pessoa("Janderson", 25)
const cao = new Pet("Tchutchucao", "cao", 2, "M");
const gato = new Pet("Shiro", "gato", 5, "M");
const ave = new Pet("Flor", "ave", 14, "F");
console.log(humano.apresentar());
console.log(humano.adotarPet(cao));
console.log(humano.adotarPet(ave));
console.log(humano.adotarPet(gato));
console.log(humano.apresentar());