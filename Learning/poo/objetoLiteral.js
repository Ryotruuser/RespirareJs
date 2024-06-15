const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "Admin",
    ativo: true,
    exibirInfo: function(){
        console.log(this.nome, this.email);
    }    
}