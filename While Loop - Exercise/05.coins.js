function coins(money) {
    let coinChange = Math.round(money * 100);
    let coinsCount = 0;

    while (coinChange !== 0) {
        if (coinChange >= 200) {
            coinChange -= 200;
        } else if (coinChange >= 100) {
            coinChange -= 100;
        } else if (coinChange >= 50) {
            coinChange -= 50;
        } else if (coinChange >= 20) {
            coinChange -= 20;
        } else if (coinChange >= 10) {
            coinChange -= 10;
        } else if (coinChange >= 5) {
            coinChange -= 5;
        } else if (coinChange >= 2) {
            coinChange -= 2;
        } else if (coinChange >= 1) {
            coinChange -= 1;
        }
        coinsCount++;
    }
    console.log(coinsCount);
}

coins(0.56);