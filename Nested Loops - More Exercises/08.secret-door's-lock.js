function secretDoorLock(num1, num2, num3) {
    for (let i = 1; i <= num1; i++) {
        for (let y = 1; y <= num2; y++) {
            for (let z = 1; z <= num3; z++) {
                if (i % 2 === 0 && z % 2 === 0) {
                    if (y === 2 || y === 3 || y === 5 || y === 7) {
                        console.log(i, y, z);
                    }
                }
            }
        }
    }
}

secretDoorLock(8, 2, 8)