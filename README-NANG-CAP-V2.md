# WEBSITE HIẾU TRẦN 94 — BẢN NÂNG CẤP V2

## Cấu trúc mới

- `/` — Trang chủ, giữ tone xanh navy/cyan và bố cục Hero + Dịch vụ cũ.
- `/dich-vu/livestream` — Trang riêng cho dịch vụ Livestream, hình ảnh năng lực, cấu hình gói và bảng hạng mục bổ sung.
- `/mmo` — Gian hàng sản phẩm MMO tách khỏi trang chủ.
- `/san-pham/sp01` đến `/san-pham/sp18` — Trang chi tiết từng sản phẩm.
- `/shop` — Trang Affiliate Shopee.

## Sửa giá Livestream

Mở file:

```text
lib/livestream-packages.ts
```

Thay nội dung trường `price` của từng gói bằng giá chính thức. Hiện tại để `Liên hệ báo giá` nhằm tránh hiển thị sai giá dịch vụ.

## Sửa sản phẩm Affiliate

Mở file:

```text
lib/affiliate-products.ts
```

Thay tên, mô tả, ảnh và link Shopee Affiliate.

## Chạy local

```bash
npm install
npm run dev
```

Sau đó mở:

```text
http://localhost:3000
```

## Kiểm tra production

```bash
npm run build
npm run start
```
