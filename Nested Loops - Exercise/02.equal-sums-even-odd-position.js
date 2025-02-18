function equalSumsEvenOddPosition(firstNumber, secondNumber) {
    let buff = "";
    for (let i = firstNumber; i <= secondNumber; i++) {
        let currentNumber = "" + i;
        let sumEven = 0;
        let sumOdd = 0;

        for (let j = 0; j < currentNumber.length; j++) {
            let currentDigit = Number(currentNumber[j]);
            if (j % 2 === 0) {
                sumEven += currentDigit;
            } else {
                sumOdd += currentDigit;
            }
        }
        if (sumEven === sumOdd) {
            buff += `${i} `;
        }
    }
    console.log(buff);
}

equalSumsEvenOddPosition(123456, 124000);