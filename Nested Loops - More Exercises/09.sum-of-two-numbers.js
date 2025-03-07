function sumOfTwoNumbers(startNum, endNum, magicNum) {
    let isFound = false;
    let counter = 0;
    let sum = 0;

    for (let i = startNum; i <= endNum; i++) {
        for (let y = startNum; y <= endNum; y++) {
            sum = i + y;
            counter++;
            if (sum === magicNum) {
                isFound = true;
                console.log(`Combination N:${counter} (${i} + ${y} = ${magicNum})`);
                break;
            }
        }

        if (isFound) {
            break;
        }
    }

    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNum}`); 
    } 
}

sumOfTwoNumbers(23, 24, 20);