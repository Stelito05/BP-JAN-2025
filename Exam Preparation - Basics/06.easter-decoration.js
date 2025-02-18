function easterDecoration(input) {
    let index = 0;
    let clientsCount = Number(input[index]);
    index++;

    let totalPrice = 0

    for (let currentClient = 1; currentClient <= clientsCount; currentClient++) {
        let command = input[index];
        index++;

        let pricePerClient = 0;
        let itemsCountPerClient = 0;

        while (command !== "Finish") {
            let decorationType = command;
            switch(decorationType) {
                case "basket": pricePerClient += 1.5; break;
                case "wreath": pricePerClient += 3.8;; break;
                case "chocolate bunny": pricePerClient += 7; break;
            }

            itemsCountPerClient++;

            command = input[index];
            index++
        }

        if (itemsCountPerClient % 2 === 0) {
            pricePerClient *= 0.8;
        }

        totalPrice += pricePerClient;
        console.log(`You purchased ${itemsCountPerClient} items for ${pricePerClient.toFixed(2)} leva.`);
    }

    let avgPrice = totalPrice / clientsCount;
    console.log(`Average bill per client is: ${avgPrice.toFixed(2)} leva.`);
}

easterDecoration(["1",
    "basket",
    "wreath",
    "chocolate bunny",
    "wreath",
    "basket",
    "chocolate bunny",
    "Finish"]);