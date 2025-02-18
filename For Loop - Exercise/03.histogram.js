function histogram(array) {
    let numCount = array[0];
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;

    for (let i = 1; i <= numCount; i++) {
        let currentNum = array[i];

        if (currentNum < 200) {
            count1++;
        } else if (currentNum < 400) {
            count2++;
        } else if (currentNum < 600) {
            count3++;
        } else if (currentNum < 800) {
            count4++;
        } else {
            count5++;
        }
    }

    let p1 = ((count1 / numCount) * 100).toFixed(2);
    let p2 = ((count2 / numCount) * 100).toFixed(2);
    let p3 = ((count3 / numCount) * 100).toFixed(2);
    let p4 = ((count4 / numCount) * 100).toFixed(2);
    let p5 = ((count5 / numCount) * 100).toFixed(2);

    //console.log(p1 + "%\n" + p2 + "%\n" + p3 + "%\n" + p4 + "%\n" + p5 + "%");
    console.log(`${p1}%\n${p2}%\n${p3}%\n${p4}%\n${p5}%`);
}

histogram([14, 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200])