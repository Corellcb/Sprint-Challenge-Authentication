const request = require('supertest');

const server = require('../api/server');

describe("GET /api/cohorts", function () {
    it("should return 200 OK", function () {
        return request(server)
            .get("/api/jokes")
            .then(res => {
                expect(res.status).toBe(401);
            });
    });

    it("should return JSON formatted body", function () {
        return request(server)
            .get("/api/jokes")
            .then(res => {
                expect(res.type).toMatch(/json/);
            });
    });
});