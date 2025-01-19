function sumOfSeconds(player1, player2, player3) {
    let totalTime = player1 + player2 + player3;
    let minutes = Math.trunc(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumOfSeconds(50, 50, 49);