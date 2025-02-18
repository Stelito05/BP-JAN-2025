function salary(arr) {
    let openSitesCount = arr[0];
    let salary = arr[1];
    
    for (let i = 2; i < arr.length; i++) {
        let currentWebsite = arr[i];
        switch(currentWebsite) {
            case "Facebook": salary -= 150; break;
            case "Instagram": salary -= 100; break;
            case "Reddit": salary -= 50; break;
            default: salary -= 0;
        } 
        if (salary <= 0) {
            console.log("You have lost your salary.");
            return;
        }
    }
    console.log(salary);
}

salary([10, 750, "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook", "Instagram"]);