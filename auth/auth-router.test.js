const request = require('supertest');

const server = require('../api/server');

describe("POST /api/auth/register", function () {
    it("should return 201 Created",  async function () {
        const user = {
            username: 'jest25',
            password: 'pass'
        };
        return await request(server)
            .post("/api/auth/register")
            .send(user)
            .then(res => {
                expect(res.status).toBe(201);
            });
    });
});

describe("POST /api/auth/login", function () {
    it("should return 200 OK",  async function () {
        const user = {
            username: 'jest25',
            password: 'pass'
        };
        return await request(server)
            .post("/api/auth/login")
            .send(user)
            .then(res => {
                expect(res.status).toBe(200);
            });
    });
});