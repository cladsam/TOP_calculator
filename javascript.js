const operators = {
    add: "+",
    soustract: "-",
    divide: "/",
    multiply: "*",
    sqrt: "&radic",
    equal: "=",
    sign: "+/-",
}
const formatERROR = "formatERROR"


let numberA = 0;
let numberB = null;
let operator = null;
let displayText = "0";
// let firstNumberEntered = false;

const btnNumbers = document.querySelectorAll(".numberBtn");
const btnOperators = document.querySelectorAll(".operatorBtn");
// const btnMultiply = document.querySelector("#multiply");
// const btnDivide = document.querySelector("#divide");
// const btnSoustract = document.querySelector("#divide");
// const btnAdd = document.querySelector("#add");
// const btnSqrt = document.querySelector("#sqrt")
// const btnDot = document.querySelector("#dot")
const displayZone = document.querySelector("#display");
const btnBack = document.querySelector("#back")
const btnClear = document.querySelector("#clear");

for (button of btnNumbers) {

    button.addEventListener("click", (e) => { pressNumber(e) })
}
for (button of btnOperators) {
    button.addEventListener("click", (e) => { pressOperator(e) })
}

function pressOperator(e) {
    console.log(e.target.textContent);
    let choosedOperator;
    choosedOperator = e.target.textContent;
    // on saisit un opérateur après 1 nombre
    if (operator === null) {
        operator = choosedOperator;
        // firstNumberEntered = true
        numberA = displayText;


    }
    else {
        if (choosedOperator === operators.equal) {
            if (numberB) {
                let result = operate(numberA, numberB, operator);
                updateDisplay(result);
            }
        }
        else if (choosedOperator === operators.sqrt) {
            console.log("Let see that one a bit later")
        }
        else {

        }
    }

}
btnClear.addEventListener("click", (e) => { initAll(e) })


function initAll(e) {
    numberA = 0;
    displayText = numberA;
    numberB = null;
    operator = null;
    updateDisplay(displayText);

}


function pressNumber(e) {
    if (operator && numberB === null) {
        displayText = e.target.textContent;
        numberB = displayText;
    }
    else if (displayText === "0") {
        displayText = e.target.textContent
    }
    else {
        displayText += e.target.textContent;
        if (numberB) {
            numberB = displayText;
        }
    }
    console.log(displayText);
    updateDisplay(displayText);
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
    return result;
}
// TODO: add handle dot button
// todo: add second press on dot button
// todo: add handle negative sign