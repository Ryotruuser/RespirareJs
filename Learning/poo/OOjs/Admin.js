import User from "./User.js";

class Admin extends User{
    constructor(nome, email, nascimento, role = "admin", ativo = true){
        super(nome, email, nascimento, role, ativo)
    }
}

const novoAdmin = new Admin("Admin", "admin@admin.com", "2024-04-01");
console.log(novoAdmin.exibirInfo())