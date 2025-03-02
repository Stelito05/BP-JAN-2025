function backToThePast(inheritedMoney, year) {
    let yearsOld = 17;

    for (let currentYear = 1800; currentYear <= year; currentYear++) {
        yearsOld++;

        if (currentYear % 2 == 0) {
            inheritedMoney -= 12000;
        } else {
            inheritedMoney -= 12000 + (50 * yearsOld);
        }
    }

    if (inheritedMoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${inheritedMoney.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(inheritedMoney).toFixed(2)} dollars to survive.`);
    }
}

backToThePast(50000, 1802)