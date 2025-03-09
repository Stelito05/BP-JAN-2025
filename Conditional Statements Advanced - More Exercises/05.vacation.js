function vacation(budget, season) {
    let price = 0;
    let location = '';
    let accommodationType = '';

    switch (season) {
        case 'Summer':
            location = 'Alaska';
            if (budget <= 1000) {
                accommodationType = 'Camp';
                price = 0.65 * budget;
            } else if (budget <= 3000) {
                accommodationType = 'Hut';
                price = 0.8 * budget;
            }
        break;
        case 'Winter':
            location = 'Morocco';
            if (budget <= 1000) {
                accommodationType = 'Camp';
                price = 0.45 * budget;
            } else if (budget <= 3000) {
                accommodationType = 'Hut';
                price = 0.6 * budget;
            }
        break;
    }

    if (budget > 3000) {
        accommodationType = 'Hotel';
        price = 0.9 * budget;
    }

    console.log(`${location} - ${accommodationType} - ${price.toFixed(2)}`);
}

vacation(5000, 'Winter');