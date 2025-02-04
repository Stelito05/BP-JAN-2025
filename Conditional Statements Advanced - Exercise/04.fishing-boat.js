function moneyForFishing(budget, season, fishermenCount) {
    boatPrice = 0;
    switch (season) {
        case "Spring": boatPrice = 3000; break;

        case "Summer":
        case "Autumn": boatPrice = 4200; break;
            
        case "Winter": boatPrice = 2600; break;
    }

    if (fishermenCount <= 6) {
        boatPrice *= 0.9 ;
    } else if (fishermenCount <= 11) {
        boatPrice *= 0.85;
    } else {
        boatPrice *= 0.75;
    }

    if (season !== "Autumn" && fishermenCount % 2 === 0) {
        boatPrice *= 0.95;
    }

    let moneyDiff = (Math.abs(budget - boatPrice).toFixed(2));
    if (budget >= boatPrice) {
        console.log(`Yes! You have ${moneyDiff} leva left.`);
    } else {
        console.log(`Not enough money! You need ${moneyDiff} leva.`);
    }
}

moneyForFishing(2000, "Winter", 13);