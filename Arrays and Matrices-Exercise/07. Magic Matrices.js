function magicMatrices(input) {
    let matrix = input
        .map((x) => x.slice(0))
        .slice(0);

    let rows = matrix
        .map((r) => r
            .reduce((acc, cur) => acc + cur, 0));

    let rowResult = rows
        .every(x => x === rows[0]);


    let colResult = true;

    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;

        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }

        if (colSum !== rows[0]) {
            colResult = false;
            break;
        }
    }

    return rowResult && colResult;
}

console.log(magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]));
console.log(magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));
console.log(magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]));