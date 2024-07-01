class Pessoa {
    constructor(nome, idade, genero){
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
    }
    apresentar(){
        return `Ola, meu nome e ${this.nome}, tenho ${this.idade} anos e sou do genero ${this.genero}`;
    }

}

class Funcionario extends Pessoa {
    constructor(nome, idade, genero, salario){
        super(nome, idade, genero);
        this.salario = salario;
    }

    mostrarSalario(){
        return `Meu salario e R$${this.salario}.`;
    }
}

const f1 = new Funcionario("Renan", 22, "Masculino", 100);
console.log(f1.apresentar());
console.log(f1.mostrarSalario());