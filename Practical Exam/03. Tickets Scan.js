function ticketScan(text, command) {
    let name = text.match(/\s[A-Z][A-Za-z]*-([A-Z][A-Za-z]*\.-){0,1}[A-Z][A-Za-z]*\s/gm);
    let resultName = name[0].replace(/-/g, ' ').trim();

    let airport = text.match(/\s[A-Z]{3}\/[A-Z]{3}\s/gm);
    let ports = airport[0].split('/').map(p => p.trim());

    let flightNumber = text.match(/\s[A-Z]{1,3}\d{1,5}\s/gm);
    let number = flightNumber[0].trim();

    let company = text.match(/-\s[A-Z][a-zA-Z]*\*[A-Z][a-zA-Z]*\s/gm);
    let companyName = company[0].replace(/- /g, '').replace(/\*/g, ' ').trim();

    switch (command) {
        case 'name':
            console.log(`Mr/Ms, ${resultName}, have a nice flight!`);
            break;
        case 'flight':
            console.log(`Your flight number ${number} is from ${ports[0]} to ${ports[1]}.`);
            break;
            case 'company':
                console.log(`Have a nice flight with ${companyName}.`);
            break;
            case 'all':
                console.log(`Mr/Ms, ${resultName}, your flight number ${number} is from ${ports[0]} to ${ports[1]}. Have a nice flight with ${companyName}.`);
            break;
        default:
            break;
    }
}

ticketScan('ahah Second-Testov )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45  STA09:35 ', 'all');

ticketScan(' TEST-T.-TESTOV   SOF/VIE OS806 - Austrian*Airlines T24G55 STD11:15 STA11:50 ', 'flight');