function fruitOrVegetable(product) {
    let result = '';

    switch (product) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
        case 'peach':
            result = 'fruit';
            break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'onion':
        case 'garlic':
        case 'parsley':
            result = 'vegetable';
            break;
        default:
            result = 'unknown';
            break;
    }

    console.log(result);
}

fruitOrVegetable('pizza');