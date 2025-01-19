function yardGreening(squareMeters) {
    let firstPrice = squareMeters * 7.61;
    let discount = firstPrice * (18/100);
    let finalPrice = firstPrice - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(150);