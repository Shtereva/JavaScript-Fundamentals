function binaryLogarithm(numbers){
    for (let number of numbers) {
        console.log(Math.log2(number));
    }
}

binaryLogarithm([1024, 1048576, 256, 1, 2]);