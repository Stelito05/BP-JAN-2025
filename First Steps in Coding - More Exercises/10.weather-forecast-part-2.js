function weatherForecastPart2(degrees) {
    if (degrees >= 5 && degrees <= 11.9) {
        console.log('Cold');
    } else if (degrees <= 14.9) {
        console.log('Cool');
    } else if (degrees <= 20) {
        console.log('Mild');
    } else if (degrees <= 25.9) {
        console.log('Warm');
    } else if (degrees <= 35) {
        console.log('Hot');
    } else {
        console.log('unknown');
    }
}

weatherForecastPart2(20.5);
