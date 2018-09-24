function biggestNumber(nums) {
    let num1 = nums[0];
    let num2 = nums[1];
    let num3 = nums[2];

    let result = 0;
    if (num1 > num2 && num1 > num3) {
        result = num1;
    } else if (num2 > num1 && num2 > num3) {
        result = num2;
    } else {
        result = num3;
    }
    
    console.log(result);
}

biggestNumber([5, -2, 7]);