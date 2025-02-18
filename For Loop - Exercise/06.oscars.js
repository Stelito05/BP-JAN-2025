function oscarsPoints(array) {
    let actorName = array[0];
    let actorPoints = Number(array[1]);
    let juryCount = Number(array[2]);
    
    for(let i = 3; i < array.length; i += 2) {
        let pointsName = array[i].length;
        let pointsCount = Number(array[i + 1]);
        actorPoints += (pointsName * pointsCount) / 2;
        
        if (actorPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${actorPoints.toFixed(1)}!`);
            return;
        }
    }
    console.log(`Sorry, ${actorName} you need ${(1250.5 - actorPoints).toFixed(1)} more!`);
}


oscarsPoints([
    "Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"
]);