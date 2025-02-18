function lillySavings(age, laundryPrice, pricePerToy) {
    let moneySaved = 0;
    let moneyGiven = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            moneySaved += moneyGiven - 1;
            moneyGiven += 10;
        } else {
            moneySaved += pricePerToy;
        }
    }

    let moneyDiff = Math.abs(moneySaved - laundryPrice);
    if (moneySaved >= laundryPrice) {
        console.log("Yes! " + moneyDiff.toFixed(2));
    } else {
        console.log("No! " + moneyDiff.toFixed(2));
    }
}

lillySavings(21, 1570.98, 3);