// data:
// initial amount
// annual contributions
// expected return
// duration

type InvestmentData = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number;
};

type InvestimentResult = {
    year: string;
    totalAmount: number;
    totalContributions: number;
    totalInterestEarned: number;

};

type CalculationResult = InvestimentResult[] | string;

function calculateInvestements(data: InvestmentData): CalculationResult {

    const { initialAmount, annualContribution, expectedReturn, duration } = data;

    if (initialAmount < 0) {
        return 'Initital Investement Amount should be great than 0';
    }

    if (duration < 0) {
        return 'No valid amount of years provided.';
    }

    if (expectedReturn < 0) {
        return 'Expected return must be at least zero.';
    }

    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;
    const annualResults: InvestimentResult[] = [];

    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution

        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContributions,
        });
    }
    return annualResults;
}

function printResults(results: CalculationResult) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    for (const yearEndResults of results) {
        console.log(yearEndResults.year);
        console.log(`Total: ${yearEndResults.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResults.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResults.totalInterestEarned.toFixed(0)}`);
        console.log('----------------------');

    }
}

const investementData: InvestmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.07,
    duration: 10,
};

const results = calculateInvestements(investementData);

printResults(results);
