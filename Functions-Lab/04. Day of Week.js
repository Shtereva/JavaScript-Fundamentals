function dayOfWeek(day){
    switch(day.toLowerCase()){
        case 'Monday'.toLowerCase():
        return 1;
        case 'Tuesday'.toLowerCase():
        return 2;
        case 'Wednesday'.toLowerCase():
        return 3;
        case 'Thursday'.toLowerCase():
        return 4;
        case 'Friday'.toLowerCase():
        return 5;
        case 'Saturday'.toLowerCase():
        return 6;
        case 'Sunday'.toLowerCase():
        return 7;
        default:
        return 'error';
    }
}

console.log(dayOfWeek('Friday'.toLowerCase()));