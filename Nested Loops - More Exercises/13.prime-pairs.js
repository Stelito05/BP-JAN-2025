function primePairs(startNum1, startNum2, diff1, diff2) {
    for (let firstPair = startNum1; firstPair <= startNum1 + diff1; firstPair++) {
        let result1 = '';
        let counter1 = 0;

        for (let num1 = 2; num1 < 10; num1++) {
            if (firstPair % num1 === 0) {
                counter1++;
                break;
            }
        }
        
        if (counter1 === 0) {
            result1 += `${firstPair}`;

            for (let secondPair = startNum2; secondPair <= startNum2 + diff2; secondPair++) {
                let result2 = '';
                let counter2 = 0;

                for (let num2 = 2; num2 < 10; num2++) {
                    if (secondPair % num2 === 0) {
                        counter2++;
                        break;
                    }
                }

                if (counter2 === 0) {
                    result2 += `${secondPair}`;
                    console.log(`${result1}${result2}`);
                }
            }
        }
    }
}

primePairs(10, 30, 9, 6);