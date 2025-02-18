function averagePerSumOfGrades(input) {
    let index = 0;
    let allGradesSum = 0;
    let gradesCount = 0;
    let juryCount = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    while (command !== "Finish") {
        let sum = 0;

        for (let i = 1; i <= juryCount; i++) {
            let grade = Number(input[index]);
            index++;
            
            gradesCount++;
            sum += grade;
            allGradesSum += grade;
        }
        
        let averageSum = (sum / juryCount).toFixed(2);
        console.log(`${command} - ${averageSum}.`);

        command = input[index];
        index++;
    }

    let averageAllGradesSum = (allGradesSum / gradesCount).toFixed(2);
    console.log(`Student's final assessment is ${averageAllGradesSum}.`);
}

averagePerSumOfGrades(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]);