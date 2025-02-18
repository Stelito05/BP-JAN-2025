function uniquePinCodes(maxNumber1, maxNumber2, maxNumber3) {
    for (let firstNum = 1; firstNum <= maxNumber1; firstNum++) {
        for (let secondNum = 2; secondNum <= maxNumber2; secondNum++) {
            for (let thirdNum = 1; thirdNum <= maxNumber3; thirdNum++) {
                if ((firstNum % 2 === 0) && (thirdNum % 2 === 0) && (secondNum !== 4 && secondNum !== 6 && secondNum < 8)) {
                    console.log(`${firstNum} ${secondNum} ${thirdNum}`);
                }
            }
        }
    }
}

uniquePinCodes(8, 2, 8);
