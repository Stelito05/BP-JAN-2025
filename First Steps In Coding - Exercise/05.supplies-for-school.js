function schoolSuppliesMoney(penPacketsCount, markerPacketsCount, detergentLiters, discountPercentage) {
    let allPrice = penPacketsCount * 5.80 + markerPacketsCount * 7.20 + detergentLiters * 1.20;
    let discount = allPrice * (discountPercentage / 100);
    let endPrice = allPrice - discount;

    console.log(endPrice);
}

schoolSuppliesMoney(4, 2, 5, 13);