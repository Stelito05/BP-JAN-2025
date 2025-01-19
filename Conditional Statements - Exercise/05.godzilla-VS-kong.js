function fundingFilm(budget, extrasCount, clothingPricePerExtra) {
    let decorPrice = 0.1 * budget;
    let totalClothingPrice = clothingPricePerExtra * extrasCount;
    if (extrasCount > 150) {
        totalClothingPrice *= 0.9;
    }
    let total = decorPrice + totalClothingPrice;
    let moneyDiff = Math.abs(total - budget);

    if (total > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(moneyDiff).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(moneyDiff).toFixed(2)} leva left.`);
    }
}

fundingFilm(9587.88, 222, 55.68);