function logistics(input) {
    let index = 0;
    let loadsCount = Number(input[index]);
    index++;

    let van = 0;
    let truck = 0;
    let train = 0;
    let total = 0;

    for (let currentLoad = 1; currentLoad <= loadsCount; currentLoad++) {
        let loadWeight = Number(input[index]);
        index++;
        total += loadWeight;

        if (loadWeight <= 3) {
            van += loadWeight;
        } else if (loadWeight <= 11) {
            truck += loadWeight;
        } else {
            train += loadWeight;
        }
    }

    let avgPricePerTone = (van * 200 + truck * 175 + train * 120) / total;
    let vanPercent = (van / total) * 100; 
    let truckPercent = (truck / total) * 100; 
    let trainPercent = (train / total) * 100; 

    console.log(avgPricePerTone.toFixed(2));
    console.log(vanPercent.toFixed(2) + '%');
    console.log(truckPercent.toFixed(2) + '%');
    console.log(trainPercent.toFixed(2) + '%');
}

logistics([
    "5",
    "2",
    "10",
    "20",
    "1",
    "7"
]);