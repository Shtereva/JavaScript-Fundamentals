function modifyAverage(input) {
    let digits = input.toString().split('');

    let avrg = () => (digits.map(d => +d).reduce((a, b) => a + b, 0)) / digits.length;

    while (avrg() <= 5) {
        digits.push('9');
    }
    
    console.log(digits.join(''));
}

modifyAverage(5835);
modifyAverage(101);