import request from "supertest";
import { Response } from "supertest";
import app from "../src/app";
import { response } from "express";

describe("GET /api/v1/health", () => {
    it("should return server health status", async () => {
        const response: Response = await request(app).get("/api/v1/health");

        expect(response.body).toHaveProperty("uptime");
        expect(response.body).toHaveProperty("timestamp");
        expect(response.body).toHaveProperty("version");
        expect(response.body).toHaveProperty("status");
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("OK");
    });
});

describe("GET /api/v1/portfolio/performance", () => {
    it("performanceSummary should be a specific message when percentageChange is above or equal to 30", async () => {
       const response: Response = await request(app).get("/api/v1/portfolio/performance").query(
        {initialInvestment: 10000, currentValue: 13000})

        expect(response.body.performanceSummary).toBe("Excellent performance! Your investments are doing great.")
    });
});

describe("GET /api/v1/portfolio/performance", () => {
    it("performanceSummary should be a specific message when percentageChange is above or equal to 10", async () => {
       const response: Response = await request(app).get("/api/v1/portfolio/performance").query(
        {initialInvestment: 10000, currentValue: 11000})

        expect(response.body.performanceSummary).toBe("Solid gain. Keep monitoring your investments.")
    });
});

describe("GET /api/v1/portfolio/performance", () => {
    it("performanceSummary should be a specific message when percentageChange is above 0", async () => {
       const response: Response = await request(app).get("/api/v1/portfolio/performance").query(
        {initialInvestment: 10000, currentValue: 10000.1})

        expect(response.body.performanceSummary).toBe("Modest gain. Your portfolio is growing slowly.")
    });
});

describe("GET /api/v1/portfolio/performance", () => {
    it("performanceSummary should be a specific message when percentageChange is equal to 0", async () => {
       const response: Response = await request(app).get("/api/v1/portfolio/performance").query(
        {initialInvestment: 10000, currentValue: 10000})

        expect(response.body.performanceSummary).toBe("No change. Your portfolio is holding steady.")
    });
});

describe("GET /api/v1/portfolio/performance", () => {
    it("performanceSummary should be a specific message when percentageChange is above or equal to -10", async () => {
       const response: Response = await request(app).get("/api/v1/portfolio/performance").query(
        {initialInvestment: 10000, currentValue: 9000})

        expect(response.body.performanceSummary).toBe("Minor loss. Stay calm and review your options.")
    });
});


describe("GET /api/v1/portfolio/performance", () => {
    it("performanceSummary should be a specific message when percentageChange is less than -10", async () => {
       const response: Response = await request(app).get("/api/v1/portfolio/performance").query(
        {initialInvestment: 10000, currentValue: 8999})

        expect(response.body.performanceSummary).toBe("Significant loss. Review your portfolio strategy.")
    });
});
