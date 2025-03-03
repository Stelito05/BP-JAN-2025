function averageNumber(input) {
    let index = 0;
    let numCount = Number(input[index]);
    index++;
    let sum = 0;

    for (let number = 1; number <= numCount; number++) {
        let currentNum = Number(input[index]);
        index++;

        sum += currentNum;
    }

    let avrSum = sum / numCount;
    console.log(avrSum.toFixed(2));
}

averageNumber([
    "4",
    "95",
    "23",
    "76",
    "23"
]);