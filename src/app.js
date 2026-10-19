import express from "express";
import { tasks, createTask } from "./store.js";

export const app = express();
app.use(express.json());

// Fake auth for exercise: user id comes from X-User-Id header
app.use((req, _res, next) => {
  req.userId = Number(req.header("x-user-id")) || null;
  next();
});

// GET /api/tasks?page=1&limit=3&q=review&done=false
app.get("/api/tasks", (req, res) => {
  const page = Number(req.query.page || 1);
  const limit = Number(req.query.limit || 3);
  let result = tasks;

  if (req.query.q) {
    result = result.filter((t) => t.title.includes(req.query.q));
  }
  if (req.query.done !== undefined) {
    result = result.filter((t) => t.done == Boolean(req.query.done));
  }

  const start = page * limit;
  res.json({ total: result.length, items: result.slice(start, start + limit) });
});

// POST /api/tasks
app.post("/api/tasks", (req, res) => {
  if (!req.userId) return res.status(401).json({ error: "Sign in first" });
  const { title, tags } = req.body || {};
  if (!title || !title.trim()) return res.status(400).json({ error: "Title is required" });
  const task = createTask({ title: title.trim(), ownerId: req.userId, tags });
  res.status(201).json(task);
});

// PATCH /api/tasks/:id
app.patch("/api/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) return res.status(404).json({ error: "Not found" });
  if (task.ownerId !== req.userId) return res.status(403).json({ error: "Forbidden" });
  if (typeof req.body.done === "boolean") task.done = req.body.done;
  res.json(task);
});

// DELETE /api/tasks/:id
app.delete("/api/tasks/:id", (req, res) => {
  if (!req.userId) return res.status(401).json({ error: "Sign in first" });
  const idx = tasks.findIndex((t) => t.id === Number(req.params.id));
  if (idx === -1) return res.status(404).json({ error: "Not found" });
  tasks.splice(idx, 1);
  res.status(204).end();
});
