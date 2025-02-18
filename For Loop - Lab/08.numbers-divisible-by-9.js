function numbersDivisibleBy9(startNumber, endNumber) {
    let sum = 0;
    let numbers = "";
    for (let i = startNumber; i <= endNumber; i++) {
        if (i % 9 === 0) {
            sum += i;
            numbers += i + "\n";
        }
    }
    console.log("The sum: " + sum);
    console.log(numbers);
}

numbersDivisibleBy9(100, 200);