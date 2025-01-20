function fruitShopPrice(fruit, day, quantity) {
    let price = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (fruit === "banana") {
                price = quantity * 2.5;
            } else if (fruit === "apple") {
                price = quantity * 1.2;
            } else if (fruit === "orange") {
                price = quantity * 0.85;
            } else if (fruit === "grapefruit") {
                price = quantity * 1.45;
            } else if (fruit === "kiwi") {
                price = quantity * 2.7;
            } else if (fruit === "pineapple") {
                price = quantity * 5.5;
            } else if (fruit === "grapes") {
                price = quantity * 3.85;
            } else {
                console.log("error");
                return;
            }
        break;
        case "Saturday":
        case "Sunday":
            if (fruit === "banana") {
                price = quantity * 2.7;
            } else if (fruit === "apple") {
                price = quantity * 1.25;
            } else if (fruit === "orange") {
                price = quantity * 0.9;
            } else if (fruit === "grapefruit") {
                price = quantity * 1.6;
            } else if (fruit === "kiwi") {
                price = quantity * 3;
            } else if (fruit === "pineapple") {
                price = quantity * 5.6;
            } else if (fruit === "grapes") {
                price = quantity * 4.2;
            } else {
                console.log("error");
                return;
            }
        break;
        default: console.log("error"); return;
    }
    console.log(price.toFixed(2));
}

fruitShopPrice("apple", "Tuesday", 2);