function oddOrEvenPosition(input) {
    let index = 0;
    let numCount = Number(input[index]);
    index++;

    let sumOdd = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let sumEven = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;

    for (let count = 1; count <= numCount; count++) {
        let currentNum = Number(input[index]);
        index++

        if (count % 2 === 0) {
            if (currentNum < evenMin) {
                evenMin = currentNum;
            } else if (currentNum > evenMax) {
                evenMax = currentNum;
            }
            sumEven += currentNum;
            
            if (count === 2 || count === 3) {
                evenMax = evenMin;
            }

        } else {
            if (currentNum < oddMin) {
                oddMin = currentNum;
            } else if (currentNum > oddMax) {
                oddMax = currentNum;
            }
            sumOdd += currentNum;

            if (count === 1) {
                oddMax = oddMin;
            }
        }
    }
    
    console.log(`OddSum=${sumOdd.toFixed(2)},`);
    if (oddMin === Number.MAX_SAFE_INTEGER) {
        console.log("OddMin=No,");
    } else {
        console.log(`OddMin=${oddMin.toFixed(2)},`);
    }
    if (oddMax === Number.MIN_SAFE_INTEGER) {
        console.log("OddMax=No,");
    } else {
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }
    console.log(`EvenSum=${sumEven.toFixed(2)},`);
    if (evenMin === Number.MAX_SAFE_INTEGER) {
        console.log("EvenMin=No,");
    } else {
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
    }
    if (evenMax === Number.MIN_SAFE_INTEGER) {
        console.log("EvenMax=No");
    } else {
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }
}

oddOrEvenPosition([
    "3",
    "-1",
    "-2",
    "-3"
]);