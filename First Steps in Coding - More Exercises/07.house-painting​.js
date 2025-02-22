function housePainting(x, y, h) {
    let greenPaintParts = (x * y * 2) - (1.5 * 1.5 * 2) + (x * x * 2) - (1.2 * 2);
    let redPaintParts = (2 * (x * y)) + (2 * (x * h / 2));

    let greenPaintLiters = greenPaintParts / 3.4;
    let redPaintLiters = redPaintParts / 4.3;

    console.log(greenPaintLiters.toFixed(2));
    console.log(redPaintLiters.toFixed(2));
}

housePainting(6, 10, 5.2);