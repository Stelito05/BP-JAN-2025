function trainingLab(h, w) {
    let widthCm = (w * 100) - 100;
    let heightCm = h * 100;

    let desksCount = Math.trunc(widthCm / 70);
    let rowsCount = Math.trunc(heightCm / 120);

    let seatsCount = desksCount * rowsCount - 3;
    console.log(seatsCount);
}

trainingLab(8.4, 5.2);