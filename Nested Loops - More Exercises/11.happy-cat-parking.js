function happyCatParking(daysCount, hoursPerDay) {
    let sumPerDay = 0;
    let totalSum = 0;

    for (let day = 1; day <= daysCount; day++) {
        sumPerDay = 0;

        for (let hour = 1; hour <= hoursPerDay; hour++) {
            if (day % 2 === 0 && hour % 2 !== 0) {
                sumPerDay += 2.5;
            } else if (day % 2 !== 0 && hour % 2 === 0) {
                sumPerDay += 1.25;
            } else {
                sumPerDay += 1;
            }
        }

        totalSum += sumPerDay;
        console.log(`Day: ${day} - ${sumPerDay.toFixed(2)} leva`);
    }

    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}

happyCatParking(5, 2);