function coffeMachine(input) {
    let total = 0;

    for (let i = 0; i < input.length; i++) {
        let line = input[i].split(', ');

        let coins = +line[0];
        let drink = line[1];
        let price = +0;
        let sugar = +0;

        if (drink === 'coffee') {
            let type = line[2];
            price = type === 'caffeine' ? +0.8 : +0.9;

            if (Number.isInteger(+line[3])) {
                sugar = line[3];
            } else {
                sugar = line[4];
                price += +((price * 0.1).toFixed(1));
            }

            price += sugar > 0 ? 0.1 : 0;

        } else {
            price = +0.8;

            if (Number.isInteger(+line[2])) {
                sugar = line[2];
            } else {
                sugar = line[3];
                price += +((price * 0.1).toFixed(1));
            }

            price += sugar > 0 ? 0.1 : 0;
        }

        let change = Math.abs(coins - price).toFixed(2);

            if (coins >= price) {
                total += price;

                console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${change}$`);
            } else {
                console.log(`Not enough money for ${drink}. Need ${change}$ more.`);
            }
    }

    console.log(`Income Report: ${total.toFixed(2)}$`);
}

// coffeMachine(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
//     '1.00, coffee, decaf, 0'
// ]);

coffeMachine(['8.00, coffee, decaf, 4',
'1.00, tea, 2']
);