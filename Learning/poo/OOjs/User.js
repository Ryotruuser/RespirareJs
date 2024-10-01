export default class User{
    constructor(nome, email, nascimento, role, ativo = true){
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || "estudante";
        this.ativo = ativo;
    }

    exibirInfo(){
        return `${this.nome}, ${this.email}`; 
    }
}


const novoUser = new User("Renan", "r@r.com", "2024-01-01");

console.log(novoUser.exibirInfo());