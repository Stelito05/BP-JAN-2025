function weddingSeats(lastSector, firstSectorRows, seatsCountOddRow) {
    let lastSectorNum = lastSector.charCodeAt(0);
    let result = '';
    let counter = 0;
    
    for (let currentSector = 65; currentSector <= lastSectorNum; currentSector++) {
        if (currentSector !== 65) {
            firstSectorRows ++;
        }
        for (let rowsCount = 1; rowsCount <= firstSectorRows; rowsCount++) {
            if (rowsCount % 2 !== 0) {
                let lastSeatOddRow = 97 + seatsCountOddRow;
                for (let currentSeat = 97; currentSeat < lastSeatOddRow; currentSeat++) {
                   console.log(`${String.fromCharCode(currentSector)}${rowsCount}${String.fromCharCode(currentSeat)}`);
                   counter++;
                }
            } else {
                let lastSeatEvenRow = 97 + seatsCountOddRow + 2;
                for (let currentSeat = 97; currentSeat < lastSeatEvenRow; currentSeat++) {
                    console.log(`${String.fromCharCode(currentSector)}${rowsCount}${String.fromCharCode(currentSeat)}`);
                    counter++;
                }
            }
        }
    }

    console.log(counter);
}

weddingSeats('C', 4, 2);
