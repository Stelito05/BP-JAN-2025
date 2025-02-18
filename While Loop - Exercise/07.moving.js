function apartmentSpace(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;

    let totalSpace = width * length * height;
    let command = input[index];
    index++;

    while (command !== "Done") {
        let boxes = Number(command);
        totalSpace -= boxes;

        if (totalSpace <= 0) {
            console.log(`No more free space! You need ${Math.abs(totalSpace)} Cubic meters more.`);
            break;
        }

        command = input[index];
        index++;
    }

    if (totalSpace > 0) {
        console.log(`${totalSpace} Cubic meters left.`);
    }
}

apartmentSpace([
    "10",
    "1",
    "2",    
    "4",
    "6",
    "Done"
]);