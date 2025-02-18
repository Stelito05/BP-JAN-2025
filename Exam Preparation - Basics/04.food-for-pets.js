function foodForPets(input) {
    let index = 0;
    let daysCount = Number(input[index]);
    index++;
    let totalAmountFood = Number(input[index]);
    index++;

    let totalDogFood = 0;
    let totalCatFood = 0;
    let biscuitsAmount = 0;

    for (let currentDay = 1; currentDay <= daysCount; currentDay++) {
        let dogEatenFood = Number(input[index]);
        index++;
        let catEatenFood = Number(input[index]);
        index++;
        
        if (currentDay % 3 === 0) {
            biscuitsAmount += 0.1 * (dogEatenFood + catEatenFood);
        }

        totalDogFood += dogEatenFood;
        totalCatFood += catEatenFood;
    }

    let totalEatenFood = totalDogFood + totalCatFood;
    let totalEatenFoodPercent = (totalEatenFood / totalAmountFood) * 100;
    let totalDogFoodPercent = (totalDogFood / totalEatenFood) * 100;
    let totalCatFoodPercent = (totalCatFood / totalEatenFood) * 100;
    
    console.log(`Total eaten biscuits: ${Math.round(biscuitsAmount)}gr.`);
    console.log(`${totalEatenFoodPercent.toFixed(2)}% of the food has been eaten.`);
    console.log(`${totalDogFoodPercent.toFixed(2)}% eaten from the dog.`);
    console.log(`${totalCatFoodPercent.toFixed(2)}% eaten from the cat.`);
}

foodForPets([
    '3',   '500',
    '100', '30',
    '110', '25',
    '120', '35'
  ]);