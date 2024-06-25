class CalcController{
    #displayCalc
    #dataAtual
    constructor(){
        this.#displayCalc = "0";
        this.#dataAtual;
    }

    get displayCalc(){
        return this.#displayCalc;
    }

    get dataAtual(){
        return this.#dataAtual;
    }

    set displayCalc(valor){
        this.#displayCalc = valor;
    }

    set dataAtual(valor){
        this.#dataAtual = valor;
    }

}