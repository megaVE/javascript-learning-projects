console.log("JavaScript Initial Status: Ok");

const previousOperation = document.querySelector("#previous-operation");
const currentOperation = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator{
    constructor(previousOperation, currentOperation){
        this.previousOperation = previousOperation;
        this.currentOperation = currentOperation;
        this.currentOperator = "";
    }
    insertDigit(digit){
        if(digit === "." && this.currentOperation.innerText.includes(".")){return;}
        console.log(`${digit}:\tnumber`);
        this.currentOperator = digit;
        this.updateScreen();
    }
    processOperator(operator){
        console.log(`${operator}:\toperator`);
        if(this.currentOperation.innerText === "" && operator !== "C")
            if(this.previousOperation.innerText === ""){return;}
            else{
                this.changeOperator(operator);
            }

        let value;
        const previous = +this.previousOperation.innerText.split(" ")[0];
        const current = +this.currentOperation.innerText;
        switch(operator){
            case "+":
                value = previous + current;
                this.updateScreen(value, operator, current, previous);
                break;
            case "-":
                value = previous - current;
                this.updateScreen(value, operator, current, previous);
                break;
            case "×":
                value = previous * current;
                this.updateScreen(value, operator, current, previous);
                break;
            case "÷":
                value = previous / current;
                this.updateScreen(value, operator, current, previous);
                break;
            case "=":
                operator = this.previousOperation.innerText.split(" ")[1];
                this.processOperator(operator);
                break;
            case "CE":
                this.currentOperation.innerText = "";
                break;
            case "C":
                this.currentOperation.innerText = "";
                this.previousOperation.innerText = "";
            case "DEL":
                this.currentOperation.innerText = this.currentOperation.innerText.slice(0,-1);
                break;
            default:
                return;
        }
    }
    changeOperator(operator){
        const validOperations = ["+", "-", "×", "÷"];

        if(!validOperations.includes(operator)){return;}
        console.log("Doing the push thing");
        this.previousOperation.innerText.slice(0, -1) + operator;
    }
    updateScreen(value=null, operator=null, current=null, previous=null){
        if(value === null)
            this.currentOperation.innerText += this.currentOperator;
        else{
            if(previous === 0)
                value = current;
            this.previousOperation.innerText = `${value} ${operator}`;
            this.currentOperation.innerText = "";
        }
    }
}

const calc = new Calculator(previousOperation, currentOperation)

buttons.forEach((keyButton) => {
    keyButton.addEventListener("click", (e) => {
        const keyValue = e.target.innerText;
        if(+keyValue >= 0 || keyValue === ".")
            calc.insertDigit(keyValue);
        else
            calc.processOperator(keyValue);
    })
})