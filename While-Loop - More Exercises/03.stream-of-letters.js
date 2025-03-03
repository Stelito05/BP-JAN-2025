function streamOfLetters(input) {
    let index = 0;
    let command = input[index];
    index++;

    let printWord = '';
    let buff = '';
    let n = 0;
    let o = 0;
    let c = 0;

    while (command !== "End") {
        let letter = command;

        if ((letter >= 'a' && letter <= 'z') || (letter >= 'A' && letter <= 'Z')) {
            switch (letter) {
                case 'c':
                    if (c > 0) {
                        buff += letter;
                    }
                    c++;
                break;

                case 'o':
                    if (o > 0) {
                        buff += letter;
                    }
                    o++;
                break;

                case 'n':
                    if (n > 0) {
                        buff += letter;
                    }
                    n++;
                break;

                default: buff += letter;
            }
        }
        
        if (c > 0 && o > 0 && n > 0) {
            printWord += `${buff} `;
            buff = "";
            n = 0;
            o = 0;
            c = 0;
        }
        
        command = input[index];
        index++
    }
    console.log(printWord);
}

streamOfLetters([
    "%",
    "!",
    "c",
    "^",
    "B",
    "`",
    "o",
    "%",
    "o",
    "o",
    "M",
    ")",
    "{",
    "n",
    "/",
    "A",
    "D",
    "End"
]);