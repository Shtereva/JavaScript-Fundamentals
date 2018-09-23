function isNumberOddOrEven(number){
let result = '';

    if (!Number.isInteger(number)) {
        result = 'invalid';
    } else if (number % 2 === 0){
        result = 'even';
    } else {
        result = 'odd';
    }

    console.log(result);
}

isNumberOddOrEven(1.5);