function exam(input) {
    let index = 0;
    let studentsCount = Number(input[index]);
    index++;

    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    let totalGrades = 0;

    for (let grade = 1; grade <= studentsCount; grade++) {
        let currentGrade = Number(input[index]);
        index++;
        totalGrades += currentGrade;

        if (currentGrade >= 2 && currentGrade < 3) {
            group4++;
        } else if (currentGrade < 4) {
            group3++;
        } else if (currentGrade < 5) {
            group2++;
        } else {
            group1++;
        }
    }

    let pGroup1 = (group1 / studentsCount) * 100.;
    let pGroup2 = (group2 / studentsCount) * 100;
    let pGroup3 = (group3 / studentsCount) * 100;
    let pGroup4 = (group4 / studentsCount) * 100;
    let avgGrade = totalGrades / studentsCount;

    console.log(`Top students: ${pGroup1.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${pGroup2.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${pGroup3.toFixed(2)}%`);
    console.log(`Fail: ${pGroup4.toFixed(2)}%`);
    console.log(`Average: ${avgGrade.toFixed(2)}`);
}

exam([
    "6",
    "2",
    "3",
    "4",
    "5",
    "6",
    "2.2"
]);