function smallestElements(input){
    let numbers = input.slice(0);

    numbers = numbers.sort((a ,b) => a - b);

    console.log(numbers.slice(0, 2).join(' '));
}

smallestElements([30, 15, 50, 5]);
smallestElements([3, 0, 10, 4, 7, 3]);