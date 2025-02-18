function maxNumber(input) {
    let index = 0;
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let value = input[index];
    index++;

    while (value !== "Stop") {
        let number = Number(value);

        if (maxNumber < number) {
            maxNumber = number;
        }

        value = input[index];
        index++;
    }
    console.log(maxNumber);
}

maxNumber(["-1", "-2", "Stop"])