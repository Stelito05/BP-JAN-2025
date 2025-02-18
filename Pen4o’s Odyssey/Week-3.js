function treasureMap(secretCode) {
    let totalPower = 0;
    let letters = "";
    for (i = 0; i < secretCode.length; i++) {
        if (secretCode[i] === secretCode[i].toUpperCase()) {
            letters += secretCode[i].toLowerCase();
        } else {
            letters += secretCode[i].toUpperCase();
        }
        switch (secretCode[i]) {
            case '1': totalPower += Number(secretCode[i]); break;
            case '2': totalPower += Number(secretCode[i]); break;
            case '3': totalPower += Number(secretCode[i]); break;
            case '4': totalPower += Number(secretCode[i]); break;
            case '5': totalPower += Number(secretCode[i]); break;
            case '6': totalPower += Number(secretCode[i]); break;
            case '7': totalPower += Number(secretCode[i]); break;
            case '8': totalPower += Number(secretCode[i]); break;
            case '9': totalPower += Number(secretCode[i]); break;
        }
    }
    console.log(letters);

    if (totalPower > 20) {
        console.log(`The map reveals the your next location! Total power: ${totalPower}`);
    } else {
        console.log(`The map warns of danger! Total power: ${totalPower}`);
    }
}
treasureMap("Dangerous_2Clue");