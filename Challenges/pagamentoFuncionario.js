import fs from 'fs';

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
            for(let i = 0; i < this.funcionarios.length; i++){
                if(funcionario == this.funcionarios[i].nome){
                    this.funcionarios.splice(i, 1);
                    return `Funcionário ${funcionario} demitido`;
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

class SistemaRH{

    constructor(empresa){
        this.empresa = empresa;
    }

    depositarSalario(){
        const funcionariosPagos = this.empresa.funcionarios.forEach(funcionario => {
            funcionario.saldo += funcionario.salario;
        });
        return `Salario pago com sucesso.`;
    }

    salvarFolhaPagamento(nomeArquivo){
        const data = JSON.stringify(this.empresa.funcionarios, null, 2);
        fs.writeFileSync(`${nomeArquivo}.json`, data);
        return `Dados exportados com sucesso para '${nomeArquivo}.json'`;
    }

    carregarFolhaPagamento(nomeArquivo) {
        const arquivo = `${nomeArquivo}.json`;
        console.log(`Tentando carregar arquivo: ${arquivo}`);
        if (fs.existsSync(arquivo)) {
            const data = fs.readFileSync(arquivo, 'utf8');
            const objetosCarregados = JSON.parse(data);
            this.empresa.funcionarios.length = 0; // Limpa o array original
            objetosCarregados.forEach(obj => {
                const funcionario = new Funcionario(obj.nome, obj.cargo, obj.salario, obj.saldo); // Crie o funcionário usando os dados do JSON
                this.empresa.funcionarios.push(funcionario); // Adiciona os funcionários carregados ao array
            });
            return `${this.empresa.funcionarios.length} objetos carregados com sucesso.`;
        } else {
            return `Nenhum arquivo encontrado com o nome '${arquivo}'.`;
        }
    }

}


const Xcom = new Empresa("Xcom");
const XcomRH = new SistemaRH(Xcom);

const f1 = new Funcionario("Mauro Souza", "Empresario", 5600);
const f2 = new Funcionario("Jorge Freitas", "Gerente", 9800);
const f3 = new Funcionario("Josefina Farias", "Vice Presidente", 12400);
const f4 = new Funcionario("Mauro Souza", "Vice Presidente", 12400);

//Mauro autonomo
console.log(f1.apresentar());

//contratados
console.log(Xcom.contratar(f1));
console.log(Xcom.contratar(f2));
console.log(Xcom.contratar(f3));
console.log(Xcom.contratar(f4));
console.log(Xcom.demitir("Josefina Farias"))
console.log(XcomRH.depositarSalario());
console.log(XcomRH.depositarSalario());
console.log(f1.consultarSaldo())
console.log(f2.consultarSaldo())
console.log(XcomRH.salvarFolhaPagamento("folhaPagamentos2024"))
console.log(XcomRH.carregarFolhaPagamento("folhaPagamentos2024"))
console.log(Xcom.listarFuncionarios())

console.log(f1.consultarSaldo())
console.log(f2.consultarSaldo())
