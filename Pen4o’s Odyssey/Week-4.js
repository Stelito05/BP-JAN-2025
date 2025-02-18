function happyNumberStatues(startNumber, endNumber) {
    let isFound = false;
    
    for (let i = startNumber; i <= endNumber; i++) {
        let numStr = i.toString();
        let reverseNumStr = numStr.split('').reverse().join('');
        
        if (numStr === reverseNumStr) {
            if (i % 2 === 0) {
                if (i % 3 === 0) {
                    isFound = true;
                    console.log(i);
                }
            }
        }
    }

    if (!isFound) {
        console.log("The statues remain silent…");
    }
}

happyNumberStatues(50, 60);