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

class Empresa{
    constructor(nome){
        this.nome = nome;
        this.funcionarios = [];
    }

    adicionarFuncionario(funcionario){
        this.funcionarios.push(funcionario);
        return `Funcionario ${funcionario.nome} adicionado`;
    }

    removerFuncionario(nome){
        this.funcionarios = this.funcionarios.filter(func => func.nome !== nome);
        return `Funcionario ${nome} removido`;
    }


    listarFuncionarios(){
        return this.funcionarios.map(func => func.apresentar()).join("\n");
    }
}

const empresa = new Empresa("TechCorp");
const func1 = new Funcionario("Carlos", 30, "Masculino", 7000);
const func2 = new Funcionario("Ana", 25, "Feminino", 6500);
console.log(empresa.adicionarFuncionario(func1));
console.log(empresa.adicionarFuncionario(func2));
console.log(empresa.listarFuncionarios());
console.log(empresa.removerFuncionario('Carlos'));
console.log(empresa.listarFuncionarios());