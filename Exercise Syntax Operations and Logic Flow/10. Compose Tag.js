function composeTag(elements){
    let fileLocation = elements[0];
    let altText = elements[1];

    console.log(`<img src="${fileLocation}" alt="${altText}">`);
}

composeTag(['smiley.gif', 'Smiley Face']);