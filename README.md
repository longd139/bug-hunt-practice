# 🐛 Kho Thực Hành: Săn 5 Bugs Cùng AI (bug-hunt-practice)

> Bài thực hành trọng tâm cho **Session 8 (Part B - Bug Hunt)** trong học phần **Course 4: The Modern AI Software Developer (ADLC01)**.
> Giúp sinh viên rèn luyện quy trình debug khoa học cùng AI Agent: **Reproduce → Isolate → Hypothesise → Fix → Regression Test**.

---

## 🎯 Mục tiêu bài học (Sau bài này bạn làm được gì?)
1. Làm chủ quy trình 5 bước gỡ lỗi chuẩn kỹ nghệ phần mềm cùng AI.
2. Viết test tự động tái hiện lỗi (failing test) trước khi cho phép AI sửa code.
3. Rèn luyện phản xạ phát hiện ít nhất 1 tình huống **"lần đoán đầu tiên của AI bị sai"** và can thiệp kịp thời.
4. Xây dựng bộ quy tắc cá nhân (Heuristics) về thời điểm nên và không nên tin tưởng AI khi debug.

---

## ⚡ Bắt đầu trong 1 phút

```bash
# 1. Cài đặt thư viện
npm install

# 2. Chạy thử test cơ bản (hiện tại 3 tests cơ bản đang Pass)
npm test

# 3. Khởi động server (nếu muốn test thủ công qua trình duyệt / Postman)
npm start
# Server chạy tại: http://localhost:3000
```
*(Gửi kèm header `x-user-id: 1` hoặc `2`, `3` để giả lập người dùng đăng nhập)*

---

## 📋 5 Báo cáo lỗi từ người dùng (User Bug Reports)

Thời lượng thực hành trên lớp: **25 phút**. Để quản lý thời gian hiệu quả, bài tập được chia làm 2 bậc:

### 🟡 BẬC 1: BẮT BUỘC (Gợi ý: 15 phút - 5 phút/bug)
* **Bug 1 (Phân trang):** *"Ở trang 1 của danh sách công việc (`GET /api/tasks?page=1&limit=3`), tôi không bao giờ nhìn thấy task đầu tiên là 'Write PRD draft'."*
* **Bug 2 (Tìm kiếm):** *"Tìm kiếm từ khóa `write` (`GET /api/tasks?q=write`) chỉ ra đúng 1 task, trong khi thực tế có tới 2 task chứa chữ 'write' trong tiêu đề."*
* **Bug 3 (Lọc trạng thái):** *"Tôi lọc danh sách task chưa xong bằng `GET /api/tasks?done=false`, nhưng kết quả trả về lại trống rỗng hoặc ra task đã hoàn thành."*

### 🔴 BẬC 2: THỬ THÁCH / NÂNG CAO (Gợi ý: 10 phút)
* **Bug 4 (Lỗ hổng phân quyền BOLA):** *"User 2 có thể gửi lệnh `DELETE /api/tasks/:id` và xóa mất task thuộc quyền sở hữu của User 1!"*
* **Bug 5 (Lỗi rò rỉ dữ liệu / Object mutation):** *"Tôi tạo một task có tag `urgent`. Sau đó đồng đội của tôi tạo một task mới không hề có tag nào, nhưng nó cũng tự động bị gắn tag `urgent`."*

---

## 🤖 Mẫu Prompt chuẩn làm việc cùng Claude Code

### Bước 1: Yêu cầu AI viết Test tái hiện lỗi (Chưa được sửa code)
```text
Bug báo cáo: <Dán mô tả triệu chứng lỗi ở trên>
Các bước tái hiện: <Endpoint gọi, tham số hoặc header gửi lên>
Kết quả mong đợi: <Hành vi đúng>
Kết quả thực tế: <Hành vi sai hiện tại>

Hãy viết 1 bài test trong tests/bug-hunt.test.js để tái hiện lỗi này.
LƯU Ý: TUYỆT ĐỐI KHÔNG sửa code trong src/ lúc này. Chạy test và xác nhận test bị ĐỎ (FAIL).
```

### Bước 2: Đưa ra giả thuyết và yêu cầu AI sửa code
```text
Test tái hiện lỗi đã bị FAIL đúng như dự đoán.
Giả thuyết của tôi về nguyên nhân gốc rễ: <Tự điền giả thuyết của bạn sau khi đọc code>
Hãy kiểm tra code trong src/, xác nhận nguyên nhân và tiến hành sửa lỗi tại gốc rễ (Root Cause). Sau đó chạy `npm test` để kiểm tra lại toàn bộ.
```

---

## 📝 Nộp bài thực hành
Mỗi nhóm hoàn thành việc ghi chép lại hành trình săn lỗi vào file:
👉 **[docs/bug-hunt-notes.md](docs/bug-hunt-notes.md)** *(hoặc `docs/bug-hunt.md`)*.

---

## 📁 Cấu trúc thư mục

```
bug-hunt-practice/
├── src/
│   ├── app.js             # Express app chứa các API routes (chứa 4 bugs)
│   ├── server.js          # Khởi động server
│   └── store.js           # Bộ nhớ dữ liệu mẫu (chứa 1 bug)
├── tests/
│   ├── basic.test.js      # 3 test cơ bản (đang Pass)
│   └── bug-hunt.test.js   # Nơi bạn bổ sung test tái hiện cho từng bug
├── docs/
│   └── bug-hunt-notes.md  # Phiếu ghi chép kết quả nộp bài
├── .github/workflows/
│   └── ci.yml             # Tự động chạy test khi mở Pull Request
├── CLAUDE.md              # Quy tắc chỉ thị cho AI Agent
└── package.json
```

---

## 🚑 Khi bị kẹt (Troubleshooting)
* **Lỗi trùng cổng 3000:** Mở PowerShell gõ `netstat -ano | findstr :3000` rồi `taskkill /PID <số_PID> /F`.
* **AI tự ý sửa code trước khi viết test:** Nhấn `Ctrl + C`, chạy `git restore src/` và nhắc lại quy tắc *"Plan and write failing test first"*.
* **Muốn khôi phục lại trạng thái ban đầu:** `git restore . && git clean -fd`.
