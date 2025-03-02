function hospital(input) {
    let index = 0;
    let daysCount = Number(input[index]);
    index++;

    let treatedPatients = 0;
    let untreatedPatients = 0;
    let doctorsCount = 7;

    for (let currentDay = 1; currentDay <= daysCount; currentDay++) {
        let patientsCount = Number(input[index]);
        index++;

        if (currentDay % 3 === 0) {
            if (untreatedPatients > treatedPatients)
            doctorsCount++;
        }

        if (patientsCount <= doctorsCount) {
            treatedPatients += patientsCount;
        } else {
            treatedPatients += doctorsCount;
            untreatedPatients += patientsCount - doctorsCount;
        }
    }

    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}

hospital([
    "3",
    "7",
    "7",
    "7"
]);