function specialNumbers(n) {
    let buff = "";
    for (let i = 1111; i <= 9999; i++) {
        let currentNumber = "" + i;
        let divisorCount = 0;

        for (let j = 0; j < currentNumber.length; j++) {
            let currentDigit = Number(currentNumber[j])
            if (n % currentDigit === 0) {
                divisorCount++;
                if (divisorCount === 4) {
                    buff += `${currentNumber} `;
                }
            }
        }
    }
    console.log(buff);
}

specialNumbers(11);