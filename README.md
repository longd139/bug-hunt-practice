# 🐛 Kho Thực Hành: Săn 5 Bugs Cùng AI (Bug-Hunt Practice Repo)

> Bài thực hành trọng tâm cho **Session 8 (Code Review & Debugging with AI)** và **Session 7 (Secure AI Code)**.
> Dành cho học sinh làm quen với quy trình debug chuẩn kỹ nghệ phần mềm với AI: **Reproduce → Isolate → Hypothesise → Fix → Regression Test**.

---

## 🎯 Mục tiêu bài tập
Ứng dụng Task API này đang hoạt động và vượt qua các bài test cơ bản (`npm test`), nhưng người dùng báo cáo có **5 lỗi logic và bảo mật nghiêm trọng**.

Nhiệm vụ của bạn:
1. Đọc báo cáo lỗi từ người dùng.
2. Dùng Claude Code viết **test tái hiện lỗi** (test này phải ĐỎ / FAIL trước).
3. Yêu cầu AI phân tích nguyên nhân gốc rễ và sửa code.
4. Chạy lại test đảm bảo toàn bộ bài test chuyển sang XANH (PASS).
5. Ghi lại kết quả vào file [docs/bug-hunt-notes.md](file:///d:/FPT/project/Course4_ModernAISoftwareDeveloper_Materials/Bug_Hunt_Practice_Repo/docs/bug-hunt-notes.md).

---

## ⚡ Bắt đầu trong 1 phút

```bash
# 1. Cài đặt thư viện
npm install

# 2. Chạy thử test cơ bản (hiện tại đang Pass)
npm test

# 3. Khởi động server (tùy chọn để test tay bằng Postman / Curl)
npm start
# Server chạy tại: http://localhost:3000
```
*(Gửi header `x-user-id: 1` hoặc `2`, `3` để giả lập người dùng đăng nhập)*

---

## 📋 5 Báo cáo lỗi từ người dùng (5 User Bug Reports)

1. **Bug 1 (Phân trang):** *"Ở trang 1 của danh sách task (`GET /api/tasks?page=1&limit=3`), tôi không bao giờ nhìn thấy task đầu tiên là 'Write PRD draft'."*
2. **Bug 2 (Tìm kiếm):** *"Tìm kiếm từ khóa `write` chỉ ra đúng 1 task, trong khi thực tế có tới 2 task chứa chữ 'write' trong tiêu đề."*
3. **Bug 3 (Lọc trạng thái):** *"Tôi lọc danh sách task chưa xong bằng `?done=false`, nhưng kết quả trả về lại trống rỗng hoặc ra task đã xong."*
4. **Bug 4 (Lỗ hổng phân quyền BOLA):** *"User 2 có thể gửi lệnh DELETE và xóa mất task thuộc quyền sở hữu của User 1!"*
5. **Bug 5 (Lỗi rò rỉ dữ liệu / Memory mutation):** *"Tôi tạo một task có tag `urgent`. Sau đó đồng đội của tôi tạo một task mới không hề có tag nào, nhưng nó cũng tự động bị gắn tag `urgent`."*

---

## 🤖 Mẫu câu Prompt chuẩn hướng dẫn Claude Code

### Bước 1: Yêu cầu AI viết Test tái hiện lỗi (Chưa được sửa code)
```text
Bug: Trang 1 của API phân trang đang bị mất task đầu tiên 'Write PRD draft'.
Các bước tái hiện: Gọi GET /api/tasks?page=1&limit=3.
Kết quả mong đợi: items[0].title là 'Write PRD draft'.
Kết quả thực tế: items[0] là task thứ hai.

Hãy viết 1 bài test trong tests/bug-hunt.test.js để tái hiện lỗi này. TUYỆT ĐỐI KHÔNG sửa code trong src/ lúc này. Chạy test để chứng minh test bị FAIL.
```

### Bước 2: Yêu cầu AI phân tích nguyên nhân & sửa lỗi
```text
Test tái hiện lỗi đã bị FAIL đúng như dự đoán.
Giả thuyết của tôi: Công thức tính vị trí start phân trang đang bị lệch 1 chỉ số (0-based vs 1-based index).
Hãy kiểm tra code trong src/app.js, xác nhận nguyên nhân và tiến hành sửa lỗi tận gốc. Sau đó chạy npm test để kiểm tra lại toàn bộ.
```

---

## 📁 Cấu trúc thư mục

```
Bug_Hunt_Practice_Repo/
├── src/
│   ├── app.js             # Express app chứa các route logic (có 4 bugs)
│   ├── server.js          # Khởi động server
│   └── store.js           # Bộ nhớ dữ liệu mẫu (có 1 bug mutation)
├── tests/
│   ├── basic.test.js      # Test ban đầu (đang pass)
│   └── bug-hunt.test.js   # Nơi học sinh bổ sung 5 test tái hiện lỗi
├── docs/
│   └── bug-hunt-notes.md  # Phiếu ghi chép kết quả nộp bài
├── CLAUDE.md              # File chỉ thị nguyên tắc cho AI
└── package.json
```
