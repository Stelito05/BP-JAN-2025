function theSongOfTheWheels(numberGiven) {
    let counter = 0;
    let result = '';
    let password = '';
    let sum = 0;

    for (let first = 1; first <= 9; first++) {
        for (let second = 1; second <= 9; second++) {
            for (let third = 1; third <= 9; third++) {
                for (let fourth = 1; fourth <= 9; fourth++) {
                    if (first < second && third > fourth) {
                        sum = (first * second) + (third * fourth);

                        if (sum === numberGiven) {
                            counter++;
                            result += `${first}${second}${third}${fourth} `;

                            if (counter === 4) {
                                password = `${first}${second}${third}${fourth}`
                            }
                        }
                    }
                }
            }
        }
    }
    
    if (counter >= 4) {
        console.log(result);
        console.log(`Password: ${password}`);
    } else if (counter < 4) {
        console.log(result);
        console.log("No!");
    } else {
        console.log("No!");
    }
}

theSongOfTheWheels(55);