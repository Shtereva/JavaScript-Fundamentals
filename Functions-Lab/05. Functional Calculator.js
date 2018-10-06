function calculator(num1, num2, operator) {
    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let divide = (a, b) => a / b;
    let multiply = (a, b) => a * b;


    switch (operator) {
        case '+':
            return sum(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '/':
            return divide(num1, num2);
        case '*':
            return multiply(num1, num2);
        default:
            break;
    }
}

console.log(calculator(18, -1, '*'));