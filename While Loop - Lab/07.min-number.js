function minNumber(input) {
    let index = 0;
    let minNumber = Number.MAX_SAFE_INTEGER;
    let value = input[index];
    index++;

    while (value !== "Stop") {
        let number = Number(value)

        if (number < minNumber) {
            minNumber = number;
        }

        value = input[index];
        index++;
    }
    console.log(minNumber);
}

minNumber(["45", "-20", "7", "99", "Stop"])