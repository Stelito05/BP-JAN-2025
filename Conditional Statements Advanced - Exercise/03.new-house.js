function moneyForFlowers(flowerType, flowerCount, budget) {
    let price = 0;

    switch (flowerType) {
        case "Roses":
            price = flowerCount * 5;
            if (flowerCount > 80) {
                price *= 0.9;
            }
        break;
        case "Dahlias":
            price = flowerCount * 3.8;
            if (flowerCount > 90) {
                price *= 0.85;
            }
        break;
        case "Tulips":
            price = flowerCount * 2.8;
            if (flowerCount > 80) {
                price *= 0.85;
            }
        break;
        case "Narcissus":
            price = flowerCount * 3;
            if (flowerCount < 120) {
                price *= 1.15;
            }
        break;
        case "Gladiolus":
            price = flowerCount * 2.5;
            if (flowerCount < 80) {
                price *= 1.2
            }
        break;
    }

    let priceDiff = (Math.abs(budget - price).toFixed(2));
    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${priceDiff} leva left.`);
    } else {
        console.log(`Not enough money, you need ${priceDiff} leva more.`);
    }
}

moneyForFlowers("Gladiolus", 50, 260);