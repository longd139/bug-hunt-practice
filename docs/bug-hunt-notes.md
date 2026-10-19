# 📝 BẢNG GHI CHÉP THỰC HÀNH BUG HUNT (SESSION 8)

- **Nhóm:** ...
- **Thành viên:** ...
- **Thời gian hoàn thành:** ... phút
- **Số bug tìm và sửa được:** ... / 5

---

## BẢNG TỔNG HỢP 5 BUGS

| Bug # | Triệu chứng (Symptom) | File & Dòng gây lỗi | Giả thuyết ban đầu (Hypothesis) | AI đoán đúng ngay lần 1? (Yes/No) | Cách sửa tận gốc (Root Cause Fix) |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **1** | Trang 1 bị mất task đầu tiên (`Write PRD draft`) | `src/app.js` | | | |
| **2** | Tìm kiếm `write` chỉ ra 1 kết quả dù có 2 tasks | `src/app.js` | | | |
| **3** | Lọc `?done=false` trả về kết quả sai hoặc rỗng | `src/app.js` | | | |
| **4** | User 2 xóa trộm được task của User 1 (Lỗ hổng phân quyền BOLA) | `src/app.js` | | | |
| **5** | Tag `urgent` bị lây lan sang các task tạo sau đó | `src/store.js` | | | |

---

## 🔍 CHI TIẾT 1 TRƯỜNG HỢP AI ĐOÁN SAI (BẮT BUỘC THEO RUBRIC)

- **Bug số:** (Ví dụ: Bug 3 hoặc Bug 5)
- **AI đã đoán sai như thế nào?**
- **Tại sao con người cần can thiệp để chỉ ra nguyên nhân thật?**
- **Bài học rút ra khi tin tưởng AI debug:**

---

## 💡 3 QUY TẮC BỎ TÚI (HEURISTICS) KHI DÙNG AI SỬA CODE
1. *Quy tắc 1:* Luôn bắt AI viết test tái hiện lỗi thất bại trước khi cho phép sửa code.
2. *Quy tắc 2:* ...
3. *Quy tắc 3:* ...
