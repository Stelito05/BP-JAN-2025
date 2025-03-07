function safePasswordsGenerator(num1, num2, maxPasswords) {
    let result = '';
    let counter = 0;
    let symbol1 = 35;
    let symbol2 = 64;

    for (let x = 1; x <= num1; x++) {
        for (let y = 1; y <= num2; y++) {
            counter++;
            if (counter > maxPasswords) {
                break;
            }

            if (symbol1 > 55) {
                symbol1 = 35;
            }

            if (symbol2 > 96) {
                symbol2 = 64;
            }
            result += `${String.fromCharCode(symbol1, symbol2)}${x}${y}${String.fromCharCode(symbol2, symbol1)}|`;

            symbol1++;
            symbol2++
        }
    }

    console.log(result);
}

safePasswordsGenerator(20, 50, 10);