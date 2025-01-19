function treasureDoor(doorNumber) {
    if (doorNumber < 1 || doorNumber > 3) {
        console.log("Invalid choice. Please select Door 1, 2, or 3.");
        return;
    }

    let treasureDoorNum = Math.floor(Math.random() * 3) + 1;
    console.log(`The treasure is behind Door ${treasureDoorNum}.`);
    
    if (treasureDoorNum === doorNumber) {
        console.log(`Congratulations, Pen4o! You found the treasure behind Door ${doorNumber}!`);
    } else {
        console.log("A bucket of cold water splashes on you! Unlucky Pen4o!");
    }
}

treasureDoor(3);