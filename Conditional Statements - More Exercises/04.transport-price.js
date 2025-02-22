function transportPrice(distanceKm, timeOfDay) {
    let price = 0;
    
    if (distanceKm < 20) {
        if (timeOfDay === 'day') {
            price = 0.7 + (0.79 * distanceKm);
        } else if (timeOfDay === 'night') {
            price = 0.7 + (0.9 * distanceKm);
        }
    } else if (distanceKm < 100) {
        price = 0.09 * distanceKm;
    } else {
        price = 0.06 * distanceKm;
    }

    console.log(price.toFixed(2));
}

transportPrice(180, 'night')