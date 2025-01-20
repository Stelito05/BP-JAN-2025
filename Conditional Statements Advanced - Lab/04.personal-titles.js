function personalTitles(age, gender) {
    // if (gender === "m") {
    //     if (age >= 16) {
    //         console.log("Mr.");
    //     } else {
    //         console.log("Master");
    //     }
    // } else if (gender === "f") {
    //     if (age >= 16) {
    //         console.log("Ms.");
    //     } else {
    //         console.log("Miss");
    //     }
    // }
    switch (gender) {
        case "m":
            if (age >= 16) {
                console.log("Mr.");
            } else {
                console.log("Master");
            }
        break;
        case "f":
            if (age >= 16) {
                console.log("Ms.");
            } else {
                console.log("Miss"); 
            }
        break;
        }
    }
    
    personalTitles(12, "f");

