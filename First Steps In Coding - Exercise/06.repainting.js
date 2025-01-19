function repaintingCosts(nylonAmount, paintAmount, thinnerAmount, hoursWork) {
    let materialsPrice = nylonAmount * 1.50 + paintAmount * 14.50 + thinnerAmount * 5;
    let extraMaterialsPrice = ((10/100 * paintAmount) * 14.50) + 2 * 1.50 + 0.40;
    let allMaterialsPrice = materialsPrice + extraMaterialsPrice;
    let workerSalary = (0.3 * allMaterialsPrice) * hoursWork;

    let finalPrice = allMaterialsPrice + workerSalary;
    console.log(finalPrice);
}

repaintingCosts(5, 10, 10, 1);