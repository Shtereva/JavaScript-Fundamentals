function addRemoveElements(input) {
    let elements = input.slice(0);

    let arr = [];
    let num = 0;

    for (let element of elements) {
        num++;
        if (element === 'add') {
            arr.push(num);
            continue;
        }

        arr.pop();
    }


    if (arr.length === 0) {
        console.log('Empty');
        return;
    }

    arr.forEach(e => e ? console.log(e) : "Empty");
}

addRemoveElements(['add', 'add', 'add', 'add']);
addRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addRemoveElements(['remove', 'remove', 'remove']);