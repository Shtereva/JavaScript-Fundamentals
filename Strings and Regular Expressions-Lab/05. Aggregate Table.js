function aggregate(input){
    let data = input.slice(0);
    let sum = 0;
    let cities = [];

    for (const line of data) {
        let city = line.match(/[a-zA-Z]+/gm);
        let income = line.match(/\d+/gm);
        
        if (city && income) {
            sum += +income.reduce((a, b) => a + b, 0);
            cities.push(city.join(' '));
        }
    }

    console.log(cities.join(', '));
    console.log(sum);
}

aggregate(['| Sofia           | 300',
'| Veliko Tarnovo  | 500',
'| Yambol          | 275']
);

