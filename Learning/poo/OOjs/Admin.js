import User from "./User.js";

export default class Admin extends User{
    #nome
    constructor(nome, email, nascimento, role = "admin", ativo = true){
        super(nome, email, nascimento, role, ativo)
    }
    exibirInfo(){
        const infos = super.exibirInfo();
        return `Admin - ${infos}`; 
    }
    criarCurso(nomeCurso, qtdVagas){
        return `curso ${nomeCurso} criado com ${qtdVagas} vagas.`
    }

}

// const novoAdmin = new Admin("Admin", "admin@admin.com", "2024-04-01");
// console.log(novoAdmin.exibirInfo());
// console.log(novoAdmin.criarCurso("Javascript", 20));