function fruitMarket(strawberryPrice, bananaCount, orangeCount, raspberryCount, strawberryCount) {
    let raspberryPrice = strawberryPrice / 2;
    let orangePrice = 0.6 * raspberryPrice;
    let bananaPrice = 0.2 * raspberryPrice;

    let raspberrySum = raspberryPrice * raspberryCount;
    let orangeSum = orangePrice * orangeCount;
    let bananaSum = bananaPrice * bananaCount;
    let strawberrySum = strawberryPrice * strawberryCount;

    let totalSum = raspberrySum + orangeSum + bananaSum + strawberrySum;
    console.log(totalSum.toFixed(2));
}

fruitMarket(63.5, 3.57, 6.35, 8.15, 2.5);