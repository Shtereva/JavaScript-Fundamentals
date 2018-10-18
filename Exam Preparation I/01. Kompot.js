function collectFruits(input) {
    const desiredFruits = {
        'peach': (2.5 * 140) / 1000,
        'plum': (10 * 20) / 1000,
        'cherry': (25 * 9) / 1000
    };

    let fruits = input
        .map(x => x.split(/\s+/g))
        .reduce((acc, cur) => {
            for (let i = 0; i < acc.length; i++) {
                if (acc[i].fruit === cur[0]) {
                    acc[i].kilos += +cur[1];

                    return acc;
                }
            }

            acc.push({
                fruit: cur[0],
                kilos: +cur[1]
            });

            return acc;
        }, []);


    let fruitsForJuice = fruits
        .filter(f => Object.keys(desiredFruits).includes(f.fruit));

    let keys = Object.keys(desiredFruits);

    for (let i = 0; i < 3; i++) {

        if (!fruitsForJuice.some(f => f.fruit === keys[i])) {
            fruitsForJuice.push({
                fruit: keys[i],
                kilos: 0
            });
        }
    }


    let otherFruits = fruits
        .filter(f => !Object.keys(desiredFruits).includes(f.fruit))
        .reduce((acc, cur) => acc + cur.kilos, 0);

    fruitsForJuice
        .sort((a, b) => a.fruit.localeCompare(b.fruit))
        .forEach(f => {
            let letter = f.fruit.substr(0, 1).toUpperCase();
            let word = letter + f.fruit.substr(1);

            let total = f.kilos / desiredFruits[f.fruit];
            console.log(`${word} kompots: ${Math.floor(total.toFixed(2))}`);
        });

    let liters = otherFruits * 0.2;

    console.log(`Rakiya liters: ${liters.toFixed(2)}`);
}

collectFruits(['cherry 1.2',
    'peach 2.2',
    'plum 5.2',
    'peach 0.1',
    'cherry 0.2',
    'cherry 5.0',
    'plum 10',
    'cherry 20.0',
    'papaya 20'
]);

// collectFruits([
//     'apple 6',
//     'peach 25.158     ',
//     'strawberry 0.200',
//     'peach 0.1',
//     'banana 1.55',
//     'cherry 20.5',
//     'banana 16.8',
//     'grapes 205.65',
//     'watermelon 20.54']);