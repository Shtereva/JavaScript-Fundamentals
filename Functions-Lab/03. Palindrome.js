function isPalindrom(word) {
    let reversedWord = word.split('').reverse().join('');
    if (word === reversedWord) {
        return true;
    }

    return false;
}

console.log(isPalindrom('abba'));
console.log(isPalindrom('text'));