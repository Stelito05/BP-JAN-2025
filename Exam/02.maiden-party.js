function maidenParty(maidenPartyPrice, loveMessagesCount, waxRosesCount, keychainsCount, caricaturesCount, luckySurprisesCount) {
    let totalPrice = (loveMessagesCount * 0.6) + (waxRosesCount * 7.2) + (keychainsCount * 3.6) + (caricaturesCount * 18.2) + (luckySurprisesCount * 22);
    let itemsCount = loveMessagesCount + waxRosesCount + keychainsCount + caricaturesCount + luckySurprisesCount;

    if (itemsCount >= 25) {
        totalPrice *= 0.65;
    }

    totalPrice *= 0.9;

    let moneyDiff = Math.abs(totalPrice - maidenPartyPrice);
    if (totalPrice >= maidenPartyPrice) {
        console.log(`Yes! ${moneyDiff.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${moneyDiff.toFixed(2)} lv needed.`);
    }
}

maidenParty(320, 8, 2, 5, 5, 1);