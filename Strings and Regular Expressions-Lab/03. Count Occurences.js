function countOccurences(target, text){
    let pattern = new RegExp(target, 'g');

    let count = text.match(pattern);

    console.log(count ? count.length : 0);
}

countOccurences('the', 'The quick brown fox jumps over the lay dog.');
countOccurences('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.');
