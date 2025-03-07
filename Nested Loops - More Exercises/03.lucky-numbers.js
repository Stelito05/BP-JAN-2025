function luckyNumbers(n) {
    let happyNumbers = '';

    for (let first = 1; first < 10; first++) {
        for (let second = 1; second < 10; second++) {
            for (let third = 1; third < 10; third++) {
                for (let fourth = 1; fourth < 10; fourth++) {
                    let sum1 = first + second;
                    let sum2 = third + fourth;
                    if (sum1 === sum2) {
                        if (n % sum1 === 0) {
                            happyNumbers += `${first}${second}${third}${fourth} `
                        }
                    }
                }
            }
        }
    }
    
    console.log(happyNumbers);
}

luckyNumbers(24);