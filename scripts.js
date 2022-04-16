const calculatorDisplay = document.getElementById("calculatorDisplay");

const operators = ['add', 'subtract', 'multiply', 'divide']
let storedOperand = 0;
let displayValue = 0;
let expectingNewOperand = false;
let operator = null;
let previousOperator = null;

const button1 = document.getElementById("1")
button1.addEventListener("click", function () {
    buttonHandler(this.id);
})

const button2 = document.getElementById("2")
button2.addEventListener("click", function () {
    buttonHandler(this.id);
})

const button3 = document.getElementById("3")
button3.addEventListener("click", function () {
    buttonHandler(this.id);
})
const button0 = document.getElementById("0")
button0.addEventListener("click", function () {
    buttonHandler(this.id);
})

const pointButton = document.getElementById("pointButton")
pointButton.addEventListener("click", function () {
    buttonHandler('.');
})

const addButton = document.getElementById("addButton")
addButton.addEventListener("click", function () {
    buttonHandler('add');
})

const subtractButton = document.getElementById("subtractButton")
subtractButton.addEventListener("click", function () {
    buttonHandler('subtract');
})

const multiplyButton = document.getElementById("multiplyButton")
multiplyButton.addEventListener("click", function () {
    buttonHandler('multiply');
})

const divideButton = document.getElementById("divideButton")
divideButton.addEventListener("click", function () {
    buttonHandler('divide');
})

const equalsButton = document.getElementById("equalsButton")
equalsButton.addEventListener("click", function () {
    buttonHandler('equals');
})

const clearButton = document.getElementById("clearButton")
clearButton.addEventListener("click", function () {
    buttonHandler('clear');
})


const backspaceButton = document.getElementById("backspaceButton")
backspaceButton.addEventListener("click", function () {
    buttonHandler('backspace');
})


function buttonHandler(buttonPushed) {

    if (+buttonPushed) {
        console.log("received the digit", buttonPushed);
        if (expectingNewOperand === true) {
            expectingNewOperand = false;
            displayValue = buttonPushed;
        }
        else {
            displayValue += buttonPushed;
        }

    }

    if (operators.includes(buttonPushed)) {
        console.log('Received the operator: ' + buttonPushed)
    }



    console.log('Reached bottom of buttonHandler function. displayValue is: ' + displayValue);
    calculatorDisplay.textContent = displayValue;
}




/* function backspace() {
    if (calculatorDisplay.textContent !== '0') {
        calculatorDisplay.textContent = calculatorDisplay.textContent.slice(0, -1) // remove last character
        if (!calculatorDisplay.textContent) { calculatorDisplay.textContent = '0' }  // don't allow empty display
    }
}
 */

function operate(operator, a, b) {
    if (operator === 'add') return add(a, b);
    if (operator === 'subtract') return subtract(a, b);
    if (operator === 'multiply') return multiply(a, b);
    if (operator === 'divide') return divide(a,b);
    console.log('Operator not recognised')
}


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




