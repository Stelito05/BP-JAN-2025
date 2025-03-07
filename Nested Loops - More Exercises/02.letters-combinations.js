function lettersCombinations(letter1, letter2, letter3) {
    let buff = '';
    let startLetter = letter1.charCodeAt(0);
    let endLetter = letter2.charCodeAt(0);
    let exceptLetter = letter3.charCodeAt(0);
    let count = 0;

    for (let first = startLetter; first <= endLetter; first++) {
        for (let second = startLetter; second <= endLetter; second++) {
            for (let third = startLetter; third <= endLetter; third++) {
                if (first !== exceptLetter && second !== exceptLetter && third !== exceptLetter) {
                    buff += `${String.fromCharCode(first, second, third)} `;
                    count++;
                }
            }
        }
    }

    console.log(`${buff}${count}`);
}

lettersCombinations('a', 'c', 'z');