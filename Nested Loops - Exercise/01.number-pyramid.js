// function numberPyramid(n) {
//     let currentNumber = 1;
//     let isBigger = false;
//     let printCurrentLine = "";
//     for (let rows = 1; rows <= n; rows++) {
//         for (let columns = 1; columns <= rows; columns++) {
//             if (currentNumber > n) {
//                 isBigger = true;
//                 break;
//             }
//             printCurrentLine += currentNumber + " ";
//             currentNumber++;
//         }
//         console.log(printCurrentLine);
//         printCurrentLine = "";
//         if (isBigger) {
//             break;
//         }
//     }
// }

// numberPyramid(7);

function numberPyramid(maxNum) {
    let curentNum = 1;
    let buff = "";
    let currentRow = 1;
    let currentRowsNums = 0;

    while (curentNum <= maxNum) {
        if (currentRowsNums < currentRow) {
            buff += `${curentNum} `;
            currentRowsNums++;
        } else {
            buff += `\n${curentNum} `;
            currentRow++;
            currentRowsNums = 1;
        }
        curentNum++;
    }
    console.log(buff);
}

numberPyramid(7);