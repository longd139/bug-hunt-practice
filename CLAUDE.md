# CLAUDE.md

> Cấu hình dành cho Claude Code trong bài thực hành Bug Hunt (Session 8).

## Mục tiêu
Dự án này là một REST API siêu nhỏ (Express, Node.js) chứa **5 lỗi logic và bảo mật cố ý**. 
Nhiệm vụ của bạn là hỗ trợ lập trình viên tìm, tái hiện và sửa tận gốc 5 lỗi này theo quy trình kiểm thử nghiêm ngặt.

## Nguyên tắc bắt buộc (Workflow Rules)
1. **Tuyệt đối KHÔNG sửa code ngay lập tức**: Khi người dùng mô tả một bug, việc đầu tiên là viết một test trong `tests/bug-hunt.test.js` để **tái hiện lỗi (test này phải FAIL trước)**.
2. **Nêu giả thuyết (Hypothesis)**: Giải thích ngắn gọn tại sao lỗi xảy ra ở mức logic hoặc data type.
3. **Sửa đúng nguyên nhân gốc rễ (Root Cause)**: Không dùng mánh lừa (workaround) hoặc sửa test để làm xanh. 
4. **Kiểm thử hồi quy (Regression Test)**: Sau khi sửa, chạy `npm test` để đảm bảo:
   - Test mới viết đã PASS.
   - Các test gốc trong `tests/basic.test.js` vẫn PASS.

## Lệnh thực thi
```bash
npm test            # Chạy toàn bộ test suite
npm run test:watch  # Chạy test ở chế độ theo dõi
```
