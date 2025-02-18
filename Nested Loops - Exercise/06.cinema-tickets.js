function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++;

    let standardTicketsCount = 0;
    let kidTicketsCount = 0;
    let studentTicketsCount = 0;
    let allTickets = 0;

    while (command !== "Finish") {
        let totalSeats = Number(input[index]);
        index++;
        let ticketType = input[index];
        index++;
        let totalTicketsPerFilm = 0;

        while (ticketType !== "End") {
            switch (ticketType) {
                case "standard": standardTicketsCount++; break;
                case "kid": kidTicketsCount++; break;
                case "student": studentTicketsCount++; break;
            }
            totalTicketsPerFilm++;
            allTickets++;

            if (totalTicketsPerFilm === totalSeats) {
                break;
            }

            ticketType = input[index];
            index++;
        }

        let percentFilled = (totalTicketsPerFilm / totalSeats) * 100;
        console.log(`${command} - ${percentFilled.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }

    let standardTicketsPercent = (standardTicketsCount / allTickets) * 100;
    let kidTicketsPercent = (kidTicketsCount / allTickets) * 100;
    let studentTicketsPercent = (studentTicketsCount / allTickets) * 100;

    console.log(`Total tickets: ${allTickets}`);
    console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardTicketsPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidTicketsPercent.toFixed(2)}% kids tickets.`);
}

cinemaTickets([
    "The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"]);