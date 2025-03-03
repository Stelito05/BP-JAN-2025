function reportSystem(input) {
    let index = 0;
    let neededMoney = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let payingsCount = 0;
    let payingWithCardSum = 0;
    let payingCashSum = 0;
    let cardsCount = 0;
    let cashCount = 0;
    let totalSum = 0;

    while (command !== "End") {
        let price = Number(command);
        payingsCount++;

        if (payingsCount % 2 === 0) {
            if (price < 10) {
                console.log("Error in transaction!");
            } else {
                payingWithCardSum += price;
                cardsCount++;
                totalSum += price;
                console.log("Product sold!");
            }
        } else {
            if (price > 100) {
                console.log("Error in transaction!");
            } else {
                payingCashSum += price;
                cashCount++;
                totalSum += price;
                console.log("Product sold!");
            }
        }

        if (totalSum >= neededMoney) {
            let avgCash = payingCashSum / cashCount;
            let avgCards = payingWithCardSum / cardsCount;

            console.log(`Average CS: ${avgCash.toFixed(2)}`);
            console.log(`Average CC: ${avgCards.toFixed(2)}`);
            break;
        }

        command = input[index];
        index++;
    }

    if (command === "End") {
        console.log("Failed to collect required money for charity.");
    }
}

reportSystem([
    "600",
    "86",
    "150",
    "98",
    "227",
    "End"
]);