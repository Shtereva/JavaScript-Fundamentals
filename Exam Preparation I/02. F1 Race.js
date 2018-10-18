function race(input) {
    let pilots = input[0].split(/\s+/gm);

    for (let i = 1; i < input.length; i++) {
        let line = input[i].split(/\s+/gm);

        let action = line[0];
        let pilot = line[1];

        switch (action.toLowerCase()) {
            case 'join':
                if (!pilots.includes(pilot)) {
                    pilots.push(pilot);
                }
                break;
            case 'crash':
                if (pilots.includes(pilot)) {
                    let index = pilots.indexOf(pilot);
                    pilots[index] = ' ';
                    pilots = pilots.filter(x => x !== ' ');
                }
                break;
            case 'pit':
                if (pilots.includes(pilot)) {
                    let index = pilots.indexOf(pilot);
                    if (pilots[index + 1]) {
                        let tempPilot = pilots[index + 1];
                        pilots[index] = tempPilot;
                        pilots[index + 1] = pilot;
                    }
                }
                break;
                case 'overtake':
                if (pilots.includes(pilot)) {
                    let index = pilots.indexOf(pilot);
                    if (pilots[index - 1]) {
                        let tempPilot = pilots[index - 1];
                        pilots[index] = tempPilot;
                        pilots[index - 1] = pilot;
                    }
                }
                break;
            default:
                break;
        }
    }

    console.log(pilots.join(' ~ '));
}


race(["Vetel Hamilton Slavi",
    "Pit Hamilton",
    "Overtake Vetel",
    "Crash Slavi"
]);

race(["Vetel Hamilton Raikonnen Botas Slavi",
"Pit Hamilton",
"Overtake LeClerc",
"Join Ricardo",
"Crash Botas",
"Overtake Ricardo",
"Overtake Ricardo",
"Overtake Ricardo",
"Crash Slavi"]);
