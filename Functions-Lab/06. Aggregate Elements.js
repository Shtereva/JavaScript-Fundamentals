function agregateElements(numbers){
    console.log(numbers.reduce((a,b) => a + b, 0));
    console.log(numbers.reduce((a,b) => a + (1 / b), 0));
    console.log(numbers.join(''));
}

agregateElements([1, 2, 3]);