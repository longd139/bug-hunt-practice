// These tests pass, but they do NOT catch the seeded bugs. Your job: write tests that do.
import request from "supertest";
import { describe, it, expect, beforeEach } from "vitest";
import { app } from "../src/app.js";
import { reset } from "../src/store.js";

beforeEach(() => reset());

describe("tasks API – basic baseline", () => {
  it("lists tasks", async () => {
    const res = await request(app).get("/api/tasks");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.items)).toBe(true);
  });

  it("requires a title", async () => {
    const res = await request(app).post("/api/tasks").set("x-user-id", "1").send({ title: " " });
    expect(res.status).toBe(400);
  });

  it("creates a task", async () => {
    const res = await request(app).post("/api/tasks").set("x-user-id", "1").send({ title: "New" });
    expect(res.status).toBe(201);
    expect(res.body.title).toBe("New");
  });
});
