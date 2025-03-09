function matchTickets(budget, category, peopleCount) {
    let moneySpend = 0;
    if (peopleCount >= 1 && peopleCount <= 4) {
        moneySpend = 0.75 * budget;
    } else if (peopleCount <= 9) {
        moneySpend = 0.6 * budget;
    } else if (peopleCount <= 24) {
        moneySpend = 0.5 * budget;
    } else if (peopleCount <= 49) {
        moneySpend = 0.4 * budget;
    } else if (peopleCount >= 50) {
        moneySpend = 0.25 * budget;
    }

    if (category == 'VIP') {
        moneySpend += 499.99 * peopleCount;
    } else if (category === 'Normal') {
        moneySpend += 249.99 * peopleCount;
    }

    let moneyDiff = Math.abs(budget - moneySpend);
    if (moneySpend <= budget) {
        console.log(`Yes! You have ${moneyDiff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${moneyDiff.toFixed(2)} leva.`);
    }
}

matchTickets(30000, 'VIP', 49);