function goldMine(input) {
    let index = 0;
    let locationsCount = Number(input[index]);
    index++;

    for (let currentLocation = 1; currentLocation <= locationsCount; currentLocation++) {
        let avgGold = 0;

        let expectedAvgAmountGold = Number(input[index]);
        index++;
        let daysCount = Number(input[index]);
        index++;

        for (let currentDay = 1; currentDay <= daysCount; currentDay++) {
            let goldPerDay = Number(input[index]);
            index++;

            avgGold += goldPerDay;
        }
        avgGold /= daysCount;

        if (avgGold >= expectedAvgAmountGold) {
            console.log(`Good job! Average gold per day: ${avgGold.toFixed(2)}.`);
        } else {
            console.log(`You need ${(expectedAvgAmountGold - avgGold).toFixed(2)} gold.`);
        }
    }
}

goldMine([
    "1",
    "5",
    "3",
    "10",
    "1",
    "3"
]);