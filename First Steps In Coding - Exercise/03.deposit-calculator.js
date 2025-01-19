function calculateDeposits(depositSum, depositTime, yearPercentage) {
    let allDepositSum = depositSum + depositTime * ((depositSum * (yearPercentage / 100)) / 12);
    console.log(allDepositSum);
}

calculateDeposits(2350, 6, 7);