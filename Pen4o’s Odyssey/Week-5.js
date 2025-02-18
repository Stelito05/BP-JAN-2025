function secretWell(tartgetVolume, input) {
    let totalWaterVolume = 0;
    let index = 0;

    while (totalWaterVolume !== tartgetVolume) {
        let waterVolume = input[index];
        index++;
        totalWaterVolume += waterVolume;
        
        if (waterVolume < 0) {
            console.log("Failure! The well has been sealed.");
            break;
        } else if (totalWaterVolume > tartgetVolume) {
            console.log("Overflow! The well rejects your offering.");
            break;
        }  
    }

    if (totalWaterVolume === tartgetVolume) {
        console.log("Success! The well reveals its precious treasure!");
    }
}

secretWell(50, [30, 40]);