const operators = {
    add: "add",
    soustract: " soustract",
    divide: "divide",
    multiply: "multiply",
    sqrt: "sqrt",
}
const formatERROR = "formatERROR"


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