function lunchBreakTime(seriesName, episodeDuration, breakDuration) {
    let filledTime = (1 / 8) * breakDuration + (1 / 4) * breakDuration;
    let leftTime = breakDuration - filledTime;

    let timeDiff = Math.ceil(Math.abs(leftTime - episodeDuration));
    if (episodeDuration <= leftTime) {
        console.log(`You have enough time to watch ${seriesName} and left with ${timeDiff} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${timeDiff} more minutes.`);
    }
}

lunchBreakTime("Teen Wolf", 48, 60);