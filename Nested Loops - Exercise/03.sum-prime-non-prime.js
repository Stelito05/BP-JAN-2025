function sumPrimeNonPrimeNums(input) {
    let primeSum = 0;
    let nonPrimeSum = 0;
    let index = 0;
    let command = input[index];
    index++;

    while (command !== "stop") {
        let number = Number(command);
        let isPrime = true;

        if (number < 0) {
            console.log("Number is negative.");

            command = input[index];
            index++;

            continue;
        }

        for (let divisor = 2; divisor < number; divisor++) {
            if (number % divisor === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primeSum += number;
        } else {
            nonPrimeSum += number;
        }

        command = input[index];
        index++;
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumPrimeNonPrimeNums(["0", "-9", "0", "stop"]);