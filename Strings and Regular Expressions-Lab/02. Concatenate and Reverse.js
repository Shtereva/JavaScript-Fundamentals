function concatAndRevrse(input){
    let result = input.slice(0);

    let word = result.join('').split('').reverse().join('');

    console.log(word);
} 

concatAndRevrse(['I', 'am', 'student']);
concatAndRevrse(['race', 'car']);