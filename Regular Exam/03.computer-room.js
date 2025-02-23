function computerRoom(month, hours, peopleCount, timeOfDay) {
    let pricePerPersonForHour = 0;

    switch (month) {
        case 'march':
        case 'april':
        case 'may':
            if (timeOfDay === 'day') {
                pricePerPersonForHour = 10.5;
            } else if (timeOfDay === 'night') {
                pricePerPersonForHour = 8.4;
            }
        break;

        case 'june':
        case 'july':
        case 'august':
            if (timeOfDay === 'day') {
                pricePerPersonForHour = 12.6;
            } else if (timeOfDay === 'night') {
                pricePerPersonForHour = 10.2;
            }
        break;
    }
    
    if (peopleCount >= 4) {
        pricePerPersonForHour *= 0.9;
    }

    if (hours >= 5) {
        pricePerPersonForHour *= 0.5;
    }

    let totalPrice = pricePerPersonForHour * peopleCount * hours;
    console.log(`Price per person for one hour: ${pricePerPersonForHour.toFixed(2)}`);
    console.log(`Total cost of the visit: ${totalPrice.toFixed(2)}`);
}

computerRoom('july', 5, 5, 'night')