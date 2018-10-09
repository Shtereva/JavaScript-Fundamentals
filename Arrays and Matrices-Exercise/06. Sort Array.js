function sortElements(input) {
    let elements = input.slice(0);

    elements
        .sort((a, b) => {
            let word1 = a.toLowerCase();
            let word2 = b.toLowerCase();

            return word1.length - word2.length || word1.localeCompare(word2);
        })
        .forEach(e => console.log(e));
}

//sortElements(['alpha', 'beta', 'gamma']);
//sortElements(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortElements(['test', 'Deny', 'omen', 'Default']);