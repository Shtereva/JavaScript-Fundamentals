function figureOfSquares(n) {
    let lines = n % 2 !== 0 ? n : n - 1;
    let vertDashes = lines - 3;
    let dashes = n - 2;
    let spaceChar = ' ';
    let dashChar = '-';

    let square = `+${dashChar.repeat(dashes)}+${dashChar.repeat(dashes)}+\n`;

    for (let row = 1; row < lines; row++) {

        for (let col = 0; col < vertDashes / 2; col++) {
            square += `|${spaceChar.repeat(dashes)}|${spaceChar.repeat(dashes)}|\n`;
            row++;
        }

        square += `+${dashChar.repeat(dashes)}+${dashChar.repeat(dashes)}+\n`;
    }
    console.log(square);
}

figureOfSquares(7);