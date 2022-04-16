const calculatorDisplay = document.getElementById("calculatorDisplay");

const operators = ['add', 'subtract', 'multiply', 'divide']
let displayValue = '0';
let storedEntries = [0]


document.getElementById('buttons').addEventListener('click', event => {
    if (event.target.type === "button") eventHandler(event.target.id)
})


function eventHandler(button) {
    console.log('Event handler received button push: ' + button);
    let storedEntry = storedEntries[storedEntries.length -1];

    if (button === 'clear') {
        clear();
    }

    if (operators.includes(button)) {
        console.log('Event handler received the operator: ' + button)

    }
}


function clear() {
    console.log('Entered clear function');
    let displayValue = 0;
    let inputs = [0];
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




