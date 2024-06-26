class CalcController{
    #currentDate
    #displayCalcEl
    #dateEl
    #timeEl
    #locale
    constructor(){
        this.#locale = "pt-BR";
        this.#displayCalcEl = document.querySelector("#display");
        this.#dateEl = document.querySelector("#data");
        this.#timeEl = document.querySelector("#hora");
        this.#currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize(){

        this.setDisplayDateTime()

        setInterval(() => {

            this.setDisplayDateTime()

        }, 1000);
    }


    addEventListenerAll(element, events, fn){

        events.split(" ").forEach(event => {
            element.addEventListener(event, fn, false);
        });

    }

    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        
        buttons.forEach((btn, index)=>{
            
            this.addEventListenerAll(btn, "click drag", e=>{
                console.log(btn.className.baseVal.replace("btn-",""));
            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e=> {
                btn.style.cursor = "pointer";
            });

        });

        
    
    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this.#locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this.#locale);

    }


    get displayTime(){
        return this.#timeEl.innerHTML;
    } 
    set displayTime(value){
        this.#timeEl.innerHTML = value;
    } 

    get displayDate(){
        return this.#dateEl.innerHTML;
    }
    set displayDate(value){
        this.#dateEl.innerHTML = value;
    } 

    get displayCalc(){
        return this.#displayCalcEl.innerHTML;
    }
    set displayCalc(value){
        this.#displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }
    set currentDate(value){
        this.#currentDate = value;
    }

}