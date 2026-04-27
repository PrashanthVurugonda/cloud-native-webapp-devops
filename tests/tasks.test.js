jest.mock("../src/services/taskService", () => ({
  createTask: jest.fn().mockResolvedValue({ id: 1, title: "Task 1", status: "pending" }),
  getTasks: jest.fn().mockResolvedValue([{ id: 1, title: "Task 1", status: "pending" }]),
  getTaskById: jest.fn().mockResolvedValue({ id: 1, title: "Task 1", status: "pending" }),
  updateTask: jest.fn().mockResolvedValue({ id: 1, title: "Task 1 updated", status: "done" }),
  deleteTask: jest.fn().mockResolvedValue(true),
}));

const request = require("supertest");
const app = require("../src/app");

describe("Task API", () => {
  it("creates a task", async () => {
    const response = await request(app).post("/api/v1/tasks").send({ title: "Task 1" });
    expect(response.status).toBe(201);
  });

  it("lists tasks", async () => {
    const response = await request(app).get("/api/v1/tasks");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
