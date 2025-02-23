function roomPainting(paintCansCount, wallpaperRollsCount, pricePerPairOfGloves, pricePerBrush) {
    let paintPrice = 21.5 * paintCansCount;
    let wallpaperPrice = 5.2 * wallpaperRollsCount;
    let glovesPrice = (Math.ceil(0.35 * wallpaperRollsCount)) * pricePerPairOfGloves;
    let brushesPrice = (Math.floor(0.48 * paintCansCount)) * pricePerBrush;

    let totalPrice = paintPrice + wallpaperPrice + glovesPrice + brushesPrice;
    let delivery = (1 / 15) * totalPrice;

    console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`);
}

roomPainting(1, 3, 10.9, 1);