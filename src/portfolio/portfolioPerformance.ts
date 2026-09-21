export function calculatePortfolioPerformance(initialInvestment: number, currentValue: number): any {
    
    const profitOrLoss = currentValue - initialInvestment;
    const percentageChange = (profitOrLoss / initialInvestment) * 100;

    let performanceSummary;

    switch (true) { 
        // Percentage is greater or equal to 30 
        case percentageChange >= 30:
            performanceSummary = "Excellent performance! Your investments are doing great."
            break;

        // Percentage is greater or equal to 10
        case percentageChange >= 10:
            performanceSummary = "Solid gain. Keep monitoring your investments."
            break;

        // Percentage is greater than 0
        case percentageChange > 0:
            performanceSummary = "Modest gain. Your portfolio is growing slowly."
            break;

        // Percentage is equal to 0
        case percentageChange == 0:
            performanceSummary = "No change. Your portfolio is holding steady."
            break;

        // Percentage is greater than -10
        case percentageChange >= -10:
            performanceSummary = "Minor loss. Stay calm and review your options."
            break;

        // Percentage is less than -10
        default:
            performanceSummary = "Significant loss. Review your portfolio strategy."
            break;
    }

    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}