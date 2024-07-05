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


class petRoyale{
    constructor(){
        this.quartosDisponiveis = 2;
        this.petsAlojados = [];
    }

    checkIn(pet){
        if(!this.quartosDisponiveis > 0){
            return `Nao possuimos acomodacoes para ${pet.nome} no momento`;
        }
        this.quartosDisponiveis -= 1;
        this.petsAlojados.push(pet);
        return `${pet.nome} acomodado com sucesso restam ${this.quartosDisponiveis} quartos disponiveis.`;
    }

    checkOut(petNome){
        const hospedado = this.petsAlojados.find(hospede => petNome == hospede.nome);
        if(hospedado){
            this.quartosDisponiveis += 1;
            for(let i = 0; i < this.petsAlojados.length; i++){
                if(petNome == this.petsAlojados[i].nome){
                    this.petsAlojados.splice(i, 1);
                    return `Volte sempre ${petNome}!`;
                }
            }
        }else{
            return `Nenhum hospede chamado ${petNome} no momento.`;
        }
    }




}






const humano = new Pessoa("Janderson", 25)
const cao = new Pet("Tchutchucao", "cao", 2, "M");
const gato = new Pet("Shiro", "gato", 5, "M");
const ave = new Pet("Flor", "ave", 14, "F");
const petHotel = new petRoyale();
console.log(humano.apresentar());
console.log(humano.adotarPet(cao));
console.log(humano.adotarPet(ave));
console.log(humano.adotarPet(gato));
console.log(humano.apresentar());

console.log(petHotel.checkIn(cao));
console.log(petHotel.checkIn(ave));
console.log(petHotel.checkIn(gato));
console.log(petHotel.checkOut("Flor"));
console.log(petHotel.checkIn(gato));