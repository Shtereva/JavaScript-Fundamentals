function rotate(input){
    let rotations = +input.pop();
    let elements = input.slice(0);
    let result = [];

    for (let i = 0; i < elements.length ; i++) {
        let index = (i + rotations) % elements.length;
        result[index] = elements[i];
    }

    console.log(result.join(' '));
}

rotate(['1', '2', '3', '4', '2']);
rotate(['Banana', 'Orange', 'Coconut', 'Apple', 15]);