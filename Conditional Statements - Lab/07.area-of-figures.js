function areaOfFigures(shape, side1, side2) {
    let area = 0;
    if (shape === "square") {
        area = side1 * side1;
    } else if (shape === "rectangle") {
        area = side1 * side2;
    } else if (shape === "circle") {
        area = Math.PI * Math.pow(side1, 2);
    } else if (shape === "triangle") {
        area = (side1 * side2) / 2;
    }

    console.log(area.toFixed(3));
}

areaOfFigures("triangle", 4.5, 20);