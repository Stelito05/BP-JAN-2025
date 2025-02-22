function fuelTank(fuel, fuelLiters) {
    let fuelType = fuel.toLowerCase();
    
    switch (fuelType) {
        case 'diesel':
        case 'gasoline':
        case 'gas':
            if (fuelLiters < 25) {
                console.log(`Fill your tank with ${fuelType}!`);
            } else {
                console.log(`You have enough ${fuelType}.`);
            }
        break;
        default: console.log("Invalid fuel!"); break;
    }
}

fuelTank('Gas', 25);
