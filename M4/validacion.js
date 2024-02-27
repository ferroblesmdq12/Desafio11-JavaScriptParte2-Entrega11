function checkProfitOrLoss(cashFlow) {
    const totalCashFlow = cashFlow.reduce((acc, curr) => acc + curr, 0);
    return totalCashFlow < 0 ? -1 : (totalCashFlow > 0 ? 1 : 0);
}
