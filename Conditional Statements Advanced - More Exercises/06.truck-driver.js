function truckDriver(season, kilometersPerMonth) {
    let salary = 0;

    switch (season) {
        case 'Spring':
        case 'Autumn':
            if (kilometersPerMonth <= 5000) {
                salary = (kilometersPerMonth * 0.75) * 4;
            } else if (kilometersPerMonth <= 10000) {
                salary = (kilometersPerMonth * 0.95) * 4;
            }
        break;
        case 'Summer':
            if (kilometersPerMonth <= 5000) {
                salary = (kilometersPerMonth * 0.9) * 4;
            } else if (kilometersPerMonth <= 10000) {
                salary = (kilometersPerMonth * 1.10) * 4;
            }
        break;
        case 'Winter':
            if (kilometersPerMonth <= 5000) {
                salary = (kilometersPerMonth * 1.05) * 4;
            } else if (kilometersPerMonth <= 10000) {
                salary = (kilometersPerMonth * 1.25) * 4;
            }
        break;
    }

    if (kilometersPerMonth> 10000 && kilometersPerMonth <= 20000) {
        salary = (kilometersPerMonth * 1.45) * 4;
    }

    let salaryWithoutTaxes = salary - (salary * 0.1);
    console.log(salaryWithoutTaxes.toFixed(2));
}

truckDriver('Autumn', 8600);