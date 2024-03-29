const operators = {
    add: "+",
    soustract: "-",
    divide: "/",
    multiply: "*",
    percent: "%",
    equal: "=",
    sign: "+/-",
    dot: '.',

}
const formatERROR = "No way Bro !"
const numberKeys = Array.from({ length: 10 }, (_, i) => String(i));
const operatorKeys = Object.values(operators);

let numberA = 0;
let numberB = null;
let operator = null;
let displayText = "0";
let errorMode = false;
// let firstNumberEntered = false;

const btnNumbers = document.querySelectorAll(".numberBtn");
const btnOperators = document.querySelectorAll(".operatorBtn");
const displayZone = document.querySelector("#display");
const btnBack = document.querySelector("#back")
const btnClear = document.querySelector("#clear");

for (button of btnNumbers) {

    button.addEventListener("click", (e) => { pressNumber(e.target.textContent) })
}
for (button of btnOperators) {
    button.addEventListener("click", (e) => { pressOperator(e.target.textContent) })
}

function pressOperator(choosedOperator) {
    if (errorMode) { return; }

    switch (choosedOperator) {
        case operators.equal:
            if (numberB) {
                let result = operate(Number(numberA), Number(numberB), operator);
                updateDisplay(result);
            }
            break;
        case operators.percent:
            {
                displayText = Number(displayText) / 100;
                if (operator) {
                    numberB = displayText;

                }
                updateDisplay(displayText);

            }
            break;
        case operators.dot:
            if (operator && numberB === null) {
                numberB = `0${operators.dot}`
                displayText = numberB;
                updateDisplay(displayText);
            }
            else if (!displayText.includes(operators.dot)) {
                displayText = `${displayText}${operators.dot}`;
                updateDisplay(displayText);

            }
            break;
        case operators.sign:
            {
                if (displayText.includes(operators.soustract)) {
                    displayText = displayText.replace(operators.soustract, "");
                }
                else {
                    displayText = `${operators.soustract}${displayText}`;
                };
                updateDisplay(displayText);
                break;
            }

        default:
            {
                if (numberA && numberB && operator) {
                    let result = operate(Number(numberA), Number(numberB), operator);
                    numberA = result;
                    updateDisplay(numberA);
                    numberB = null;
                    operator = choosedOperator;
                }
                else if (operator === null) {
                    operator = choosedOperator;
                    numberA = displayText;

                }

            }


    }

}


btnClear.addEventListener("click", (e) => { initAll(e) });
btnBack.addEventListener('click', (e) => { goBack(e) });



function initAll(e) {
    numberA = "0";
    displayText = numberA;
    numberB = null;
    operator = null;
    updateDisplay(displayText);
    errorMode = false;

}
function goBack() {
    if (operator && !numberB) {
        operator = null;
    }
    else {
        if (displayText.length > 1) {
            displayText = displayText.slice(0, -1);
        }
        else if (displayText.length === 1) {
            displayText = "0";
        }

        if (numberB) {
            numberB = displayText
        }
        updateDisplay(displayText)
    }
}


function pressNumber(numberText) {
    if (errorMode) { return; }
    if (operator && numberB === null) {
        displayText = numberText;
        numberB = displayText;
    }
    else if (displayText === "0") {
        displayText = numberText;
    }
    else {
        displayText += numberText;
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
        errorMode = true;
        return formatERROR;
    }
    else {
        return a / b;
    }
}
function multiply(a, b) {
    return a * b;
}
function percent(a) {
    if (a < 0) {
        return formatERROR;
    }
    else {
        return Math.percent(a)
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
        case operators.percent:
            result = percent(a);
            break;

    }
    return result;
};

function addDecimalPoint() {

}
document.addEventListener("keydown", e => { getKeyBoardInput(e) });

function getKeyBoardInput(e) {
    let selectedKey = e.key;
    if (numberKeys.includes(selectedKey)) {
        pressNumber(selectedKey)
    }
    else if (operatorKeys.includes(selectedKey)) {
        // TODO: deal with keyboard operators
        pressOperator(selectedKey)
    }


}
