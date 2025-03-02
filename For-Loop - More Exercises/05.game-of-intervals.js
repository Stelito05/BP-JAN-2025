function gameOfIntervals(input) {
    let index = 0;
    let totalMoves = Number(input[index]);
    index++;

    let result = 0;
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    let group5 = 0;
    let group6 = 0;


    for (let currentMove = 1; currentMove <= totalMoves; currentMove++) {
        let stepsCount = Number(input[index]);
        index++;

        if (stepsCount < 0 || stepsCount > 50) {
            result /= 2;
            group6++;
        } else if (stepsCount >= 0 && stepsCount < 10) {
            result += 0.2 * stepsCount;
            group1++;
        } else if (stepsCount < 20) {
            result += 0.3 * stepsCount;
            group2++;
        } else if (stepsCount < 30) {
            result += 0.4 * stepsCount;
            group3++;
        } else if (stepsCount < 40) {
            result += 50
            group4++;
        } else if (stepsCount <= 50) {
            result += 100;
            group5++;
        }
    }

    let group1Percent = (group1 / totalMoves) * 100;
    let group2Percent = (group2 / totalMoves) * 100;
    let group3Percent = (group3 / totalMoves) * 100;
    let group4Percent = (group4 / totalMoves) * 100;
    let group5Percent = (group5 / totalMoves) * 100;
    let group6Percent = (group6 / totalMoves) * 100;

    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${group1Percent.toFixed(2)}%`);
    console.log(`From 10 to 19: ${group2Percent.toFixed(2)}%`);
    console.log(`From 20 to 29: ${group3Percent.toFixed(2)}%`);
    console.log(`From 30 to 39: ${group4Percent.toFixed(2)}%`);
    console.log(`From 40 to 50: ${group5Percent.toFixed(2)}%`);
    console.log(`Invalid numbers: ${group6Percent.toFixed(2)}%`);
}

gameOfIntervals([
    "10",
    "43",
    "57",
    "-12",
    "23",
    "12",
    "0",
    "50",
    "40",
    "30",
    "20"
]);