class ContaBancaria{

    #saldo
    #titular
    constructor(titular, saldo = 0){
        this.#titular = titular;
        this.#saldo = saldo;
    }

    get titular(){
        return this.#titular;
    }set titular(titular){
        this.#titular = titular;
    }

    get saldo(){
        return this.#saldo;
    }set saldo(saldo){
        this.#saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
        return `Deposito de R$${valor} realizado, saldo atual R$${this.saldo}`
    }

    sacar(valor){
        if(valor > this.saldo){
            return `saldo insuficiente`;
        }
        this.saldo -= valor;
        return `Saque de R$${valor} realizado, saldo atual R$${this.saldo}`;
    }

}

const c1 = new ContaBancaria("Renan", 1000);
console.log(c1.depositar(500));
console.log(c1.sacar(700));
console.log(c1.sacar(1000));