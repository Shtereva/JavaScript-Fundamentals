function colorfulNumbers(number) {
    let html = '<ul>\n';

    for (let i = 1; i <= number; i++) {
        html += i % 2 === 0 ?
            `<li><span style='color:blue'>${i}</span></li>` + '\n' :
            `<li><span style='color:green'>${i}</span></li>` + '\n';
    }

    html += '</ul>';

    return html;
}

console.log(colorfulNumbers(10));