function print(input) {
    let steps = +input.pop();
    let arr = input.slice(0);
    let indexes = [];

    for (let i = 0; i < arr.length; i += steps) {
        indexes.push(i);
    }

    arr
    .filter((e, i) => indexes.includes(i))
    .forEach( e => console.log(e));
}

print(['5', '20', '31', '4', '20', '2']);
print(['dsa','asd', 'test', 'tset', '2']);
print(['1', '2','3', '4', '5', '6']);