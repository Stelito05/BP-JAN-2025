function carNumber(firstNum, secondNum) {
    let result = '';

    for (let first = firstNum; first <= secondNum; first++) {
        for (let second = firstNum; second <= secondNum; second++) {
            for (let third = firstNum; third <= secondNum; third++) {
                for (let fourth = firstNum; fourth <= secondNum; fourth++) {
                    let sum = second + third;
                    if (((first % 2 === 0) && (fourth % 2 !== 0)) || ((first % 2 !== 0) && (fourth % 2 === 0))) {
                        if ((first > fourth) && (sum % 2 === 0)) {
                            result += `${first}${second}${third}${fourth} `
                        }
                    }
                }
            }
        }
    }

    console.log(result);
}

carNumber(5, 8);