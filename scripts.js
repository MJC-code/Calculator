const calculatorDisplay = document.getElementById("calculatorDisplay");

const operators = ['add', 'subtract', 'multiply', 'divide']
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

let displayValue = '0';
let storedNumber = '';
let storedOperator = '';
let previousKeypress = '';
let repeatMemory = [];
const displayLengthInDigits = 11;

document.getElementById('buttons').addEventListener('click', event => {
    if (event.target.type === "button") eventHandler(event.target.id)
})


function eventHandler(button) {
    if (typeof displayValue === "number") { displayValue = displayValue.toString() }

    if (button === 'backspace') {
        displayValue = displayValue.slice(0, -1);
        if (displayValue === '') displayValue = '0';
    }

    if (button === 'clear') {
        displayValue = 0;
        storedNumber = '';
        storedOperator = '';
        repeatMemory = [];
    }

    if (button === 'point') {
        if (!displayValue.includes('.')) displayValue += '.';
    }

    if (button === 'plusMinus') {
        if (!displayValue.startsWith('-')) {
            displayValue = '-' + displayValue;
        }
        else displayValue = displayValue.slice(1,);
    }

    if (digits.includes(button)) {
        
        if (displayValue.length < displayLengthInDigits || operators.includes(previousKeypress)) {
            if (displayValue == '0' || operators.includes(previousKeypress) || previousKeypress === 'equals') {
                displayValue = button;
            } else { displayValue += button }
        }
    }

    if (button === 'equals') {
        if (!storedOperator) { return };

        if (previousKeypress === 'equals') {
            displayValue = operate(displayValue, repeatMemory[1], repeatMemory[0]);
            calculatorDisplay.textContent = displayValue.toString().substring(0, displayLengthInDigits);
            operator = '';
            return;
        }

        repeatMemory = [displayValue, storedOperator];
        let result = operate(storedNumber, storedOperator, displayValue)
        displayValue = result;
        
        calculatorDisplay.textContent = displayValue.toString().substring(0, displayLengthInDigits);
        previousKeypress = 'equals';
        //storedOperator = ''
        return;
    }



    if (operators.includes(button)) {
        if (previousKeypress === button) {return}

        repeatMemory = [displayValue, storedOperator];
        if (storedNumber && storedOperator && previousKeypress != 'equals') {
            let result = operate(storedNumber, storedOperator, displayValue);
            displayValue = result;
            storedNumber = result;
            storedOperator = button;

        }
        else {
            storedNumber = displayValue;
            storedOperator = button;
        }
    }

    previousKeypress = button;

    calculatorDisplay.textContent = displayValue.toString().substring(0, displayLengthInDigits);

}




function operate(a, operator, b) {

    if (operator === 'add') return add(a, b);
    if (operator === 'subtract') return subtract(a, b);
    if (operator === 'multiply') return multiply(a, b);
    if (operator === 'divide') return divide(a, b);
    console.log('Error - Operator not recognised')
}

function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}

const multiply = function (a, b) {
    return parseFloat(a) * parseFloat(b);
}

const divide = function (a, b) {
    return parseFloat(a) / parseFloat(b);
}




