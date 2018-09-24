function convertUnits(number){
    let firstpart = Number.parseInt(number / 12);
    let secondPart = number % 12;

    console.log(`${firstpart}'-${secondPart}"`);
}

convertUnits(11);