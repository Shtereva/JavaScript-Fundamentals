function atm(input) {
    let totalCashInATM = +0;
    let atmBanknotes = [];

    for (let i = 0; i < input.length; i++) {
        let banknotes = input[i]
            .map(b => +b);

        let command = '';

        if (banknotes.length > 2) {
            command = 'insert';
        }

        if (banknotes.length === 2) {
            command = 'withdraw';
        }

        if (banknotes.length === 1) {
            command = 'report';
        }

        switch (command) {
            case 'insert':
                for (let b = 0; b < banknotes.length; b++) {
                    atmBanknotes.push(banknotes[b]);
                }

                let insertedCash = banknotes
                    .reduce((acc, cur) => acc + cur, 0);

                totalCashInATM = atmBanknotes
                    .reduce((acc, cur) => acc + cur, 0);

                console
                    .log(`Service Report: ${insertedCash}$ inserted. Current balance: ${totalCashInATM}$.`);
                break;
            case 'withdraw':
                let currentBalance = banknotes[0];
                let withdraw = banknotes[1];
                totalCashInATM = atmBanknotes
                .reduce((acc, cur) => acc + cur, 0);

                if (currentBalance < withdraw) {
                    console.log(`Not enough money in your account. Account balance: ${currentBalance}$.`);
                } else if (withdraw > totalCashInATM) {
                    console.log(`ATM machine is out of order!`);
                } else {
                    console.log(`You get ${withdraw}$. Account balance: ${currentBalance - withdraw}$. Thank you!`);

                    atmBanknotes = atmBanknotes
                        .sort((a, b) => b - a);

                    for (let i = 0; i < atmBanknotes.length; i++) {
                        if (atmBanknotes[i] <= withdraw) {
                            withdraw -= atmBanknotes[i];
                            atmBanknotes[i] = ' ';
                        }
                    }

                    atmBanknotes = atmBanknotes.filter(b => b !== ' ');
                }
                break;
            case 'report':
                let value = banknotes[0];
                let count = banknotes
                    .filter(x => x === value)
                    .length;

                console.log(`Service Report: Banknotes from ${value}$: ${count}.`);
                break;
            default:
                break;
        }
    }
}

atm([
    [20, 5, 100, 20, 1],
    [457, 25],
    [1],
    [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
    [20, 85],
    [5000, 4500],
]);