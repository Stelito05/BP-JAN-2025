function foodDeliveryPrice(chickenMenuCount, fishMenuCount, vegetarianMenuCount) {
    let foodPrice = chickenMenuCount * 10.35 + fishMenuCount * 12.40 + vegetarianMenuCount * 8.15;
    let dessertPrice = 0.2 * foodPrice;
    
    let finalPrice = foodPrice + dessertPrice + 2.50;
    console.log(finalPrice);
}

foodDeliveryPrice(9, 2, 6);