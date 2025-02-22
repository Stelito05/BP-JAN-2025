function fuelTankPart2(fuelType, fuelAmount, clubCard) {
    let price = 0;

    switch (fuelType) {
        case 'Diesel':
            if (clubCard === 'Yes') {
                price = 2.21 * fuelAmount;
            } else if (clubCard === 'No') {
                price = 2.33 * fuelAmount;
            }
        break;
        
        case 'Gasoline':
            if (clubCard === 'Yes') {
                price = 2.04 * fuelAmount;
            } else if (clubCard === 'No') {
                price = 2.22 * fuelAmount;
            }
        break;
        
        case 'Gas':
            if (clubCard === 'Yes') {
                price = 0.85 * fuelAmount;
            } else if (clubCard === 'No') {
                price = 0.93 * fuelAmount;
            }
        break;
    }

    if (fuelAmount >= 20 && fuelAmount <= 25) {
        price *= 0.92;
    } else if (fuelAmount > 25) {
        price *= 0.9;
    }

    console.log(`${price.toFixed(2)} lv.`);
}

fuelTankPart2('Diesel', 19, 'No');