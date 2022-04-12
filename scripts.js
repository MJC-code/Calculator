const calculatorDisplay = document.getElementById("calculatorDisplay");

const add = function(a, b) {
    return +a + +b;
}

const subtract = function(a, b) {
    return(+a -+b);
}

const multiply = function(a,b) {
    return (+a * +b);
}

const divide = function(a, b) {
    return (+a / +b);
}

const operate = function(operator, a, b) {
    return operator(a, b);
}



function updateDisplay(keypress) {
    calculatorDisplay.textContent += keypress;
}

const button1 = document.getElementById("1")
button1.addEventListener("click", function() {
    updateDisplay('1');
})

const button2 = document.getElementById("2")
button2.addEventListener("click", function() {
    updateDisplay('2');
})

const buttonEquals = document.getElementById("equals")
buttonEquals.addEventListener("click", function() {
    updateDisplay('=');
})

const buttonPlus = document.getElementById("plus")
buttonPlus.addEventListener("click", function() {
    updateDisplay('+');
})



