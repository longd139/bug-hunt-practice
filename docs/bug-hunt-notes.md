# 📝 BẢNG GHI CHÉP THỰC HÀNH BUG HUNT (SESSION 8)

- **Nhóm:** ...
- **Thành viên:** ...
- **Tổng thời gian hoàn thành:** ... phút
- **Số bug tìm và sửa được:** ... / 5 (Bậc 1: .../3, Bậc 2: .../2)

---

## BẢNG TỔNG HỢP 5 BUGS

### 🟡 BẬC 1: BẮT BUỘC (15 phút)

| Bug # | Triệu chứng lỗi (Symptom) | File & Dòng gây lỗi (Tự điều tra) | Giả thuyết ban đầu (Hypothesis) | Prompt đã dùng với AI | AI đoán đúng lần 1? (Yes/No) | Thời gian (phút) |
| :---: | :--- | :--- | :--- | :--- | :---: | :---: |
| **1** | Trang 1 bị mất task đầu tiên (`Write PRD draft`) | | | | | |
| **2** | Tìm kiếm `write` chỉ ra 1 kết quả dù có 2 tasks | | | | | |
| **3** | Lọc `?done=false` trả về kết quả sai hoặc rỗng | | | | | |

---

### 🔴 BẬC 2: THỬ THÁCH / NÂNG CAO (10 phút)

| Bug # | Triệu chứng lỗi (Symptom) | File & Dòng gây lỗi (Tự điều tra) | Giả thuyết ban đầu (Hypothesis) | Prompt đã dùng với AI | AI đoán đúng lần 1? (Yes/No) | Thời gian (phút) |
| :---: | :--- | :--- | :--- | :--- | :---: | :---: |
| **4** | User 2 xóa trộm được task của User 1 (Phân quyền) | | | | | |
| **5** | Tag `urgent` bị lây lan sang các task tạo sau đó | | | | | |

---

## 🔍 CHI TIẾT 1 TRƯỜNG HỢP AI ĐOÁN SAI (BẮT BUỘC THEO RUBRIC)

- **Bug số:** (Ví dụ: Bug 3 hoặc Bug 5)
- **AI đã đưa ra giả thuyết hoặc sửa sai như thế nào ở lần đầu?**
- **Tại sao con người cần can thiệp để chỉ ra nguyên nhân gốc rễ thật?**
- **Bài học kinh nghiệm rút ra:**

---

## 💡 3 QUY TẮC BỎ TÚI (HEURISTICS) KHI DÙNG AI SỬA CODE
*(Dựa trên dữ liệu thực tế nhóm bạn vừa trải nghiệm)*
1. *Quy tắc 1:* Luôn bắt AI viết test tái hiện lỗi thất bại trước khi cho phép sửa code.
2. *Quy tắc 2:* ...
3. *Quy tắc 3:* ...
