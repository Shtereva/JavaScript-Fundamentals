function roundNumbers(numbers){
    let numberToString = numbers[0] + '';
    let pointIndex = numberToString.indexOf('.');
    let digitsAfterPoint = numberToString.length - pointIndex - 1;

    let num1 = +numbers[0];
    let num2 = Math.min(15, +numbers[1]);

    console.log(num1.toFixed(num2 > digitsAfterPoint ? digitsAfterPoint : num2));
}

roundNumbers([10.5, 3]);