function stepsCounter(input) {
    let index = 0;
    let totalSteps = 0;
    let command = input[index];
    index++;

    while (command !== "Going home") {
        let stepsCount = Number(command);
        totalSteps += stepsCount;

        if (totalSteps >= 10000) {
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - 10000} steps over the goal!`);
            break;
        }

        command = input[index];
        index++;
    }

    if(command === "Going home") {
        let stepsToHome = Number(input[index]);
        totalSteps += stepsToHome;

        let stepsDiff = Math.abs(totalSteps - 10000);
        if (totalSteps < 10000) {
            console.log(`${stepsDiff} more steps to reach goal.`);
        } else {
            console.log("Goal reached! Good job!");
            console.log(`${stepsDiff} steps over the goal!`);
        }
    }
}

stepsCounter(["125", "250", "4000", "30", "2678", "4682"]);