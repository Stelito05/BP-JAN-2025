function spaceship(width, length, height, avgHeightOfAstronauts) {
    let spaceshipCapacity = width * length * height;
    let capacityPerRoom = (avgHeightOfAstronauts + 0.4) * 2 * 2;
    let astronautsCount = Math.floor(spaceshipCapacity / capacityPerRoom);

    if (astronautsCount < 3) {
        console.log("The spacecraft is too small.");
    } else if (astronautsCount <= 10) {
        console.log(`The spacecraft holds ${astronautsCount} astronauts.`);
    } else {
        console.log("The spacecraft is too big.");
    }
}

spaceship(3, 3, 4, 1.68);