function User(nome, email){
    this.nome = nome;
    this.email = email;

    this.exibirInfo = function(){
        return `${this.nome}, ${this.email}`;
    }
}

const novoUser = new User("Renan", "r@r.com");
console.log(novoUser.exibirInfo());