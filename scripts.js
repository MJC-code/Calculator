const calculatorDisplay = document.getElementById("calculatorDisplay");

let storedOperand;
let currentOperator;
let storedOperator;

clear()

function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return (+a - +b);
}

const multiply = function (a, b) {
    return (+a * +b);
}

const divide = function (a, b) {
    return (+a / +b);
}

const operate = function (operator, a, b) {
    return operator(a, b);
}

function clear() {
    storedOperand = 0;
    currentOperator = null;
    calculatorDisplay.textContent = '0';
}

function backspace() {
    if (calculatorDisplay.textContent !== '0') {
        calculatorDisplay.textContent = calculatorDisplay.textContent.slice(0, -1) // remove last character
        if (!calculatorDisplay.textContent) {calculatorDisplay.textContent = '0'}  // don't allow empty display
    }
}

function equals() {
    result = operate(plus, storedOperand, calculatorDisplay.textContent);
    storedOperand = result;
    calculatorDisplay.textContent = result;
    return;

}

function plus() {
    calculatorDisplay.textContent = add(+calculatorDisplay.textContent, +storedOperand);
    storedOperand = calculatorDisplay.textContent;
    storedOperator = "add"
    currentOperator = "add";
    
}


function updateDisplay(keypress) {
    if (currentOperator !== "plus") {
        calculatorDisplay.textContent = "";
        currentOperator = null;
    }


    if (Number.isInteger(parseInt(keypress))) {
        if (calculatorDisplay.textContent !== "0") {
            calculatorDisplay.textContent += keypress;
            return;
        } else {
            calculatorDisplay.textContent = keypress;
            return
        }
    }

    if (keypress === ".") {
        if (!calculatorDisplay.textContent.includes(".")) { 
        calculatorDisplay.textContent += '.'
        }
    }
}





        const button1 = document.getElementById("1")
        button1.addEventListener("click", function () {
            updateDisplay('1');
        })

        const button2 = document.getElementById("2")
        button2.addEventListener("click", function () {
            updateDisplay('2');
        })

        const button0 = document.getElementById("0")
        button0.addEventListener("click", function () {
            updateDisplay('0');
        })

        const buttonPoint = document.getElementById("point")
        buttonPoint.addEventListener("click", function () {
            updateDisplay('.');
        })

        const buttonPlus = document.getElementById("plus")
        buttonPlus.addEventListener("click", plus);


        const buttonEquals = document.getElementById("equals")
        buttonEquals.addEventListener("click", equals);

        const buttonClear = document.getElementById("clear")
        buttonClear.addEventListener("click", clear);

        const buttonBackspace= document.getElementById("backspace")
        buttonBackspace.addEventListener("click", backspace);





