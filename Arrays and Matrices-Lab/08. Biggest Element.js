function biggestElement(input){
    let numbers = input
    .slice(0)
    .map((n) => n.sort((a, b) => b - a)[0])
    .sort((a, b) => b - a);

    console.log(numbers[0]);
}

biggestElement([[20, 50, 10], [8, 33, 145]]);
biggestElement([[3, 5, 7, 12],  [-1, 4, 33, 2], [8, 3, 0, 4]]);
