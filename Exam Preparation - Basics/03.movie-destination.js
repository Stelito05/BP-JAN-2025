function movieDestination(budget, destination, season, dayCount) {
    let money = 0;
    switch (destination) {
        case "Dubai":
            if (season === "Winter") {
                money = 45000;
            } else if (season === "Summer") {
                money = 40000;
            }
            money *= dayCount;
            money *= 0.7;
            break;

        case "Sofia":
            if (season === "Winter") {
                money = 17000;
            } else if (season === "Summer") {
                money = 12500;
            }
            money *= dayCount;
            money *= 1.25;
            break;

        case "London":
            if (season === "Winter") {
                money = 24000;
            } else if (season === "Summer") {
                money = 20250;
            }
            money *= dayCount;
            break;
    }

    let moneyDiff = Math.abs(budget - money)
    if (budget >= money) {
        console.log(`The budget for the movie is enough! We have ${moneyDiff.toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${moneyDiff.toFixed(2)} leva more!`);
    }
}

movieDestination(200000, "London", "Summer", 7);