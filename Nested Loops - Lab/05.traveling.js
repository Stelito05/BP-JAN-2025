function travellingSum(input) {
    let index = 0;
    let sum = 0;
    let destination = input[index];
    index++;
    
    while(destination !== "End") {
        let moneyNeeded = Number(input[index]);
        index++;

        while (sum < moneyNeeded) {
            let savings = Number(input[index]);
            index++;
            sum += savings;
        }
        
        sum = 0;
        console.log(`Going to ${destination}!`);

        destination = input[index];
        index++;
    }
}

travellingSum([
    "France", 
    "2000", 
    "300", 
    "300", 
    "200", 
    "400", 
    "190", 
    "258", 
    "360", 
    "Portugal", 
    "1450", 
    "400", 
    "400", 
    "200", 
    "300", 
    "300", 
    "Egypt", 
    "1900", 
    "1000", 
    "280", 
    "300", 
    "500", 
    "End"
]);