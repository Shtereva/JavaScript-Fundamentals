function bill(input){
    let text = input.slice(0);
    let items = [];
    let total = 0;

    for (let i = 0; i < text.length; i += 2) {
        let products = text[i].match(/[a-zA-Z]+/gm);
        let price = text[i + 1].match(/\d+\.?\d*/gm);

        if (products && price) {
            items.push(products.join(' '));
            total += +price[0];
        }
    }

    console.log(`You purchased ${items.join(', ')} for a total sum of ${total}`);
}

bill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);
bill(['Cola', '1.35', 'Pancakes', '2.88']);