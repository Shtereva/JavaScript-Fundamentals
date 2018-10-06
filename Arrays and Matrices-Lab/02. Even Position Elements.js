function evenPositions(input) {
    let elements = input.slice(0);

    return elements
        .filter((e, i) => i % 2 === 0)
        .join(' ');
}

console.log(evenPositions(['20', '30', '40']));
console.log(evenPositions(['5', '10']));