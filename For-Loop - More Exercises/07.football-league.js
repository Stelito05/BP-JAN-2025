function footballLeague(input) {
    let index = 0;
    let stadionCapacity = Number(input[index]);
    index++;
    let fansCount = Number(input[index]);
    index++;

    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;


    for (let currentFan = 1; currentFan <= fansCount; currentFan++) {
        let sector = input[index];
        index++;

        switch (sector) {
            case "A": sectorA++; break;
            case "B": sectorB++; break;
            case "V": sectorV++; break;
            case "G": sectorG++; break;
        }
    }

    let sectorAPercent = (sectorA / fansCount) * 100;
    let sectorBPercent = (sectorB / fansCount) * 100;
    let sectorVPercent = (sectorV / fansCount) * 100;
    let sectorGPercent = (sectorG / fansCount) * 100;
    let totalFansPercent = (fansCount / stadionCapacity) * 100;

    console.log(sectorAPercent.toFixed(2) + '%');
    console.log(sectorBPercent.toFixed(2) + '%');
    console.log(sectorVPercent.toFixed(2) + '%');
    console.log(sectorGPercent.toFixed(2) + '%');
    console.log(totalFansPercent.toFixed(2) + '%')
}

footballLeague([
    "76",
    "10",
    "A",
    "V",
    "V",
    "V",
    "G",
    "B",
    "A",
    "V",
    "B",
    "B"
]);