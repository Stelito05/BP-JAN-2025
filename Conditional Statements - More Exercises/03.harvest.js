function harvest(area, grapePerMeter2, wineNeeded, workersCount) {
    let totalGrape = area * grapePerMeter2;
    let totalWine = (0.4 * totalGrape) / 2.5;

    let wineDiff = Math.abs(totalWine - wineNeeded)
    if (totalWine >= wineNeeded) {
        let winePerWorker = wineDiff / workersCount;
        console.log(`Good harvest this year! Total wine: ${Math.floor(totalWine)} liters.`);
        console.log(`${Math.ceil(wineDiff)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`);
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(wineDiff)} liters wine needed.`);
    }
}

harvest(1020, 1.5, 425, 4);