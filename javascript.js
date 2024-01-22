const operators = {
    add: "add",
    soustract: " soustract",
    divide: "divide",
    multiply: "multiply",
    sqrt: "sqrt",
}
const formatERROR = "formatERROR"


let numberA;
let numberB;
let operator;
let displayText = "";

const btnNumbers = document.querySelectorAll(".numberBtn");
const displayZone = document.querySelector("#display");
const btnMultiply = document.querySelector("#multiply");
const btnDivide = document.querySelector("#divide");
const btnSoustract = document.querySelector("#divide");
const btnAdd = document.querySelector("#add");
const btnSqrt = document.querySelector("#sqrt")
const btnDot = document.querySelector("#dot")
const btnBack = document.querySelector("#back")
const btnClear = document.querySelector("#clear");

for (button of btnNumbers) {

    button.addEventListener("click", (e) => { pressNumber(e) })
}

function pressNumber(e) {
    displayText += e.target.textContent;
    console.log(displayText);
    updateDisplay(displayText)
}
function updateDisplay(displayText) {
    displayZone.textContent = displayText;
}
function add(a, b) {
    return a + b;
}
function soustract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        return formatERROR;
    }
    else {
        return a / b;
    }
}
function multiply(a, b) {
    return a * b;
}
function sqrt(a) {
    if (a < 0) {
        return formatERROR;
    }
    else {
        return Math.sqrt(a);
    }
}

function operate(a, b, operator) {
    let result;
    switch (operator) {
        case operators.add:
            result = add(a, b);
            break;
        case operators.soustract:
            result = soustract(a, b);
            break;
        case operators.multiply:
            result = multiply(a, b);
            break;
        case operators.divide:
            result = divide(a, b);
            break;
        case operators.sqrt:
            result = sqrt(a);
            break;
    }

}