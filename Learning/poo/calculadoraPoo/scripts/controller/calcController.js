class CalcController{
    #currentDate
    #displayCalcEl
    #dateEl
    #timeEl
    #locale
    #operation
    #lastOperator
    #lastNumber
    constructor(){

        this.#lastOperator = "";
        this.#lastNumber = "";

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

        this.setLastNumberToDisplay();
    }


    addEventListenerAll(element, events, fn){

        events.split(" ").forEach(event => {
            element.addEventListener(event, fn, false);
        });

    }

    clearAll(){

        this.#operation = [];
        this.#lastNumber = "";
        this.#lastOperator = "";

        this.setLastNumberToDisplay();
    }

    clearEntry(){

        this.#operation.pop();

        this.setLastNumberToDisplay();
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

        }
        
    }

    getResult(){

        return eval(this.#operation.join(""));
    }

    calc(){

        let last = "";
        this.#lastOperator = this.getLastItem();

        if(this.#operation.length < 3){

            let firstItem = this.#operation[0];
            this.#operation = [firstItem, this.#lastOperator, this.#lastNumber];

        }

        if(this.#operation.length > 3){
            let last = this.#operation.pop();
            this.#lastNumber = this.getResult();
        }else if(this.#operation.length == 3){

            this.#lastNumber = this.getLastItem(false);

        }

        let result = this.getResult();

        if(last == "%"){

            result /= 100;
            this.#operation = [result];

        }else{

            this.#operation = [result];

            if(last) this.#operation.push(last);

        }       

        

        this.setLastNumberToDisplay();
    }

    getLastItem(isOperator = true){
        let lastItem;
        for(let i = this.#operation.length - 1; i >= 0; i--){

           if(this.isOperator(this.#operation[i]) == isOperator){
                    lastItem = this.#operation[i];
                    break;
                }
            

        }

        if(!lastItem){

            lastItem = (isOperator) ? this.#lastOperator : this.#lastNumber;

        }

        return lastItem;
    }

    setLastNumberToDisplay(){

        let lastNumber = this.getLastItem(false);

        if(!lastNumber) lastNumber = 0;

        this.displayCalc = lastNumber;
        
    }

    addOperation(value){

        if(isNaN(this.getLastOperation())){
            //string

            if(this.isOperator(value)){

                this.setLastOperation(value);

            }else{

                this.pushOperation(value);
                this.setLastNumberToDisplay();

            }

        }else{

            if(this.isOperator(value)){

                this.pushOperation(value);

            }else{

                let newValue = this.getLastOperation().toString() + value.toString();
                this.setLastOperation((newValue));

                this.setLastNumberToDisplay();

            }

        }

    }

    setError(){

        this.displayCalc = "Error";
    }


    addDot(){

        let lastOperation = this.getLastOperation();


        if(typeof lastOperation === "string" && lastOperation.split("".indexOf(".") > -1)) return;
        

        if(this.isOperator(lastOperation) || !lastOperation){

            this.pushOperation("0.");

        }else{

            this.setLastOperation(lastOperation.toString() + ".");

        }

        this.setLastNumberToDisplay();


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
                this.calc();
                break;
            case "ponto":
                this.addDot(".");
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