function graduation(input) {
    let index = 0;
    let allgrades = 0;
    let badGradesCount = 0;
    let isExpelled = false;

    let name = input[index];
    index++;

    let i = 1;
    while(i <= 12) {
        let grade = Number(input[index]);
        index++;

        if (grade < 4) {
            badGradesCount++;
            if (badGradesCount === 2) {
                isExpelled = true;
                console.log(`${name} has been excluded at ${i} grade`);
                break;
            }
            continue;
        }

        allgrades += grade;
        i++;
    }

    if (!isExpelled) {
        console.log(`${name} graduated. Average grade: ${(allgrades / 12).toFixed(2)}`); 
    }
}

graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"]);