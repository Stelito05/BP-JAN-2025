function worldSwimmingRecord(recordInSeconds, distanceInMetres, secondsPerMeterSwimmed) {
    let swimmingTime = distanceInMetres * secondsPerMeterSwimmed;
    let secondsAdded = (Math.floor(distanceInMetres / 15)) * 12.5;
    let totalTime = swimmingTime + secondsAdded;

    if (totalTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);  
    } else {
        console.log(`No, he failed! He was ${(totalTime - recordInSeconds).toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord(10464, 1500, 20);