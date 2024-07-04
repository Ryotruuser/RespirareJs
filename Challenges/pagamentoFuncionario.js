class Funcionario{
    constructor(nome, cargo, salario, saldo = 0){
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        this.saldo = saldo;
    }

    apresentar(nomeEmpresa = false){
        if(nomeEmpresa){
            return `Ola me chamo ${this.nome} sou ${this.cargo} e atualmente ganho R$${this.salario} reais, atuo na empresa ${nomeEmpresa} \n`;
        }
        return `Ola me chamo ${this.nome} sou ${this.cargo} e atualmente ganho R$${this.salario} reais \n`;
    }

    depositar(valor){   
        this.saldo += valor;
        return `R$${valor} depositado com sucesso.`;
    }

    consultarSaldo(){
        return `Saldo atual e de R$${this.saldo}`;
    }
}

class Empresa{
    constructor(nome){
        this.nome = nome;
        this.funcionarios = [];
    }

    contratar(funcionario){
        const contratado = this.funcionarios.find(funcionario => funcionario.nome === contratado.nome);
        if(contratado){
            return `Funcionario ja e nosso colaborador!`;
        }
        this.funcionarios.push(funcionario);
        return `Bem vindo a nossa empresa ${funcionario.nome} !`;
    }


    demitir(funcionario){
        const contratado = this.funcionarios.find(funcionario => funcionario.nome === contratado.nome);
        if(contratado){
            for(let contratados of this.funcionarios){
                if(funcionario.nome == contratados.nome){
                    let indexFuncionario = indexOf(contratados)
                    this.funcionarios.splice(indexFuncionario, 1);
                }
            }
        }
    }

    listarFuncionarios(){
        return this.funcionarios.map(funcionario => funcionario.apresentar(this.nome)).join("\n");
    }
}

const empresa = new Empresa("Xcom");

const f1 = new Funcionario("Mauro", "Empresario", 5600);
console.log(f1.apresentar());

console.log(empresa.contratar(f1));
console.log(empresa.listarFuncionarios());