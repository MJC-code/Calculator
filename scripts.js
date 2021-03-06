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

document.addEventListener('keydown', (event) => {
    let name = event.key.toLowerCase();
    console.log(`Key pressed ${name}`);
    if (name === "escape") name = "clear";
    if (name === "=" || name == "enter") {
        event.preventDefault();  // override Enter key default behaviour
        console.log(`Received name ${name}`);
        name = "equals";
    }
    if (name === ".") name = "point";
    if (name === "+") name = "add";
    if (name === "-") name = "subtract";
    if (name === "*") name = "multiply";
    if (name === "/") name = "divide";
    eventHandler(name);
  }, false);

function eventHandler(button) {
    if (displayValue === "Error") {clear()}
    if (typeof displayValue === "number") { displayValue = displayValue.toString() }

    if (button === 'backspace') {
        displayValue = displayValue.slice(0, -1);
        if (displayValue === '') displayValue = '0'
        previousKeypress = '';
    }

    if (button === 'clear') {
        clear()
    }

    if (button === 'point') {
        if (operators.includes(previousKeypress)) {displayValue = "0"}
        if (!displayValue.includes('.')) displayValue += '.';
    }

    if (button === 'plusMinus') {
        if (!displayValue.startsWith('-')) {
            if (displayValue.length < displayLengthInDigits) {
                displayValue = '-' + displayValue;
            }
        }
        else {
            displayValue = displayValue.slice(1,);
            previousKeypress = ''
        }
        updateDisplay(displayValue);
        return;
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
            result = operate(displayValue, repeatMemory[1], repeatMemory[0]);
            displayValue = result;
            updateDisplay(result);
            return;
        }
        
        repeatMemory = [displayValue, storedOperator];
        result = operate(storedNumber, storedOperator, displayValue)
        displayValue = result;
        updateDisplay(displayValue)
        previousKeypress = 'equals';
        return;
    }

    if (operators.includes(button)) {
        if (previousKeypress === button) { return }

        if (operators.includes(previousKeypress)) {
            storedOperator = button;
            return;
        }

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
    updateDisplay(displayValue);
}


function updateDisplay(value) {
    if (typeof (value) !== "string") {
        value = value.toString();
    }
    value = value.slice(0, displayLengthInDigits)
    calculatorDisplay.textContent = value;
}

function clear() {
    displayValue = 0;
    storedNumber = '';
    storedOperator = '';
    repeatMemory = [];
    previousKeypress = ''
}

function operate(a, operator, b) {
    let maxDisplayNumber = displayLengthInDigits ** 10 - 1;
    let result = ''
    if (operator === 'add') result = add(a, b);
    if (operator === 'subtract') result = subtract(a, b);
    if (operator === 'multiply') result = multiply(a, b);
    if (operator === 'divide') result = divide(a, b);
    if (Math.abs(result) <= maxDisplayNumber) { return result }
    else { return "Error" }
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




