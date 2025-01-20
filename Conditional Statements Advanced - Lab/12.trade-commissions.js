function tradeCommissions(town, salesCount) {
    let commission = 0;
    switch (town) {
        case "Sofia":
            if (salesCount >= 0 && salesCount <= 500) {
                commission = 0.05 * salesCount;
            } else if (salesCount > 500 && salesCount <= 1000) {
                commission = 0.07 * salesCount;
            } else if (salesCount > 1000 && salesCount <= 10000) {
                commission = 0.08 * salesCount;
            } else if (salesCount > 10000) {
                commission = 0.12 * salesCount;
            } else {
                console.log("error");
                return;
            }
        break;
        case "Varna":
            if (salesCount >= 0 && salesCount <= 500) {
                commission = 0.045 * salesCount;
            } else if (salesCount > 500 && salesCount <= 1000) {
                commission = 0.075 * salesCount;
            } else if (salesCount > 1000 && salesCount <= 10000) {
                commission = 0.1 * salesCount;
            } else if (salesCount > 10000) {
                commission = 0.13 * salesCount;
            } else {
                console.log("error");
                return;
            }
        break;
        case "Plovdiv":
            if (salesCount >= 0 && salesCount <= 500) {
                commission = 0.055 * salesCount;
            } else if (salesCount > 500 && salesCount <= 1000) {
                commission = 0.08 * salesCount;
            } else if (salesCount > 1000 && salesCount <= 10000) {
                commission = 0.12 * salesCount;
            } else if (salesCount > 10000) {
                commission = 0.145 * salesCount;
            } else {
                console.log("error");
                return;
            }
        break;
        default: console.log("error"); return;
    }
    console.log(commission.toFixed(2));
}

tradeCommissions("Plovdiv", 499.99);