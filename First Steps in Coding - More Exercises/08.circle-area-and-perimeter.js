function circleAreaandPerimeter(r) {
    let perimeter = 2 * Math.PI * r;
    let area = Math.PI * Math.pow(r, 2);

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

circleAreaandPerimeter(4.5);