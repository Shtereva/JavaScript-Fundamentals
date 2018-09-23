function trianleArea(s1, s2, s3){
    let semiPerimeter = (s1 + s2 + s3) / 2;
    let tempCalculation = (semiPerimeter - s1) * (semiPerimeter - s2) * (semiPerimeter - s3);

    let area = Math.sqrt(semiPerimeter * tempCalculation);

    console.log(area);
}

trianleArea(2, 3.5, 4);