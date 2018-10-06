function radioCrystals(input) {
    let desiredThickness = input[0];
    let chunks = input.slice(1, input.lenght);

    for (let i = 0; i < chunks.length; i++) {
        let currentChunkAndCount = [chunks[i], 0];

        console.log(`Processing chunk ${chunks[i]} microns`);

        cut(currentChunkAndCount);

        lap(currentChunkAndCount);

        grind(currentChunkAndCount);

        etch(currentChunkAndCount);

        xray(currentChunkAndCount);

        console.log(`Finished crystal ${desiredThickness} microns`);
    }

    function cut(currentChunkAndCount) {
        currentChunkAndCount[1] = 0;

        while (currentChunkAndCount[0] / 4 >= desiredThickness) {
            currentChunkAndCount[0] /= 4;
            currentChunkAndCount[1]++;
        }

        if (currentChunkAndCount[1] === 0) {
            return;
        }

        console.log(`Cut x${currentChunkAndCount[1]}`);
        transportAndWash(currentChunkAndCount[0]);
    }

    function lap(currentChunkAndCount) {
        currentChunkAndCount[1] = 0;

        while (currentChunkAndCount[0] - (currentChunkAndCount[0] * 0.2) >= desiredThickness) {
            currentChunkAndCount[0] -= currentChunkAndCount[0] * 0.2;
            currentChunkAndCount[1]++;
        }

        if (currentChunkAndCount[1] === 0) {
            return;
        }

        console.log(`Lap x${currentChunkAndCount[1]}`);
        transportAndWash(currentChunkAndCount[0]);
    }

    function grind(currentChunkAndCount) {
        currentChunkAndCount[1] = 0;

        while (currentChunkAndCount[0] - 20 >= desiredThickness) {
            currentChunkAndCount[0] -= 20;
            currentChunkAndCount[1]++;
        }

        if (currentChunkAndCount[1] === 0) {
            return;
        }

        console.log(`Grind x${currentChunkAndCount[1]}`);
        transportAndWash(currentChunkAndCount[0]);
    }

    function etch(currentChunkAndCount) {
        currentChunkAndCount[1] = 0;

        while (currentChunkAndCount[0] - 2 >= desiredThickness - 1) {
            currentChunkAndCount[0] -= 2;
            currentChunkAndCount[1]++;
        }

        if (currentChunkAndCount[1] === 0) {
            return;
        }

        console.log(`Etch x${currentChunkAndCount[1]}`);
        transportAndWash(currentChunkAndCount[0]);
    }

    function xray(currentChunkAndCount) {
        currentChunkAndCount[1] = 0;
        if (currentChunkAndCount[0] === desiredThickness - 1) {
            currentChunkAndCount[0] += 1;

            console.log(`X-ray x1`);
        }
    }

    function transportAndWash(currentChunkAndCount) {
        console.log('Transporting and washing');
        currentChunkAndCount[0] = Math.floor(currentChunkAndCount[0]);
    }
}

radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);