function equalElements(input) {
    let elements = input
        .map((x) => x.slice(0))
        .slice(0);

    let pairs = 0;

    for (let row = 0; row < elements.length; row++) {

        for (let col = 0; col < elements[row].length; col++) {
            if (elements[row + 1] && elements[row][col] === elements[row + 1][col]) {
                pairs++;
            }

            if (elements[row][col + 1] && elements[row][col] === elements[row][col + 1]) {
                pairs++;
            }
        }
    }

    return pairs;
}

console.log(equalElements([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]));

console.log(equalElements([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]));

console.log(equalElements([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']
]));