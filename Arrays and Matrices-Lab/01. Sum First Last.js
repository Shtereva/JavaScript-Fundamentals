function sumFirstAndLast(numbers){
    let firstNum = +numbers[0] || 0;
    let lastNum = +numbers[numbers.length - 1] || 0;

    return firstNum + lastNum;
}

console.log(sumFirstAndLast(['20', '30', '40']));
console.log(sumFirstAndLast(['5', '10']));