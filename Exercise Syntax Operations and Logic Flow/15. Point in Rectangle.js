function pointOfRectangle(input){
    let[x, y, xMin, xMax, yMin, yMax] = input;

let result = 'outside';

    if((xMin <= x && x <= xMax) && (yMin <= y && y <= yMax)){
        result = 'inside';
    }

    console.log(result);
}

pointOfRectangle([8, -1, 2, 12, -3, 3]);