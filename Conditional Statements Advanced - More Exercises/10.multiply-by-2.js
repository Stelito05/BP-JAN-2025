function multiplyBy2(input) {
    let index = 0;
    let number = Number(input[index]);
    index++;
    let result = 0;

    while (number >= 0) {
        result = number * 2;
        console.log(`Result: ${result.toFixed(2)}`);
        
        number = Number(input[index]);
        index++;
    }

    console.log('Negative number!');
}

multiplyBy2([
    "23.43",
    "12.3245",
    "0",
    "65.23432",
    "23",
    "65",
    "-12"
]);