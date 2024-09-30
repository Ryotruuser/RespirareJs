const user = {
    nome: "Renan",
    email: "r@r.com",
    nascimento: "2024-26-08",
    role: "estudante",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

const admin  = {
    nome: "Admin",
    email: "admin@admin.com",
    nascimento: "2024-16-08",
    role: "admin",
    ativo: true,
    criarCurso: function(){
        console.log("curso criado");
    }
}

Object.setPrototypeOf(admin, user);

admin.criarCurso();
admin.exibirInfos();