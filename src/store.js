// In-memory task store with seed data
const DEFAULT_TASK = { done: false, tags: [] };

let nextId = 1;
export const tasks = [];

export function createTask({ title, ownerId, tags }) {
  const task = Object.assign(DEFAULT_TASK, { id: nextId++, title, ownerId });
  if (tags) task.tags.push(...tags);
  tasks.push({ ...task });
  return tasks[tasks.length - 1];
}

export function reset() {
  tasks.length = 0;
  nextId = 1;
  DEFAULT_TASK.tags = [];
  const seed = [
    ["Write PRD draft", 1],
    ["Set up repo", 1],
    ["Design login page", 2],
    ["Buy snacks for meeting", 2],
    ["Review PR #3", 1],
    ["Deploy to Render", 3],
    ["write test plan", 3],
  ];
  for (const [title, ownerId] of seed) createTask({ title, ownerId });
}

reset();
