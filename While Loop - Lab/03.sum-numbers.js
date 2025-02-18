function sumNumber(input) {
    let index = 0;
    let sum = 0;

    let firstNumber = Number(input[index]);
    index++;

    while (sum < firstNumber) {
        let currentNnumber = Number(input[index]);
        index++;

        sum += currentNnumber;
    }
    console.log(sum);
}

sumNumber(["20", "1", "2", "3", "4", "5", "6"]);