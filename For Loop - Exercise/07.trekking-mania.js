function climbingPeaks(array) {
    let groupsCount = Number(array[0]);
    let peak1 = 0;
    let peak2 = 0;
    let peak3 = 0;
    let peak4 = 0;
    let peak5 = 0;
    let allPeople = 0;

    for (let i = 1; i <= groupsCount; i++) {
        let peopleCount = Number(array[i]);
        allPeople += peopleCount;
        
        if (peopleCount <= 5) {
            peak1 += peopleCount;
        } else if (peopleCount <= 12) {
            peak2 += peopleCount
        } else if (peopleCount <= 25) {
            peak3 += peopleCount;
        } else if (peopleCount <= 40) {
            peak4 += peopleCount;
        } else {
            peak5 += peopleCount;
        }
    }

    let group1 = (peak1 / allPeople) * 100;
    let group2 = (peak2 / allPeople) * 100;
    let group3 = (peak3 / allPeople) * 100;
    let group4 = (peak4 / allPeople) * 100;
    let group5 = (peak5 / allPeople) * 100;

    console.log(`${group1.toFixed(2)}%`);
    console.log(`${group2.toFixed(2)}%`);
    console.log(`${group3.toFixed(2)}%`);
    console.log(`${group4.toFixed(2)}%`);
    console.log(`${group5.toFixed(2)}%`);
}

climbingPeaks([
    "10",
    "10",
    "5",
    "1",
    "100",
    "12", 
    "26", 
    "17",
    "37", 
    "40",
    "78"
]);