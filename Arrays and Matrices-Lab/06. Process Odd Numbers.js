function processOddNumbers(input) {
    let numbers = input.slice(0);

    let arr = numbers
        .filter((n, i) => i % 2 !== 0)
        .map((n) => n * 2)
        .reverse();

    console.log(arr.join(' '));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);