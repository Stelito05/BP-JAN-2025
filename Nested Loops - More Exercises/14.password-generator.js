function passwordGenerator(num1, num2) {
    let result = '';

    for (let symbol1 = 1; symbol1 < num1; symbol1++) {
        for (let symbol2 = 1; symbol2 < num1; symbol2++) {
            for (let symbol3 = 97; symbol3 < 97 + num2; symbol3++) {
                for (let symbol4 = 97; symbol4 < 97 + num2; symbol4++) {
                    for (let symbol5 = 1; symbol5 <= num1; symbol5++) {
                        if (symbol5 > symbol1 && symbol5 > symbol2) {
                            result += `${symbol1}${symbol2}${String.fromCharCode(symbol3)}${String.fromCharCode(symbol4)}${symbol5} `
                        } 
                    }
                }
            }
        }
    }

    console.log(result);
}

passwordGenerator(4, 2);