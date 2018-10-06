function treasureChest(numbers) {
    let arr = numbers;

    let checkTreasure = (p1, p2, x1, x2, y1, y2) => {
        return p1 >= x1 && p1 <= x2 && p2 <= y1 && p2 >= y2;
    };

    for (let i = 0; i < arr.length; i += 2) {
        let p1 = arr[i];
        let p2 = arr[i + 1];

        if (checkTreasure(p1, p2, 8, 9, 1, 0)) {
            console.log('Tokelau');
        } else if (checkTreasure(p1, p2, 1, 3, 3, 1)) {
            console.log('Tuvalu');
        } else if (checkTreasure(p1, p2, 5, 7, 6, 3)) {
            console.log('Samoa');
        } else if (checkTreasure(p1, p2, 0, 2, 8, 6)) {
            console.log('Tonga');
        } else if (checkTreasure(p1, p2, 4, 9, 8, 7)) {
            console.log('Cook');
        } else {
            console.log('On the bottom of the ocean');
        }
    }
}

treasureChest([4, 2, 1.5, 6.5, 1, 3]);
treasureChest([6, 4]);

