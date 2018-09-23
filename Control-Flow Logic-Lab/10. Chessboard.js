function chessBoard(number) {
    let color = '';
    let html = '<div class="chessboard">\n';

    for (let row = 1; row <= number; row++) {
        color = row % 2 !== 0 ? 'black' : 'white';
        html += "<div>\n";
        html += `<span class="${color}"></span>` + '\n';
        for (let column = 2; column <= number; column++) {
            color = color === 'white' ? 'black' : 'white';
            html += `<span class="${color}"></span>` + '\n';
        }

        html += "</div>\n";
    }

    html += "</div>";
    return html;
}

console.log(chessBoard(4));