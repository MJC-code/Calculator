const calculatorDisplay = document.getElementById("calculatorDisplay");


let firstOperand = 0;
let secondOperand = null;
let operator = null;


clear()



const add = function (a, b) {
    return +a + +b;
}

const subtract = function (a, b) {
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
    firstOperand = 0;
    secondOperand = null;
    operator = null;
    calculatorDisplay.textContent = '0';
}

function firstOperandExists() {
    if (firstOperand !== null) return true;
    return false;
}



function updateDisplay(keypress) {
    if (keypress === '+') {
        console.log('You pushed a sign')
        return
    }

    if (Number.isInteger(parseInt(keypress))) {
        if (calculatorDisplay.textContent !== "0") {
            calculatorDisplay.textContent += keypress;
            return;
        } else {
            calculatorDisplay.textContent = keypress;
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

        const buttonEquals = document.getElementById("equals")
        buttonEquals.addEventListener("click", function () {
            updateDisplay('=');
        })

        const buttonPlus = document.getElementById("plus")
        buttonPlus.addEventListener("click", function () {
            updateDisplay('+');
        })


        const buttonClear = document.getElementById("clear")
        buttonClear.addEventListener("click", clear);





