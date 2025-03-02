function grades(input) {
    let index = 0;
    let studentsCount = Number(input[index]);
    index++;

    let badGradesCount = 0;
    let goodGradesCount = 0;
    let veryGoodGradesCount = 0;
    let excellentGradesCount = 0;
    let totalGrades = 0;

    for (currentStudent = 1; currentStudent <= studentsCount; currentStudent++) {
        let grade = Number(input[index]);
        index++;
        totalGrades += grade;

        if (grade < 3) {
            badGradesCount++;
        } else if (grade < 4) {
            goodGradesCount++;
        } else if (grade < 5) {
            veryGoodGradesCount++;
        } else {
            excellentGradesCount++;
        }
    }

    let badGradesPercent = (badGradesCount / studentsCount) * 100;
    let goodGradesPercent = (goodGradesCount / studentsCount) * 100;
    let veryGoodGradesPercent = (veryGoodGradesCount / studentsCount) * 100;
    let excellentGradesPercent = (excellentGradesCount / studentsCount) * 100;
    let avgGrades = totalGrades / studentsCount;

    console.log(`Top students: ${excellentGradesPercent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${veryGoodGradesPercent.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${goodGradesPercent.toFixed(2)}%`);
    console.log(`Fail: ${badGradesPercent.toFixed(2)}%`);
    console.log(`Average: ${avgGrades.toFixed(2)}`);
}

grades([
    "6",
    "2",
    "3",
    "4",
    "5",
    "6",
    "2.2"
]);