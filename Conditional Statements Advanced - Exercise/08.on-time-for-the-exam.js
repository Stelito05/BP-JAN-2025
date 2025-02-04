function examTime(examHour, examMinute, arrivalHour, arrivalMinute) {
    let status = '';
    let totalExamMin = (examHour * 60) + examMinute;
    let totalArrivalMin = (arrivalHour * 60) + arrivalMinute;
    let minDiff = totalExamMin - totalArrivalMin;

    if (minDiff >= 0 && minDiff <= 30) {
        status = 'On time';
    } else if (minDiff > 30) {
        status = 'Early';
    } else {
        status = 'Late';
    }

    let hour = Math.trunc(minDiff / 60);
    let minute = minDiff % 60;

    if (minDiff >= 1 && minDiff < 60) {
        console.log(status);
        console.log(`${minDiff} minutes before the start`);
    } else if (minDiff >= 60) {
        console.log(status);
        if (minute < 10) {
            console.log(`${hour}:0${minute} hours before the start`);
        } else {
            console.log(`${hour}:${minute} hours before the start`);  
        }
    } else if (minDiff < 0 && minDiff > -60) {
        console.log(status);
        console.log(`${Math.abs(minDiff)} minutes after the start`);
    } else if (minDiff <= -60) {
        console.log(status);
        if (minute > -10) {
            console.log(`${Math.abs(hour)}:0${Math.abs(minute)} hours after the start`);
        } else {
            console.log(`${Math.abs(hour)}:${Math.abs(minute)} hours after the start`);  
        }
    } else {
        console.log(status);
    }
}

examTime(11, 30, 12, 29);
    

