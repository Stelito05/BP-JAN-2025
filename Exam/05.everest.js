function climbingEverest(input) {
    let index = 0;
    let command = input[index];
    index++;

    let daysCount = 1
    let metersClimbed = 5364;
    
    while (command !== "END") {
        if (command === "Yes") {
            daysCount++;

            if (daysCount > 5) {
                break;
            }
        }

        let meters = Number(input[index]);
        index++;

        metersClimbed += meters;
        if (metersClimbed >= 8848) {
            break;
        }

        command = input[index];
        index++;
    }

    if (metersClimbed >= 8848) {
        console.log(`Goal reached for ${daysCount} days!`);
    } else {
        console.log("Failed!");
        console.log(metersClimbed);
    }
}
    


climbingEverest([
    "Yes",
    "1254",
    "Yes",
    "1402",
    "No",
    "250",
    "Yes",
    "635"
]);