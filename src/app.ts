import express, { Express } from "express";
import { calculatePortfolioPerformance } from "./portfolio/portfolioPerformance";

const app: Express = express();

interface HealthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
}

interface portfolioPerformance {
        initialInvestment: number,
        currentValue: number,
        profitOrLoss: number,
        percentageChange: number,
        performanceSummary: string,
}

app.get("/api/v1/health", (req, res) => {
    const healthData: HealthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0"
    };

    res.json(healthData);
});

app.get("/api/v1/portfolio/performance", (req, res) => {
    const initialInvestment = Number(req.query.initialInvestment);
    const currentValue = Number(req.query.currentValue);

    const portfolioData = calculatePortfolioPerformance(initialInvestment, currentValue)

    const portfolioInterface: portfolioPerformance = {
        initialInvestment: portfolioData.initialInvestment,
        currentValue: portfolioData.currentValue,
        percentageChange: portfolioData.percentageChange,
        performanceSummary: portfolioData.performanceSummary,
        profitOrLoss: portfolioData.profitOrLoss
    }

    res.json(portfolioInterface);
});

export default app;