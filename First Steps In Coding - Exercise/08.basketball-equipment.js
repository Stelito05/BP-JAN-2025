function basketballTrainingCosts(annualTrainingFee) {
    // let basketballShoes = annualTrainingFee - (0.4 * annualTrainingFee);
    // let basketballKit = basketballShoes - (0.2 * basketballShoes);

    let basketballShoes = 0.6 * annualTrainingFee;
    let basketballKit = 0.8 * basketballShoes;

    let basketballBall = (1 / 4) * basketballKit;
    let basketbalAccessories = (1 / 5) * basketballBall;

    let finalPrice = annualTrainingFee + basketballShoes + basketballKit + basketballBall + basketbalAccessories;
    console.log(finalPrice); 
}

basketballTrainingCosts(550);