function accountBalance(input) {
    let index = 0;
    let account = 0;

    let value = input[index];
    index++;

    while (value !== "NoMoreMoney") {
        let increase = Number(value);

        if (increase < 0) {
            console.log("Invalid operation!");
            break;
        }

        account += increase;
        console.log("Increase: " + increase.toFixed(2));

        value = input[index];
        index++;
        
    }
    console.log("Total: " + account.toFixed(2));
}

accountBalance(["120", "45.55", "-150"]);