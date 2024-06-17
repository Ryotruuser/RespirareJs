const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfo: function(){
        console.log(this.nome, this.email);
    }    
}

const admin = {
    nome: "Mariana",
    email: "m@mcom",
    role: "admin",
    criarCurso (){
        console.log("Curso criado");
    }
}


Object.setPrototypeOf(admin, user); //heranca de prototipos
admin.criarCurso()
admin.exibirInfo()