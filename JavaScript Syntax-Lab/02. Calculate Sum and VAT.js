function calculateVat(numbers){
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    let vat = sum * 0.2;
    let total = sum + vat;

    console.log("sum = " + sum);
    console.log("VAT = " + vat);
    console.log("total = " + total);
}

calculateVat([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);