function nonDescreasingSubSeq(input) {
    let elements = input
        .slice(0)
        .map((n) => +n);

    let biggestNum = elements[0];

    elements
        .filter(e => {
            biggestNum = e >= biggestNum ? e : biggestNum;
            return e >= biggestNum;
        })
        .forEach(e => console.log(e));
}

nonDescreasingSubSeq([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDescreasingSubSeq([1, 2, 3, 4]);
nonDescreasingSubSeq([20, 3, 2, 15, 6, 1]);