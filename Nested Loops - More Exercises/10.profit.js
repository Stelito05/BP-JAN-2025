function profit(count1Lv, count2Lv, count5Lv, expectedSum) {
    let sum = 0;

    for (let i = 0; i <= count1Lv; i++) {
        for (let y = 0; y <= count2Lv; y++) {
            for (let z = 0; z <= count5Lv; z++) {
                sum = (i * 1) + (y * 2) + (z * 5);

                if (sum === expectedSum) {
                    console.log(`${i} * 1 lv. + ${y} * 2 lv. + ${z} * 5 lv. = ${expectedSum} lv.`);
                }
            }
        }
    }
}

profit(5, 3, 1, 7);