class Veiculo {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    detalhes(){
        console.log(`${this.marca}, ${this.modelo}, ${this.ano}`);
    }
}

//subclasse carro

class Carro extends Veiculo {
    constructor(marca, modelo, ano, tipoCombustivel = "gasolina"){
        super(marca, modelo, ano)
        this.tipoCombustivel = tipoCombustivel;
    }

    abastecer(combustivel){
        if(combustivel != this.tipoCombustivel){
            console.log("Combustivel nao aceito");
        }else{
            console.log("Abastecendo");
        }
    }
}

//subclasse moto

class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindrada){
        super(marca, modelo, ano);
        this.cilindrada = cilindrada;
    }

    ligar(){
        console.log("Moto ligada");
    }

}

// instanciando

const novoCarro = new Carro("Fiat", "Uno", "1997");
console.log(novoCarro);
novoCarro.abastecer("gasolina");
novoCarro.detalhes();


const novaMoto = new Moto("Yamaha", "150", "2017", 250);
console.log(novaMoto);
novaMoto.ligar();
novaMoto.detalhes();
