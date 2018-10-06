function roadRadar(input) {

    console.log(isInLimit(input));


    function isInLimit(input) {
        let area = input[1];
        let speed = +input[0];

        switch (area) {
            case 'motorway':
                return speed > 130 ? severity(speed, 130) : '';
            case 'city':
                return speed > 50 ? severity(speed, 50) : '';
            case 'interstate':
                return speed > 90 ? severity(speed, 90) : '';
            case 'residential':
                return speed > 20 ? severity(speed, 20) : '';
            default:
                return '';
        }

        function severity(speed, number) {
            let diff = Math.abs(speed - number);

            if (diff <= 20) {
                return 'speeding';
            } else if (diff > 20 && diff <= 40) {
                return 'excessive speeding';
            } else {
                return 'reckless driving';
            }
        }
    }
}

roadRadar([21, 'residential']);
roadRadar([40, 'city']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);