function moneyToyShop(vacationPrice, puzzlesCount, dollsCount, teddyBearsCount, minionsCount, trucksCount) {
    let soldToysPrice = (puzzlesCount * 2.60) + (dollsCount * 3) + (teddyBearsCount * 4.10) + (minionsCount * 8.20) + (trucksCount * 2);
    let soldToysCount = puzzlesCount + dollsCount + teddyBearsCount + minionsCount + trucksCount;

    if (soldToysCount >= 50) {
        soldToysPrice -= 0.25 * soldToysPrice;
    }
    let moneyLeftAfterRent = soldToysPrice - (0.1 * soldToysPrice)
    // let moneyDiff = Math.abs(moneyLeftAfterRent - vacationPrice);
    
    if (vacationPrice <= moneyLeftAfterRent) {
        console.log(`Yes! ${(moneyLeftAfterRent - vacationPrice).toFixed(2)} lv left.`);  
    } else {
        console.log(`Not enough money! ${(vacationPrice - moneyLeftAfterRent).toFixed(2)} lv needed.`);
    }
}

moneyToyShop(320, 8, 2, 5, 5, 1);