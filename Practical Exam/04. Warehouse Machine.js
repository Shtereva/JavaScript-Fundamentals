function warehouseMachine(input) {
    let brands = [];

    for (let i = 0; i < input.length; i++) {
        let line = input[i].split(/,\s+/g);
        let command = line[0];

        let coffeeBrand = line[1];
        let coffeeName = line[2];
        let expireDate = line[3];
        let quantity = +line[4];

        switch (command) {
            case 'IN':
                if (!brands.some(b => b.brand === coffeeBrand)) {
                    let obj = {
                        brand: coffeeBrand,
                        coffee: [{
                            coffeeName,
                            expireDate,
                            quantity
                        }]
                    };

                    brands.push(obj);

                } else {
                    let obj = brands.find(b => b.brand === coffeeBrand);
                    let index = brands.indexOf(obj);

                    if (brands[index].coffee.some(c => c.coffeeName !== coffeeName)) {
                        brands[index].coffee.push({
                            coffeeName,
                            expireDate,
                            quantity
                        });
                    } else {
                        let curCoffee = brands[index].coffee.find(c => c.coffeeName === coffeeName);
                        let coffeeIndex = brands[index].coffee.indexOf(curCoffee);

                        let coffeeObj = brands[index].coffee[coffeeIndex];

                        if (expireDate.localeCompare(coffeeObj.expireDate) === 1) {
                            brands[index].coffee[coffeeIndex].expireDate = expireDate;
                            brands[index].coffee[coffeeIndex].quantity = quantity;
                        } else if (expireDate.localeCompare(coffeeObj.expireDate) === 0) {
                            brands[index].coffee[coffeeIndex].quantity += quantity;
                        }
                    }
                }
                break;
            case 'OUT':
                let obj = brands.find(b => b.brand === coffeeBrand);

                if (!obj) {
                    continue;
                }

                let index = brands.indexOf(obj);
                let curCoffee = brands[index].coffee.find(c => c.coffeeName === coffeeName);

                if (curCoffee) {
                    let coffeeIndex = brands[index].coffee.indexOf(curCoffee);
                    let coffeeObj = brands[index].coffee[coffeeIndex];

                    if (expireDate.localeCompare(coffeeObj.expireDate) === -1 &&
                        brands[index].coffee[coffeeIndex].quantity >= quantity) {
                        brands[index].coffee[coffeeIndex].quantity -= quantity;
                    }
                }
                break;
            case 'INSPECTION':
                console.log('>>>>> INSPECTION! <<<<<');
                brands
                    .sort((a, b) => a.brand.localeCompare(b.brand))
                    .forEach(b => {
                        console.log(`Brand: ${b.brand}:`);
                        b.coffee
                            .sort((a, b) => b.quantity - a.quantity)
                            .forEach(c => {
                                console.log(`-> ${c.coffeeName} -> ${c.expireDate} -> ${c.quantity}.`);
                            });
                    });
                break;
            case 'REPORT':
                console.log('>>>>> REPORT! <<<<<');
                brands
                    .forEach(b => {
                        console.log(`Brand: ${b.brand}:`);
                        b.coffee
                            .forEach(c => {
                                console.log(`-> ${c.coffeeName} -> ${c.expireDate} -> ${c.quantity}.`);
                            });
                    });
                break;
            default:
                break;
        }
    }
}

warehouseMachine([
    "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
    "IN, Folgers, Black Silk, 2023-03-01, 14",
    "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
    "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
    "IN, Folgers, Black Silk, 2022-01-01, 10",
    "IN, Lavazza, Intenso, 2022-07-19, 20",
    "OUT, Dallmayr, Espresso, 2022-07-19, 5",
    "OUT, Dallmayr, Crema, 2022-07-19, 5",
    "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
    "REPORT",
    "INSPECTION",
]);