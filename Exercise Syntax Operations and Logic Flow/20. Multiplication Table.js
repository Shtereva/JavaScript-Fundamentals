function multiplicationTable(n){
let html = '<table border="1">\n';

    for (let row = 0; row <= n; row++) {
        for (let col = 0; col <= n; col++) {
            html += '\n';
           if (row === 0 && col === 0) {
               html += '<tr><th>x</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>\n';
           }
        }
    }

}