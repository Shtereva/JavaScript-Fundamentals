function findSequence(n, k) {
    let previousElCount = +k;
    let sequenceLen = +n;
    let sequnce = [1];

    for (let i = 1; i < sequenceLen; i++) {
        let elements = sequnce.slice(Math.max(0, sequnce.length - previousElCount));
        let nextElement = elements.reduce((a, c) => a + c);

        sequnce.push(nextElement);
    }

    console.log(sequnce.join(' '));
}

findSequence(6, 3);
findSequence(8, 2);