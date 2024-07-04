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
        const contratado = this.funcionarios.find(colaborador => colaborador.nome === funcionario.nome);
        if(contratado){
            return `Colaborador(a) ${contratado.nome} ja faz parte da familia ${this.nome}!`;
        }
        this.funcionarios.push(funcionario);
        return `Bem vindo a nossa empresa ${funcionario.nome} !`;
    }


    demitir(funcionario){
        const contratado = this.funcionarios.find(colaborador => funcionario == colaborador.nome);
        if(contratado){
            for(let contratados of this.funcionarios){
                if(funcionario == contratados.nome){
                    this.funcionarios.splice(contratados, 1);
                    return `Funcionario ${funcionario} demitido`;
                }
            }
        }else{
            return `Funcionario ${funcionario} nao faz parte da nossa empresa.`;
        }
    }

    listarFuncionarios(){
        return this.funcionarios.map(funcionario => funcionario.apresentar(this.nome)).join("\n");
    }
}

const empresa = new Empresa("Xcom");

const f1 = new Funcionario("Mauro Souza", "Empresario", 5600);
const f2 = new Funcionario("Jorge Freitas", "Gerente", 9800);
const f3 = new Funcionario("Josefina Farias", "Vice Presidente", 12400);
const f4 = new Funcionario("Mauro Souza", "Vice Presidente", 12400);

//Mauro autonomo
console.log(f1.apresentar());

//contratados
console.log(empresa.contratar(f1));
console.log(empresa.contratar(f2));
console.log(empresa.contratar(f3));
console.log(empresa.contratar(f4));
console.log(empresa.demitir("Mauro Sousa"))
console.log(empresa.listarFuncionarios());