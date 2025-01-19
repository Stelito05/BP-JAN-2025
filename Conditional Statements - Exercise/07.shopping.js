function shopping(budget, videoCardCount, processorCount, ramCount) {
    let videoCardPrice = videoCardCount * 250;
    let processorPrice = (0.35 * videoCardPrice) * processorCount;
    let ramPrice = (0.1 * videoCardPrice) * ramCount;
    let totalPrice = videoCardPrice + processorPrice + ramPrice;

    if (videoCardCount > processorCount) {
        totalPrice *= 0.85;
    }

    let priceDiff = Math.abs(budget - totalPrice);
    if (budget >= totalPrice) {
        console.log(`You have ${priceDiff.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${priceDiff.toFixed(2)} leva more!`); 
    }
}

shopping(920.45, 3, 1, 1);