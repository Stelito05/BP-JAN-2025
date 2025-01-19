function neededHoursForBook(pageCount, pageCountPerHour, days) {
    let hoursNeededPerDay = ((pageCount / pageCountPerHour) / days)
    console.log(hoursNeededPerDay);
}

neededHoursForBook(432, 15, 4);
