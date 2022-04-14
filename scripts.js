const calculatorDisplay = document.getElementById("calculatorDisplay");


let storedOperand = 0;
let displayValue = 0;
let expectingNewOperand = false;
let operator = null;

const button1 = document.getElementById("1")
button1.addEventListener("click", function () {
    buttonHandler('1');
})

const button2 = document.getElementById("2")
button2.addEventListener("click", function () {
    buttonHandler('2');
})

const button0 = document.getElementById("0")
button0.addEventListener("click", function () {
    buttonHandler('0');
})

const pointButton = document.getElementById("pointButton")
pointButton.addEventListener("click", function () {
    buttonHandler('.');
})

const addButton = document.getElementById("addButton")
addButton.addEventListener("click", function () {
    buttonHandler('add');
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
            console.log('condition reached');
            displayValue = buttonPushed;
        }
        else {
            displayValue += buttonPushed;
        }

    }

    if (buttonPushed === 'add') {
        console.log('Entering add function. Stored operand: ' + storedOperand +' displayValue:' + displayValue);
        expectingNewOperand = true;

        displayValue = add(storedOperand, displayValue)
        storedOperand = displayValue;
       
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

function operate(operator, a, b) {
    return operator(a, b);
}


