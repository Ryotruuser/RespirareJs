const contaBancaria = {
    titular: this.nome,
    saldo: 200,
    depositar: function(valorDeposito){return this.saldo += valorDeposito},
    sacar: function(valorSaque){return this.saldo -= valorSaque},
};
const cliente = {
    nome: "Renan Ramos",
    conta: contaBancaria,
}

function mostrarSaldo (cliente) {
    contaBancaria.titular = cliente.nome;
    console.log(`O saldo do cliente ${cliente.nome} e de ${cliente.conta.saldo}R$`);
}

cliente.conta.depositar(15400);
mostrarSaldo(cliente);
cliente.conta.sacar(1000);
mostrarSaldo(cliente);