function diagonalSum(input) {
    let matrix = [];

    for (let i = 0; i < input.length; i++) {
        matrix[i] = [];
        matrix[i] = input[i].split(' ').map((e) => +e);
    }

    let mainDiagonal = matrix
        .map((r, i) => r
            .filter((c, ci) => i === ci)[0])
        .reduce((acc, cur) => acc + cur, 0);

    let secondDiagonal = matrix
        .map((r, i) => r
            .filter((c, ci) => r.length - 1 - i === ci)[0])
        .reduce((acc, cur) => acc + cur, 0);

    if (mainDiagonal === secondDiagonal) {
        matrix = matrix
            .map((r, i) => r.map((c, ci) => {
                if (i !== ci && r.length - 1 - i !== ci) {
                   return  mainDiagonal;
                }

                return c;
            }
            ));
    }

    matrix.forEach(e => console.log(e.join(' ')));
}

diagonalSum(['1 1 1',
    '1 1 1',
    '1 1 0'
]);

diagonalSum(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
);