function multiplicationTable1To10(number) {
    for (let i = 1; i <= 10; i++) {
        let result = i * number;
        console.log(`${i} * ${number} = ${result}`);
    }
}

multiplicationTable1To10(8);