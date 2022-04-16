const calculatorDisplay = document.getElementById("calculatorDisplay");

const operators = ['add', 'subtract', 'multiply', 'divide']
let storedOperand = 0;
let displayValue = 0;
let expectingNewOperand = false;
let operator = null;
let previousOperator = null;

document.getElementById('buttons').addEventListener('click', event => {
    eventHandler(event.target.id)
})


function eventHandler(button) {
    console.log('Event handler received button push: ' + button);
}



function operate(operator, a, b) {
    if (operator === 'add') return add(a, b);
    if (operator === 'subtract') return subtract(a, b);
    if (operator === 'multiply') return multiply(a, b);
    if (operator === 'divide') return divide(a,b);
    console.log('Error - Operator not recognised')
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




