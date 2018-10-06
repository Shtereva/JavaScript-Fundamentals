function insideVolume(numbers) {
    for (let i = 0; i < numbers.length; i += 3) {
        let x = numbers[i];
        let y = numbers[i + 1];
        let z = numbers[i + 2];

        if (isInside(x, y, z)) {
            console.log('inside');
        } else {
            console.log('outside');
        }
    }

    function isInside(x, y, z) {
        let [x1, y1, z1] = [10, 20, 15];
        let [x2, y2, z2] = [50, 80, 50];
    
        if (x >= x1 && x <= x2) {
            if (y >= y1 && y <= y2) {
                if (z >= z1 && z <= z2) {
                    return true;
                }
            }
        }
        
        return false;
    }
}



insideVolume([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43]
    );