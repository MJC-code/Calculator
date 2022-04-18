const calculatorDisplay = document.getElementById("calculatorDisplay");

const operators = ['add', 'subtract', 'multiply', 'divide', 'equals']
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

let displayValue = '0';
let storedNumber = '';
let storedOperator = '';
let previousKeypress = '';
let repeatMemory = [];

document.getElementById('buttons').addEventListener('click', event => {
    if (event.target.type === "button") eventHandler(event.target.id)
})


function eventHandler(button) {
    if (typeof displayValue === "number") { displayValue = displayValue.toString() }

/*     console.log(`eventHandler received button push: ${button}. previousKeypress: ${previousKeypress}.
    storedNumber: ${storedNumber}   storedOperator: ${storedOperator}`);
 */
    if (button === 'backspace') {
        displayValue = displayValue.slice(0, -1);
        if (displayValue === '') displayValue = '0';
    }

    if (button === 'clear') {
        // console.log('Entered clear function');
        displayValue = 0;
        storedNumber = '';
        storedOperator = '';
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
        if (displayValue == '0' || operators.includes(previousKeypress)) {
            displayValue = button;
        } else { displayValue += button }
    }

    if (button === 'equals') {
        if (previousKeypress === 'equals') {
            displayValue = operate(repeatMemory[0], repeatMemory[1], displayValue);
            calculatorDisplay.textContent = displayValue;
            return;
        }

        repeatMemory = [displayValue, storedOperator];
        let result = operate(storedNumber, storedOperator, displayValue)
        displayValue = result;
        storedNumber = ''
        calculatorDisplay.textContent = displayValue;
        previousKeypress = 'equals';
       /*  console.log(`Reached end of eventHandler. previousKeypress: ${previousKeypress}.
storedNumber: ${storedNumber}   storedOperator: ${storedOperator}`) */
        return;
    }



    if (operators.includes(button)) {


        if (storedNumber && storedOperator) {
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
    calculatorDisplay.textContent = displayValue;
    /* console.log(`Reached end of eventHandler. previousKeypress: ${previousKeypress}.
    storedNumber: ${storedNumber}   storedOperator: ${storedOperator}`) */
}




function operate(a, operator, b) {
   // console.log(`operate function received a: ${a}   operator: ${operator}   b: ${b}`)
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




