function quiz(input){
    let result = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';

    for (let i = 0; i < input.length; i += 2) {
        result += `<question>\n${input[i]}\n</question>\n`;
        result += `<answer>\n${input[i + 1]}\n</answer>\n`;
    }

    result += '</quiz>';

    console.log(result);
}

quiz(["Who was the forty-second president of the U.S.A.?",
"William Jefferson Clinton"]
);

quiz(["Dry ice is a frozen form of which gas?",
"Carbon Dioxide",
"What is the brightest star in the night sky?",
"Sirius"]
);