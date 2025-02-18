function favouriteBook(input) {
    let index = 0;
    let incorrectBooks = 0;
    let isfound = false;

    let favouriteBook = input[index];
    index++;

    let command = input[index];
    index++;

    while (command !== "No More Books") {
        if (command === favouriteBook) {
            isfound = true;
            console.log(`You checked ${incorrectBooks} books and found it.`);
            break;
        } 

        incorrectBooks++;
        command = input[index];
        index++;
    }

    if(!isfound) {
        console.log("The book you search is not here!");
        console.log(`You checked ${incorrectBooks} books.`);
    }
}

favouriteBook([
    "The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"
]);