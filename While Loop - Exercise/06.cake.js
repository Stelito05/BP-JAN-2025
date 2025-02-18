function cakePieces(input) {
    let index = 0;
    let length = Number(input[index]);
    index++;
    let width = Number(input[index]);
    index++;

    let totalPieces = length * width;
    let command = input[index];
    index++;

    while (command !== "STOP") {
        let takenPieces = Number(command);
        totalPieces -= takenPieces;

        if (totalPieces <= 0) {
            console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
            break;
        }

        command = input[index];
        index++;
    } 

    if (totalPieces > 0) {
        console.log(`${totalPieces} pieces are left.`);
    }
}

cakePieces([
    "10",
    "2",
    "2",
    "4",
    "6",
    "STOP"
]);