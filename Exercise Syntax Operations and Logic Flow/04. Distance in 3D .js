function distanceIn3D(numbers){
    let[x1, y1, z1] = [numbers[0], numbers[1], numbers[2]];
    let[x2, y2, z2] = [numbers[3], numbers[4], numbers[5]];

    let result = ((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2)) + ((z1 - z2) * (z1 - z2));

    console.log(Math.sqrt(result));
}

distanceIn3D([3.5, 0, 1, 0, 2, -1]);