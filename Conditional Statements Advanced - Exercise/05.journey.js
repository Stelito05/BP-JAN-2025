function moneyForVacation(budget, season) {
    let destination = '';
    let vacationType = '';
    let moneySpent = 0;

    if (season === 'summer') {
        vacationType = 'Camp'
        if (budget <= 100) {
            destination = 'Bulgaria';
            moneySpent = budget * 0.3;
        } else if (budget <= 1000) {
            destination = 'Balkans';
            moneySpent = budget * 0.4;
        }
    } else if (season === 'winter') {
        vacationType = 'Hotel'
        if (budget <= 100) {
            destination = 'Bulgaria';
            moneySpent = budget * 0.7;
        } else if (budget <= 1000) {
            destination = 'Balkans';
            moneySpent = budget * 0.8;
        }
    }

    if (budget > 1000) {
        vacationType = 'Hotel';
        destination = 'Europe';
        moneySpent = budget * 0.9;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${vacationType} - ${moneySpent.toFixed(2)}`);
}

moneyForVacation(1500, 'summer');