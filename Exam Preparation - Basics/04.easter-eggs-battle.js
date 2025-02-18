function eggsBattle(input) {
    let index = 0;
    let eggsPlayer1 = Number(input[index]);
    index++;
    let eggsPlayer2 = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    while (command !== "End") {
        let winner = command;

        if (winner === "one") {
            eggsPlayer2--;
        } else if (winner === "two") {
            eggsPlayer1--;
        }

        if (eggsPlayer1 === 0) {
            console.log(`Player one is out of eggs. Player two has ${eggsPlayer2} eggs left.`);
            break;
        } else if (eggsPlayer2 === 0) {
            console.log(`Player two is out of eggs. Player one has ${eggsPlayer1} eggs left.`);
            break;
        }
        
        command = input[index];
        index++;
    }

    if (command === "End") {
        console.log(`Player one has ${eggsPlayer1} eggs left.`);
        console.log(`Player two has ${eggsPlayer2} eggs left.`);
    }
}

eggsBattle([
    "6",
    "3",
    "one",    
    "two",
    "two",    
    "one",
    "one"
]);