class CalcController{
    #displayCalc
    #currentDate
    constructor(){
        this.#displayCalc = "0";
        this.#currentDate;
        this.initialize();
    }

    initialize(){
        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "00";
        dateEl.innerHTML = "01/01/2025";
        timeEl.innerHTML = "00:00"



    }

    get displayCalc(){
        return this.#displayCalc;
    }

    get currentDate(){
        return this.#currentDate;
    }

    set displayCalc(value){
        this.#displayCalc = value;
    }

    set currentDate(value){
        this.#currentDate = value;
    }

}