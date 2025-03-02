function clock() {
    for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute++) {
            if (hour < 10) {
                if (minute < 10) {
                    console.log(`0${hour} : 0${minute}`);
                } else {
                    console.log(`0${hour} : ${minute}`)
                }
            } else {
                if (minute < 10) {
                    console.log(`${hour} : 0${minute}`)
                } else {
                    console.log(`${hour} : ${minute}`)
                } 
            } 
        }
    }
}

clock();