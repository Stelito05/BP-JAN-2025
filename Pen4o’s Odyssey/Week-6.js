function lightHallGrate(rowsCount, columnsCount) {
    for (let rowIndex = 0; rowIndex < rowsCount; rowIndex++) {
        let buff = "";
        let sum = 0;
        for (let colIndex = 0; colIndex < columnsCount; colIndex++) {
            sum = rowIndex + colIndex;

            if (sum % 2 === 0) {
                buff += "* "
            } else {
                buff += ". "
            }
        }
        console.log(buff);
    }
    console.log("Pen4o’s Odyssey has come to an end, but your programming journey is just beginning. The world of code awaits you!");
}

lightHallGrate(5, 5);