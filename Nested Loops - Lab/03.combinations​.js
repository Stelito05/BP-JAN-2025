function combinations(n) {
    let combinationsCount = 0;

    for (let x1 = 0; x1 <= n; x1++) {
        for (x2 = 0; x2 <= n; x2++) {
            for (x3 = 0; x3 <= n; x3++) {
                let sum = x1 + x2 + x3;
                if (sum === n) {
                    combinationsCount++
                }
            }
        }
    }
    console.log(combinationsCount);
}

combinations(5);