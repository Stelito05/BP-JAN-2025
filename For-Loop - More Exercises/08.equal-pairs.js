function equalPairs(input) {
    let index = 0;
    let pairsCount = Number(input[index]);
    index++;

    let sum = 0;
    let difference = 0;
    let maxDiff = 0;
    let areEqual = true;

    for (let numCount = 1; numCount <= pairsCount; numCount++) {
        let firstNum = Number(input[index]);
        index++;
        let secondNum = Number(input[index]);
        index++;

        let currentSum = firstNum + secondNum;

        if (numCount === 1) {
            sum = currentSum;
        } else {
            difference = Math.abs(sum - currentSum);
            sum = currentSum
        }

        if (difference > maxDiff) {
            maxDiff = difference;
            areEqual = false;
        }
    }

    if (areEqual === true) {
        console.log(`Yes, value=${sum}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}

equalPairs([
    "2",
    "-1",
    "2",
    "0",
    "-1"
]);