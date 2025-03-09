function schoolCamp(season, typeGroup, studentsCount, nightsCount) {
    let sport = '';
    let price = 0;

    switch (season) {
        case 'Winter':
            if (typeGroup === 'boys') {
                price = (9.6 * nightsCount) * studentsCount;
                sport = 'Judo';
            } else if (typeGroup === 'girls') {
                price = (9.6 * nightsCount) * studentsCount;
                sport = 'Gymnastics';
            } else if (typeGroup === 'mixed') {
                price = (10 * nightsCount) * studentsCount;
                sport = 'Ski';
            }
        break;
        case 'Spring':
            if (typeGroup === 'boys') {
                price = (7.2 * nightsCount) * studentsCount;
                sport = 'Tennis';
            } else if (typeGroup === 'girls') {
                price = (7.2 * nightsCount) * studentsCount;
                sport = 'Athletics';
            } else if (typeGroup === 'mixed') {
                price = (9.5 * nightsCount) * studentsCount;
                sport = 'Cycling';
            }
        break;
        case 'Summer':
            if (typeGroup === 'boys') {
                price = (15 * nightsCount) * studentsCount;
                sport = 'Football';
            } else if (typeGroup === 'girls') {
                price = (15 * nightsCount) * studentsCount;
                sport = 'Volleyball';
            } else if (typeGroup === 'mixed') {
                price = (20 * nightsCount) * studentsCount;
                sport = 'Swimming';
            }
        break;
    }

    if (studentsCount >= 10 && studentsCount < 20) {
        price *= 0.95;
    } else if (studentsCount >= 20 && studentsCount < 50) {
        price *= 0.85;
    } else if (studentsCount >= 50) {
        price *= 0.5;
    }

    console.log(`${sport} ${price.toFixed(2)} lv.`);
}

schoolCamp('Spring', 'mixed', 17, 14);