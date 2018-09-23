function isNumberPrime(number) {
let result = number === 0 || number === 1 || number < 0 ? false : true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
         if (number % i === 0) {
             result = false;
             break;
         } 
    }

    console.log(result);
}

isNumberPrime(-5);