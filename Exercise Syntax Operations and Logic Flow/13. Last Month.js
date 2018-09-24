function lastMonthDay(dateAsNumbers){
    let day = dateAsNumbers[0];
    let month = dateAsNumbers[1];
    let year = dateAsNumbers[2];

    if (month === 1) {
        year--;
        month = 13;
    }
    let date = new Date(year, month - 2, 32);
    
    let days = date.getDate();
    console.log(32 - days);
}

lastMonthDay([13, 10, 2018]);