function excursionCalculator(peopleCount, season) {
    let excursionPrice = 0;

    switch (season) {
        case "spring": 
            if (peopleCount <= 5) {
                excursionPrice = peopleCount * 50;
            } else {
                excursionPrice = peopleCount * 48;
            }
        break;

        case "summer":
            if (peopleCount <= 5) {
                excursionPrice = peopleCount * 48.5;
            } else {
                excursionPrice = peopleCount * 45;
            }
            excursionPrice *= 0.85;
        break;

        case "autumn":
            if (peopleCount <= 5) {
                excursionPrice = peopleCount * 60;
            } else {
                excursionPrice = peopleCount * 49.5;
            }
        break;

        case "winter":
            if (peopleCount <= 5) {
                excursionPrice = peopleCount * 86;
            } else {
                excursionPrice = peopleCount * 85;
            }
            excursionPrice *= 1.08;
        break;
    }

    console.log(`${excursionPrice.toFixed(2)} leva.`);
}

excursionCalculator(20, "winter");