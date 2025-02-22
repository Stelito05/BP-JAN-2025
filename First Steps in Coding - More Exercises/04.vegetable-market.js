function vegetableMarket(pricePerKgVeg, pricePerKgFruit, quantityVeg, quantityFruit) {
    let totalPrice = (pricePerKgVeg * quantityVeg) + (pricePerKgFruit * quantityFruit);
    let totalPriceInEuro = totalPrice / 1.94;
    console.log(totalPriceInEuro.toFixed(2));
}

vegetableMarket(1.5, 2.5, 10, 10);