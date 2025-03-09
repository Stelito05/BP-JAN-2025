function bikeRace(juniorsCount, seniorsCount, typeRace) {
    let totalCount = juniorsCount + seniorsCount;
    let moneyJuniors = 0;
    let moneySeniors = 0;

    switch (typeRace) {
        case 'trail':
            moneyJuniors = 5.5 * juniorsCount;
            moneySeniors = 7 * seniorsCount;
        break;
        case 'cross-country':
            moneyJuniors = 8 * juniorsCount;
            moneySeniors = 9.5 * seniorsCount;

            if (totalCount >= 50) {
                moneyJuniors *= 0.75;
                moneySeniors *= 0.75;
            }
        break;
        case 'downhill':
            moneyJuniors = 12.25 * juniorsCount;
            moneySeniors = 13.75 * seniorsCount;
        break;
        case 'road':
            moneyJuniors = 20 * juniorsCount;
            moneySeniors = 21.5 * seniorsCount;
        break;
    }

    let giftedMoney = 0.95 * (moneyJuniors + moneySeniors);
    console.log(giftedMoney.toFixed(2));
}

bikeRace(3, 40, 'road')