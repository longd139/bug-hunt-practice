/**
 * BÀI TẬP SESSION 8: BUG HUNT (SĂN 5 BUGS VỚI AI)
 * 
 * Quy tắc:
 * 1. Với mỗi bug: Viết 1 test tái hiện lỗi (test này PHẢI FAIL trước khi sửa code).
 * 2. Yêu cầu AI đưa giả thuyết (hypothesis) và sửa root cause.
 * 3. Chạy lại test: cả 5 tests mới và 3 tests cũ trong basic.test.js đều phải PASS.
 */
import request from "supertest";
import { describe, it, expect, beforeEach } from "vitest";
import { app } from "../src/app.js";
import { reset } from "../src/store.js";

beforeEach(() => reset());

describe("Bug Hunt Suite (Học sinh bổ sung test tái hiện lỗi tại đây)", () => {
  // BUG 1: "On page 1 of the task list, I never see the first task, 'Write PRD draft'."
  it.skip("Bug 1 - Page 1 should return the very first task in the list", async () => {
    // TODO: Viết test gọi GET /api/tasks?page=1&limit=3
    // Kỳ vọng: items[0].title === 'Write PRD draft'
  });

  // BUG 2: "Searching for 'write' finds only one task, but there are two tasks with 'write' in title."
  it.skip("Bug 2 - Search query 'q' should be case-insensitive", async () => {
    // TODO: Viết test gọi GET /api/tasks?q=write
    // Kỳ vọng: total === 2 (tìm thấy cả 'Write PRD draft' và 'write test plan')
  });

  // BUG 3: "I asked for unfinished tasks with ?done=false, and I got nothing or wrong tasks."
  it.skip("Bug 3 - Filtering ?done=false should correctly parse boolean query string", async () => {
    // TODO: Viết test gọi GET /api/tasks?done=false
    // Kỳ vọng: tất cả task trả về đều có done === false
  });

  // BUG 4: "User 2 managed to delete one of user 1's tasks!"
  it.skip("Bug 4 - User should NOT be able to delete another user's task (Expect 403)", async () => {
    // TODO: User 2 cố tình xóa task của User 1 (DELETE /api/tasks/1 với X-User-Id: 2)
    // Kỳ vọng: HTTP status 403 Forbidden
  });

  // BUG 5: "Creating a task with tag 'urgent' leaks the tag to subsequent tasks created without tags."
  it.skip("Bug 5 - Tags should NOT leak between tasks due to shared reference mutation", async () => {
    // TODO: User 1 tạo task với tags: ['urgent'].
    // Sau đó User 2 tạo task không có tags.
    // Kỳ vọng: Task của User 2 có tags rỗng, không bị dính tag 'urgent'
  });
});
