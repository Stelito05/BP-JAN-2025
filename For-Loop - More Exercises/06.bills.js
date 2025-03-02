function bills(input) {
    let index = 0;
    let monthsCount = Number(input[index]);
    index++;

    let totalElectricity = 0;
    let totalWater = 0
    let totalInternet = 0;
    let others = 0;

    for (let currentMonth = 1; currentMonth <= monthsCount; currentMonth++) {
        let currentMonthEl = Number(input[index]);
        index++;

        totalElectricity += currentMonthEl;
        totalWater += 20;
        totalInternet += 15;
        others += 0.2 * (currentMonthEl + 20 + 15) + (currentMonthEl + 20 + 15);
    }

    avgExpensesPerMonth = (totalElectricity + totalWater + totalInternet + others) / monthsCount;

    console.log(`Electricity: ${totalElectricity.toFixed(2)} lv`);
    console.log(`Water: ${totalWater.toFixed(2)} lv`);
    console.log(`Internet: ${totalInternet.toFixed(2)} lv`);
    console.log(`Other: ${others.toFixed(2)} lv`);
    console.log(`Average: ${avgExpensesPerMonth.toFixed(2)} lv`);
}

bills([
    "8",
    "123.54",
    "231.54",
    "140.23",
    "100",
    "122.4",
    "430",
    "178.52",
    "64.2"
]);