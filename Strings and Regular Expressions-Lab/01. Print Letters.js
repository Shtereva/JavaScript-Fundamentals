function printLetters(input){
    let result = Array.from(input);

    result
    .map((l, i) => `str[${i}] -> ${l}`)
    .forEach(l => console.log(l));
}

printLetters('Hello, World!');
printLetters('SoftUni');