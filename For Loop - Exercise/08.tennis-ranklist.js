function tennisRanklist(array) {
    let gameCount = Number(array[0]);
    let startPoints = Number(array[1]);
    let winsCount = 0;
    let gamePoints = 0;

    for (let i = 2; i < array.length; i++) {
        switch(array[i]) {
            case "W": gamePoints += 2000; winsCount++; break;
            case "F": gamePoints += 1200; break;
            case "SF": gamePoints += 720; break;
        }
    }
    
    let winsPercentage = (winsCount / gameCount) * 100;
    let averagePoints = gamePoints / gameCount;
    gamePoints += startPoints;

    console.log(`Final points: ${gamePoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${winsPercentage.toFixed(2)}%`);
}

tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);