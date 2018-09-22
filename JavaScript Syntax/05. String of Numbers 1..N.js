function numbersSequence(number){
    let result = '';

    for (let i = 1; i <= +number; i++) {
        result += i;       
    }

    console.log(result);
}

numbersSequence('11');