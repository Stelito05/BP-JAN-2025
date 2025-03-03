function numbersDividedby3WithoutReminder() {
    for (let num = 1; num <= 100; num++) {
        if (num % 3 === 0) {
            console.log(num);
        }
    }
}

numbersDividedby3WithoutReminder();