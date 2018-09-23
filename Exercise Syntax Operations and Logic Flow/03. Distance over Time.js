function distanceBetweenObjects(numbers) {
    let v1 = numbers[0] * 1000;
    let v2 = numbers[1] * 1000;
    let seconds = numbers[2];

    let distance1 = v1 * (seconds / 60 / 60);
    let distance2 = v2 * (seconds / 60 / 60);

    console.log(Math.abs(distance1 - distance2));
}

distanceBetweenObjects([5, -5, 40]);