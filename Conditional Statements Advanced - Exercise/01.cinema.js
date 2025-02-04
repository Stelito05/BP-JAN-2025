// function cinemaTicketsProfit(projectionType, rows, columns) {
//     let totalTickets = rows * columns;
//     switch (projectionType) {
//         case "Premiere": totalTickets *= 12; break;
//         case "Normal": totalTickets *= 7.5; break;
//         case "Discount": totalTickets *= 5; break;
//     }
//     console.log(totalTickets.toFixed(2) + " leva");
// }

// cinemaTicketsProfit("Discount", 12, 30);
function cinemaTicketsProfit(projectionType, rows, columns) {
    let totalTickets = rows * columns;
    if (projectionType === "Premiere") {
        totalTickets *= 12;
    } else if (projectionType === "Normal") {
        totalTickets *= 7.5;
    } else if (projectionType === "Discount") {
        totalTickets *= 5;
    }
    console.log(`${totalTickets.toFixed(2)} leva`);
}

cinemaTicketsProfit("Discount", 12, 30);


