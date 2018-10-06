function wordsUppercase(text){
    let words = text.match(/([a-zA-z]+)/gm);

    console.log(words.map(x => x.toUpperCase()).filter(w => w !== '').join(', '));
}

wordsUppercase('Hi, how are you?');
