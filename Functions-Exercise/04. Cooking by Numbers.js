function cookingByNumbers(input) {
    
    let operations = input.slice(1);

    function start(input, operations) {
        let number = +input[0];
        for (const operation of operations) {
            switch (operation) {
                case 'chop':
                    number /= 2;
                    break;
                case 'dice':
                number = Math.sqrt(number);
                    break;
                case 'spice':
                number++;
                    break;
                case 'bake':
                number *= 3;
                    break;
                case 'fillet':
                number -= number * 0.2;
                    break;
                default:
                    break;
            }

            console.log(number);
        }
    }

    start(input, operations);
}

cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);