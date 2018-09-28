function multiplicationTable(n) {
    let html = '<table border="1">\n';

    for (let row = 0; row <= n; row++) {
            html += '<tr>';
        for (let col = 0; col <= n; col++) {

            if (row === 0) {
                html += `<th>${col === 0 ? 'x' : col}</th>`;
                continue;
            }

            html += col === 0 ? `<th>${row}</th>` : `<td>${col * row}</td>`;
        }

        html += '</tr>\n';
    }

    html += '</table>';

    console.log(html);
}

multiplicationTable(5);