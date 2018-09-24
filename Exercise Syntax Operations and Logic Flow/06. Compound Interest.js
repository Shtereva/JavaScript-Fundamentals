function calculate(numbers){
    let[principal, interestRate, period, timespan] = [numbers[0], numbers[1], numbers[2], numbers[3]];

    let appliedRatePerYear = 12 /period;
    let rate = interestRate / 100;

    let frequency = principal * Math.pow((1 + (rate / appliedRatePerYear)), (appliedRatePerYear * timespan));

    console.log(frequency.toFixed(2));
}

calculate([100000, 5, 12, 25]);