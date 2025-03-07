function uniquePINCodes(num1, num2, num3) {
    let buff = '';

    for (let currentNum1 = 2; currentNum1 <= num1; currentNum1 += 2) {
        for (let currentNum2 = 2; currentNum2 <= num2; currentNum2++) {
            for (let currentNum3 = 2; currentNum3 <= num3; currentNum3 += 2) {
                if (currentNum2 === 2 || currentNum2 === 3 || currentNum2 === 5 || currentNum2 === 7) {
                    buff += `${currentNum1} ${currentNum2} ${currentNum3}\n`;
                }
            }
        }
    }
    console.log(buff);
}

uniquePINCodes(3, 5, 5);