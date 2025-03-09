function flowersShop(chrysanthemumsCount, rosesCount, tulipsCount, season, dayType) {
    let totalPrice = 0;

    switch (season) {
        case 'Spring':
        case 'Summer':
            totalPrice = (2 * chrysanthemumsCount) + (4.1 * rosesCount) + (2.5 * tulipsCount);

            if (dayType === 'Y') {
                totalPrice *= 1.15;
            } 

            if (tulipsCount > 7 && season === 'Spring') {
                totalPrice *= 0.95;
            }
        break;
        case 'Autumn':
        case 'Winter':
            totalPrice = (3.75 * chrysanthemumsCount) + (4.5 * rosesCount) + (4.15 * tulipsCount);

            if (dayType === 'Y') {
                totalPrice *= 1.15;
            }

            if (rosesCount >= 10 && season === 'Winter') {
                totalPrice *= 0.9;
            }
        break;
    }

    let totalCount = chrysanthemumsCount + rosesCount + tulipsCount;
    if (totalCount > 20) {
        totalPrice *= 0.8;
    }

    console.log((totalPrice + 2).toFixed(2));
}

flowersShop(10, 10, 10, 'Autumn', 'N');