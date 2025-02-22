function sleepyTomCat(daysOffCount) {
    let daysOffPlaying = daysOffCount * 127;
    let workingDaysCount = 365 - daysOffCount;
    let workingDaysPlaying = workingDaysCount * 63;

    let totalTimePlaying = daysOffPlaying + workingDaysPlaying;
    let timeDiff = Math.abs(totalTimePlaying - 30000);
    let hours = Math.floor(timeDiff / 60);
    let minutes = timeDiff - (hours * 60);

    if (totalTimePlaying > 30000) {
        console.log("Tom will run away");
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    } else {
        console.log("Tom sleeps well");
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }
}

sleepyTomCat(113);