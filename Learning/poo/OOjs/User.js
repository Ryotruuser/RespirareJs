export default class User{
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "estudante";
        this.#ativo = ativo;
    }

    //getters
    get nome(){
        return this.#nome;
    }

    get email(){
        return this.#email;
    }

    get nascimento(){
        return this.#nascimento;
    }

    get role(){
        return this.#role;
    }

    get ativo(){
        return this.#ativo;
    }

    //setters

    set nome(nome){
        if(nome === ""){
            throw new Error("Formato de nome digitado nao e valido");
        }
        return this.#nome = nome;
    }

    set email(email){
        return this.#email = email;
    }

    set nascimento(nascimento){
        return this.#nascimento = nascimento;
    }

    set role(role){
        return this.#role = role;
    }

    set ativo(ativo){
        return this.#ativo = ativo;
    }

    #montaObjUser(){
        return ({
            nome: this.nome,
            email: this.email,
            nascimento: this.nascimento,
            role: this.role,
            ativo: this.ativo,
        })
    }

    exibirInfo(){
        const objUser = this.#montaObjUser();
        return objUser; 
    }
}


// const novoUser = new User("Renan", "r@r.com", "2024-01-01");

// console.log(novoUser.exibirInfo());