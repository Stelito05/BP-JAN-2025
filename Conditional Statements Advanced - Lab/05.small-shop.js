function smallShopPrices(product, city, quantity) {
    let price = 0;
    
    switch (product) {
        case "coffee":
            if (city === "Sofia") {
                price = quantity * 0.5;
            } else if (city === "Plovdiv") {
                price = quantity * 0.4;
            } else if (city === "Varna") {
                price = quantity * 0.45;
            }
        break;
        case "water":
            if (city === "Sofia") {
                price = quantity * 0.8;
            } else if (city === "Plovdiv") {
                price = quantity * 0.7;
            } else if (city === "Varna") {
                price = quantity * 0.7;
            }
        break;
        case "beer":
            if (city === "Sofia") {
                price = quantity * 1.2;
            } else if (city === "Plovdiv") {
                price = quantity * 1.15;
            } else if (city === "Varna") {
                price = quantity * 1.10;
            }
        break;
        case "sweets":
            if (city === "Sofia") {
                price = quantity * 1.45;
            } else if (city === "Plovdiv") {
                price = quantity * 1.30;
            } else if (city === "Varna") {
                price = quantity * 1.35;
            }
        break;
        case "peanuts":
            if (city === "Sofia") {
                price = quantity * 1.6;
            } else if (city === "Plovdiv") {
                price = quantity * 1.5;
            } else if (city === "Varna") {
                price = quantity * 1.55;
            }
        break;
    }
    console.log(price);
}

smallShopPrices("sweets", "Sofia", 2.23);