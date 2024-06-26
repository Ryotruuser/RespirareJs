class CalcController{
    #currentDate
    #displayCalcEl
    #dateEl
    #timeEl
    #locale
    #operation
    constructor(){

        this.#operation = [];
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

    clearAll(){

        this.#operation = [];
    }

    clearEntry(){

        this.#operation.pop();
    }

    getLastOperation(){

        return this.#operation[this.#operation.length - 1];

    }

    setLastOperation(value){
        this.#operation[this.#operation.length - 1] = value;
    }

    isOperator(value){

        return (["+","-","*","%", "/"].indexOf(value) > -1);
    }

    pushOperation(value){
        
        this.#operation.push(value);

        if(this.#operation.length > 3){
            

            this.calc();

            console.log(this.#operation);


        }
        
    }

    calc(){

        let last = this.#operation.pop();

        let result = eval(this.#operation.join());

        this.#operation = [result, last];
    }

    addOperation(value){

        if(isNaN(this.getLastOperation())){
            //string

            if(this.isOperator(value)){

                this.setLastOperation(value);

            }else if(isNaN(value)){

                console.log(value);

            }else{

                this.pushOperation(value);

            }

        }else{

            if(this.isOperator(value)){

                this.pushOperation(value);

            }else{

                let newValue = this.getLastOperation().toString() + value.toString();
                this.setLastOperation(parseInt(newValue));

                this.setLastNumberToDisplay();

            }

        }

    }

    setError(){

        this.displayCalc = "Error";
    }

    execBtn(value){
        switch(value){
            case "ac":
                this.clearAll()
                break;
            case "ce":
                this.clearEntry()
                break;
            case "soma":
                this.addOperation("+");
                break;
            case "subtracao":
                this.addOperation("-");
                break;
            case "divisao":
                this.addOperation("/");
                break;
            case "multiplicacao":
                this.addOperation("*");   
                break;
            case "porcento":
                this.addOperation("%");
                break;
            case "igual":
                
                break;
            case "ponto":
                this.addOperation(".");
                break;
            
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            this.addOperation(parseInt(value));
            break;
        

            
            default:
                this.setError();
                break;
        }
    }

    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        
        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, "click drag", e=>{

                let textBtn = btn.className.baseVal.replace("btn-","");

                this.execBtn(textBtn);
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