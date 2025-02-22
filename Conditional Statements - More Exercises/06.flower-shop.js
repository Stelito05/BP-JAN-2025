function flowerShop(magnoliasCount, hyacinthsCount, rosesCount, cactiCount, giftPrice) {
    let orderPrice = ((magnoliasCount * 3.25) + (hyacinthsCount * 4) + (rosesCount * 3.5) + (cactiCount * 8)) * 0.95;

    let moneyDiff = Math.abs(giftPrice - orderPrice);
    if (orderPrice < giftPrice) {
        console.log(`She will have to borrow ${Math.ceil(moneyDiff)} leva.`);
    } else {
        console.log(`She is left with ${Math.floor(moneyDiff)} leva.`);
    }
}

flowerShop(15, 7, 5, 10, 100)