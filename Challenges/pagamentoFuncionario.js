class Funcionario{
    constructor(nome, cargo, salario, saldo = 0){
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        this.saldo = saldo;
    }

    apresentar(){
        return `Ola me chamo ${this.nome} sou ${this.cargo} e atualmente ganho R$${this.salario} reais`;
    }

    depositar(valor){   
        this.saldo += valor;
        return `R$${valor} depositado com sucesso.`;
    }

    consultarSaldo(){
        return `Saldo atual e de R$${this.saldo}`;
    }
}

const f1 = new Funcionario("Mauro", "Empresario", 5600);
console.log(f1.apresentar())
console.log(f1.depositar(5600))
console.log(f1.consultarSaldo())