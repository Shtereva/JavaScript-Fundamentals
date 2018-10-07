function diagonalSums(input) {
    let matrix = input
        .map((x) => x.slice(0))
        .slice(0);

    let diagonal1 = 0;
    let diagonal2 = 0;

    for (let row = 0; row < matrix.length; row++) {
        let colLen = matrix[row].length - 1 - row;
        diagonal1 += matrix[row][row];
        diagonal2 += matrix[row][colLen];
    }

    console.log(`${diagonal1} ${diagonal2}`);
}

diagonalSums([
    [20, 40],
    [10, 60]
]);
diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);