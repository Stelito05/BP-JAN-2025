function buildingRooms(floorCount, roomCount) {
    for (let x = floorCount; x > 0; x--) {
        let buff = "";
        for (let y = 0; y < roomCount; y++) {
            if (x === floorCount) {
                buff += `L${x}${y} `;
            } else if (x % 2 === 0) {
                buff += `O${x}${y} `;
            } else {
                buff += `A${x}${y} `;
            }
        } 
        console.log(buff);
    }
}

buildingRooms(4, 4);