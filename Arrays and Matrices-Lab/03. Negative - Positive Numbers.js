function processElements(input) {
    let arr = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            arr.unshift(input[i]);
        } else {
            arr.push(input[i]);
        }
    }

    arr.forEach(e => console.log(e));
}

processElements([7, -2, 8, 9]);
processElements([3, -2, 0, -1]);
