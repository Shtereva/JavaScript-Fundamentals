function extract(input) {
    let text = input;

    if (!text) {
        console.log('');
        return;
    }
    let pattern = new RegExp(/(\(((.*?))\))/gm);

    let result = text.match(pattern);

    if (!result) {
        console.log('');
        return;
    }
    console.log(result
        .map(r => r
            .replace('(', '')
            .replace(')', ''))
        .join(', ')
    );
}

extract('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');
