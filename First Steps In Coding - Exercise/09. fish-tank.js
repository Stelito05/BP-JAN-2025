 function fishTank(length, width, height, percentFilled) {
    let volume = (length * width * height) / 1000;
    let filledSpace = volume * (percentFilled / 100);

    let neededLiters = volume - filledSpace;
    console.log(neededLiters);
 }

 fishTank(85, 75, 47, 17);




