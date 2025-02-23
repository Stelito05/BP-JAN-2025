function christmasGifts(input) {
    let index = 0;
    let command = input[index];
    index++

    let adultsCount = 0;
    let kidsCount = 0;

    while (command !== 'Christmas') {
        let years = Number(command);

        if (years <= 16) {
            kidsCount++;
        } else {
            adultsCount++;
        }

        command = input[index];
        index++;
    }

    let moneyToys = kidsCount * 5;
    let moneySweaters= adultsCount * 15;

    console.log(`Number of adults: ${adultsCount}`);
    console.log(`Number of kids: ${kidsCount}`);
    console.log(`Money for toys: ${moneyToys}`);
    console.log(`Money for sweaters: ${moneySweaters}`);
}

christmasGifts([
    "18",
    "20",
    "48",
    "45",
    "56",
    "37",
    "12",
    "14",
    "Christmas"
]);