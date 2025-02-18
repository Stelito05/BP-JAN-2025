function examPreparation(input) {
    let index = 0;
    let badGradesCount = 0;
    let gradesCount = 0;
    let gradesSum = 0;
    let taskName = "";
    let isTerminated = false;

    let maxBadGradesCount = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    
    while(command !== "Enough") {
        taskName = command;
        let grade = Number(input[index]);
        index++;

        if (grade <= 4) {
            badGradesCount++;
            
            if (badGradesCount === maxBadGradesCount) {
                isTerminated = true;
                console.log(`You need a break, ${badGradesCount} poor grades.`);
                break;
            }
        }

        gradesCount++;
        gradesSum += grade;

        command = input[index];
        index++;
    }

    if (!isTerminated) {
        let avg = (gradesSum / gradesCount).toFixed(2);
        console.log("Average score: " + avg);
        console.log("Number of problems: " + gradesCount);
        console.log("Last problem: " + taskName);
    }
}

examPreparation([
    "2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"
]);