function print(input){
    let arr = input.slice(0);
    let k = arr[0];
    let numbers = arr.slice(1);

    let firstElements = numbers.slice(0, k);
    let lastElements = numbers.slice(numbers.length - k, numbers.length);

    console.log(firstElements.join(' '));
    console.log(lastElements.join(' '));
}

print([2, 7, 8, 9]);
print([3, 6, 7, 8, 9]);