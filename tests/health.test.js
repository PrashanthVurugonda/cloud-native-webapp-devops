jest.mock("../src/db", () => ({
  query: jest.fn().mockResolvedValue({ rows: [{ now: new Date() }] }),
}));

const request = require("supertest");
const app = require("../src/app");

describe("GET /health", () => {
  it("returns service health", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
  });
});
