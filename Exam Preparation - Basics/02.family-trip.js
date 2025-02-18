function familyTrip(budget, nightsCount, pricePerNight, pAdditionalCosts) {
    if (nightsCount > 7) {
        pricePerNight *= 0.95;
    }

    let totalPrice = pricePerNight * nightsCount;
    let moneyAdded = (pAdditionalCosts / 100) * budget;
    totalPrice += moneyAdded;

    let moneyDiff = Math.abs(budget - totalPrice);
    if (budget >= totalPrice) {
        console.log(`Ivanovi will be left with ${moneyDiff.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${moneyDiff.toFixed(2)} leva needed.`);
    }
}

familyTrip(500, 7, 66, 15);