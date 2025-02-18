function vacation(input) {
    let daysCount = 0;
    let daysCountSpending = 0;
    let notEnoughMoney = false;
    let index = 0;

    let vacationMoney = Number(input[index]);
    index++;
    let availableMoney = Number(input[index]);
    index++;
    
    while (availableMoney < vacationMoney) {
        let action = input[index];
        index++;
        let money = Number(input[index]);
        index++;
        
        daysCount++;

        if (action === "spend") {
            availableMoney -= money;
            if (availableMoney < 0) {
                availableMoney = 0;
            }
            daysCountSpending++;
        } else if (action === "save") {
            availableMoney += money;
            daysCountSpending = 0;
        }
        
        if (daysCountSpending === 5) {
            notEnoughMoney = true;
            console.log("You can't save the money.");
            console.log(daysCount);
            break;
        }
    }

    if (!notEnoughMoney) {
        console.log(`You saved the money for ${daysCount} days.`);
    }
}

vacation([
    "2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"
]);