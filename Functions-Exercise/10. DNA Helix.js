function dna(input) {
    let num = input;
    let stars = ['**', '*', '', '*'];
    let dashes = ['', '--', '----', '--'];
    let seqLen = 0;

    let sequence = 'ATCGTTAGGG'.split('');

    for (let i = 0; i < num; i++) {
        if (seqLen >= sequence.length - 1) {
            seqLen = 0;
        }

        console.log(stars[i % 4] + sequence[seqLen] + dashes[i % 4] + sequence[seqLen + 1] + stars[i % 4]);
        seqLen += 2;
    }
}

dna(10);
dna(4);