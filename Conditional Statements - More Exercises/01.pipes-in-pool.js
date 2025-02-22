function pipesInPool(v, pipe1, pipe2, hours) {
    let pipe1Liters = pipe1 * hours;
    let pipe2Liters = pipe2 * hours;
    let totalLiters = pipe1Liters + pipe2Liters;
    
    let totalLitersPercent = (totalLiters / v) * 100;
    let pipe1Percent = (pipe1Liters / totalLiters) * 100;
    let pipe2Percent = (pipe2Liters / totalLiters) * 100;

    if (totalLiters <= v) {
        console.log(`The pool is ${totalLitersPercent.toFixed(2)}% full. Pipe 1: ${pipe1Percent.toFixed(2)}%. Pipe 2: ${pipe2Percent.toFixed(2)}%.`);
    } else {
        console.log(`For ${hours.toFixed(2)} hours the pool overflows with ${(totalLiters - v).toFixed(2)} liters.`);
    }
}

pipesInPool(100, 100, 100, 2.5);
