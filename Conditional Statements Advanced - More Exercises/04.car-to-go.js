function carToGo(budget, season) {
    let typeCar = '';
    let classCar = '';
    let priceCar = 0;

    switch (season) {
        case 'Summer':
            if (budget <= 100) {
                classCar = 'Economy class';
                typeCar = 'Cabrio';
                priceCar = 0.35 * budget;

            } else if (budget <= 500) {
                classCar = 'Compact class';
                typeCar = 'Cabrio';
                priceCar = 0.45 * budget;
            }
            break;
        case 'Winter':
            if (budget <= 100) {
                classCar = 'Economy class';
                typeCar = 'Jeep';
                priceCar = 0.65 * budget;

            } else if (budget <= 500) {
                classCar = 'Compact class';
                typeCar = 'Jeep';
                priceCar = 0.8 * budget;
            }
        break;
    }

    if (budget > 500) {
        classCar = 'Luxury class';
        typeCar = 'Jeep';
        priceCar = 0.9 * budget;
    }

    console.log(classCar);
    console.log(`${typeCar} - ${priceCar.toFixed(2)}`);
}

carToGo(1010, 'Summer');