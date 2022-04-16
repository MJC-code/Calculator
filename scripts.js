const calculatorDisplay = document.getElementById("calculatorDisplay");

const operators = ['add', 'subtract', 'multiply', 'divide']
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

let displayValue = '0';
let storedEntries = ['0']


document.getElementById('buttons').addEventListener('click', event => {
    if (event.target.type === "button") eventHandler(event.target.id)
})


function eventHandler(button) {
    if (typeof displayValue === "number") { displayValue = displayValue.toString() }

    console.log('Event handler received button push: ' + button);

    let previousEntry = storedEntries[storedEntries.length - 1];
   
    if (button === 'backspace') {
        displayValue = displayValue.slice(0, -1);
        if (displayValue === '') displayValue = '0';
    }

    if (button === 'clear') {
        clear();
    }

    if (button === 'point') {
        if (!displayValue.includes('.')) displayValue += '.';
    }

    if (button === 'plusMinus') {
        if (!displayValue.startsWith('-')) {
            displayValue = '-' + displayValue;
        }
        else displayValue = displayValue.slice(1, );
    }


    if (digits.includes(button)) {
        if (operators.includes(storedEntries[storedEntries.length -1])) {
            displayValue = '0';
            storedEntries.push(button)
        }

        if (displayValue == '0') {
            displayValue = button;
        }
        else displayValue += button;
    }

    if (operators.includes(button)) {
        storedEntries.push(displayValue);
        storedEntries.push(button);


    }

    calculatorDisplay.textContent = displayValue;
}


function clear() {
    console.log('Entered clear function');
    displayValue = 0;
    inputs = [0];
}


function operate(operator, a, b) {
    if (operator === 'add') return add(a, b);
    if (operator === 'subtract') return subtract(a, b);
    if (operator === 'multiply') return multiply(a, b);
    if (operator === 'divide') return divide(a, b);
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




