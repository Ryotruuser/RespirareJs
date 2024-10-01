import User from "./User.js";

class Docente extends User{
    constructor(nome, email, nascimento, role = "docente", ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    aprovarEstudante(estudante, curso){
        return `estudante ${estudante} aprovado no curso ${curso}, responsavel ${this.nome}.`
    }

    
}

const novoDocente = new Docente("Giulia", "G@g.com", "2024-05-01");
console.log(novoDocente.exibirInfo());
console.log(novoDocente.aprovarEstudante("Bruno", "javascript"));