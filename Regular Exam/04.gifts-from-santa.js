function giftsFromSanta(firstNum, secondNum, specialNum) {
    let buff = '';

    for (let addressNum = secondNum; addressNum >= firstNum; addressNum--) {
        if (addressNum % 2 === 0 && addressNum % 3 === 0) {
            if (addressNum === specialNum) {
                break;
            }
            buff += `${addressNum} `
        }
    }
    console.log(buff);
}

giftsFromSanta(1, 30, 15)