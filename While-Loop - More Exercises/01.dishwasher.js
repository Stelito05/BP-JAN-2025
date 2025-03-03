function dishwasher(input) {
    let index = 0;
    let detergentCount = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let detergentAmount = 750 * detergentCount;
    let loadingsCount = 0;
    let isEnough = true;
    let platesCount = 0;
    let potsCount = 0;

    while (command !== 'End') {
        let dishesCount = Number(command);
        loadingsCount++;
        if (loadingsCount % 3 === 0) {
            detergentAmount -= 15 * dishesCount;
            potsCount += dishesCount;
        } else {
            detergentAmount -= 5 * dishesCount;
            platesCount += dishesCount;
        }

        if (detergentAmount < 0) {
            isEnough = false;
            console.log(`Not enough detergent, ${Math.abs(detergentAmount)} ml. more necessary!`);
            break;
        }

        command = input[index];
        index++;
    }

    if (isEnough) {
        console.log('Detergent was enough!');
        console.log(`${platesCount} dishes and ${potsCount} pots were washed.`);
        console.log(`Leftover detergent ${detergentAmount} ml.`);
    }
}

dishwasher([
    "1",
    "10",
    "15",
    "10",
    "12",
    "13",
    "30"
]);