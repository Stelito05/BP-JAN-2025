function excursion(peopleCount, nightsCount, cardsCount, ticketsCount) {
    let nightPrice = nightsCount * 20;
    let cardPrice = cardsCount * 1.6;
    let ticketPrice = ticketsCount * 6;

    let pricePerPerson = nightPrice + cardPrice + ticketPrice;
    let totalPrice = pricePerPerson * peopleCount * 1.25;

    console.log(totalPrice.toFixed(2));
}

excursion(131, 9, 33, 46);