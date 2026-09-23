# MCW Launcher Web Portal

Trang web portal thế hệ mới của **MCW Launcher**, được thiết kế theo phong cách **Neo-Cyber Obsidian & Holographic HUD**, tối ưu hoá triển khai tự động qua **Cloudflare Pages**.

## Tính Năng Nổi Bật

- **Interactive Hologram 3D Canvas**: Khối lập phương holographic xoay chuyển theo tương tác chuột người dùng.
- **Left-Dock Navigation HUD**: Thanh điều hướng bên trái phong cách cyberpunk anime, tinh gọn và mượt mà.
- **Smart Download Matrix**: Tự động nhận diện hệ điều hành (Windows / Linux) và chuyển đổi linh hoạt giữa **Server VN (Tốc độ cao)** và **Server Quốc tế**.
- **Developer Hub**: Trình xem code mẫu Python cho thư viện headless `mcw-core` với nút copy nhanh.
- **Song ngữ thông minh**: Chuyển đổi mượt mà giữa Tiếng Việt (VI) và Tiếng Anh (EN).

## Cấu Hình Triển Khai Trên Cloudflare Pages

Khi kết nối repository này với Cloudflare Pages:

| Cấu hình | Giá trị |
|---|---|
| **Framework preset** | `Vite` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Node.js Version** | `>= 18` |

Cloudflare Pages sẽ tự động cài đặt `npm dependencies`, biên dịch và phân phối lên mạng lưới toàn cầu chỉ trong vài giây.

## Chạy Thử Nghiệm Tại Local

```bash
# Cài đặt dependencies
npm install

# Khởi chạy server phát triển
npm run dev

# Biên dịch sản phẩm
npm run build
```

## Bản Quyền & Giấy Phép

Phát hành theo giấy phép [MIT License](LICENSE).
Minecraft là thương hiệu đã đăng ký của Mojang Studios / Microsoft Corporation.
