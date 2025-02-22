function fishland(mackerelPricePerKg, spratPricePerKg, bonitoQuantity, horseMackarelQuanity, shelfishQuantity) {
    let bonitoPrice = (1.6 * mackerelPricePerKg) * bonitoQuantity;
    let horseMackarelPrice = (1.8 * spratPricePerKg) * horseMackarelQuanity;
    let shelfishPrice = 7.5 * shelfishQuantity;

    let totalPrice = bonitoPrice + horseMackarelPrice + shelfishPrice;
    console.log(totalPrice.toFixed(2));
}

fishland(5.55, 3.57, 4.3, 3.6, 7);