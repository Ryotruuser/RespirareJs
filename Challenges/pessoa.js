export default class Pessoa {
    #nome
    #idade
    #genero
    #profissao
    constructor(nome, idade, genero, profissao){
        this.#nome = nome;
        this.#idade = idade;
        this.#genero = genero;
        this.#profissao = profissao;

    }


    get nome(){
        return this.#nome;
    }
    set nome(nome){
        this.#nome = nome;
    }

    get idade(){
        return this.#idade;
    }
    set idade(idade){
        this.#idade = idade;
    }
    
    get genero(){
        return this.#genero;
    }
    set genero(genero){
        this.#genero = genero;
    }

    get profissao(){
        return this.#profissao;
    }
    set profissao(profissao){
        this.#profissao = profissao;
    }

    apresentar(){
        return `Ola me chamo ${this.nome}, sou do sexo ${this.genero} e tenho ${this.idade} anos.`
    }

    setErrorProfissao(profissao){
        return `sua profissao e ${this.profissao} e nao ${profissao}`
    }
}