function pets(daysCount, totalFoodKg, dogFoodKgPerDay, catFoodKgPerDay, turtleFoodGrPerDay) {
    let neededFoodKg = ((turtleFoodGrPerDay / 1000) + dogFoodKgPerDay + catFoodKgPerDay) * daysCount;

    let foodDiff = Math.abs(totalFoodKg - neededFoodKg);
    if (neededFoodKg > totalFoodKg) {
        console.log(`${Math.ceil(foodDiff)} more kilos of food are needed.`);
    } else {
        console.log(`${Math.floor(foodDiff)} kilos of food left.`);
    }
}

pets(5, 10, 2.1, 0.8, 321)