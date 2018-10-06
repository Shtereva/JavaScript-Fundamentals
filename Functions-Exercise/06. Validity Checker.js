function distanceBetweenPoints(numbers) {
    let [x1, y1, x2, y2] = numbers;

    let calculate = function calc(x1, y1, x2, y2) {
        let part1 = Math.pow(x2 - x1, 2);
        let part2 = Math.pow(y2 - y1, 2);

        return Number.isInteger(Math.sqrt(part1 + part2));
    };

    let result = (x1, x2, y1, y2) => `{${x1}, ${x2}} to {${y1}, ${y2}} is`;

    console.log(calculate(x1, y1, 0, 0) ? `${result(x1, y1, 0, 0)} valid` : `${result(x1, y1, 0, 0)} invalid`);
    console.log(calculate(x2, y2, 0, 0) ? `${result(x2, y2, 0, 0)} valid` : `${result(x2, y2, 0, 0)} invalid`);
    console.log(calculate(x1, y1, x2, y2) ? `${result(x1, y1, x2, y2)} valid` : `${result(x1, y1, x2, y2)} invalid`);
}

distanceBetweenPoints([3, 0, 0, 4]);
distanceBetweenPoints([2, 1, 1, 1]);