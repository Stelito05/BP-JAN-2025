function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i])
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers("564891");