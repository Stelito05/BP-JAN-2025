function sumOfTwoNumbers(startNumber, endNumber, magicNumber) {
    let combinationsCount = 0;
    let isFound = false;
    for (let i = startNumber; i <= endNumber; i++) {
        for (let y = startNumber; y <= endNumber; y++) {
            combinationsCount++;
            let sum = i + y;
            if (sum === magicNumber) {
                isFound = true;
                console.log(`Combination N:${combinationsCount} (${i} + ${y} = ${magicNumber})`);
                break;
            }
        }
        if (isFound) {
            break;
        }
    }

    if (!isFound) {
        console.log(`${combinationsCount} combinations - neither equals ${magicNumber}`);
    }
}

sumOfTwoNumbers(88, 888, 2000);