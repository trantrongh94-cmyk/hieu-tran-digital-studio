export type AffiliateCategory = 'Nổi bật' | 'Livestream' | 'Công nghệ' | 'Góc làm việc' | 'Gia dụng'

export type AffiliateProduct = {
  id: string
  name: string
  category: Exclude<AffiliateCategory, 'Nổi bật'>
  description: string
  badge?: string
  featured?: boolean
  image?: string
  affiliateUrl: string
}

/**
 * CÁCH CẬP NHẬT:
 * 1. Đổi name, description và category.
 * 2. Dán link Shopee Affiliate vào affiliateUrl.
 * 3. Có thể thêm ảnh vào public/shop rồi khai báo image: '/shop/ten-anh.jpg'.
 * 4. featured: true để sản phẩm xuất hiện trong tab Nổi bật.
 */
export const affiliateProducts: AffiliateProduct[] = [
  {
    id: 'micro-khong-day',
    name: 'Micro không dây cho điện thoại',
    category: 'Livestream',
    description: 'Gọn nhẹ, phù hợp quay TikTok, phỏng vấn và livestream bán hàng.',
    badge: 'Đề xuất',
    featured: true,
    affiliateUrl: 'https://shopee.vn/',
  },
  {
    id: 'den-led-mini',
    name: 'Đèn LED mini hỗ trợ quay video',
    category: 'Livestream',
    description: 'Bổ sung ánh sáng cho khuôn mặt và sản phẩm khi quay trong phòng.',
    badge: 'Phổ biến',
    featured: true,
    affiliateUrl: 'https://shopee.vn/',
  },
  {
    id: 'tripod-dien-thoai',
    name: 'Tripod điện thoại đa năng',
    category: 'Livestream',
    description: 'Dùng cho quay dọc, chụp sản phẩm, livestream và video hướng dẫn.',
    featured: true,
    affiliateUrl: 'https://shopee.vn/',
  },
  {
    id: 'capture-card',
    name: 'Capture card HDMI USB',
    category: 'Công nghệ',
    description: 'Kết nối camera với máy tính để livestream hoặc ghi hình cơ bản.',
    badge: 'Cho creator',
    affiliateUrl: 'https://shopee.vn/',
  },
  {
    id: 'webcam-full-hd',
    name: 'Webcam Full HD',
    category: 'Công nghệ',
    description: 'Phù hợp họp trực tuyến, livestream và ghi hình tại bàn làm việc.',
    affiliateUrl: 'https://shopee.vn/',
  },
  {
    id: 'gia-do-dien-thoai',
    name: 'Giá đỡ điện thoại để bàn',
    category: 'Góc làm việc',
    description: 'Tối ưu góc nhìn khi làm việc, gọi video hoặc theo dõi nội dung.',
    featured: true,
    affiliateUrl: 'https://shopee.vn/',
  },
  {
    id: 'ban-phim-co',
    name: 'Bàn phím cơ nhỏ gọn',
    category: 'Góc làm việc',
    description: 'Bố cục gọn, phù hợp góc làm việc creator và người làm MMO.',
    affiliateUrl: 'https://shopee.vn/',
  },
  {
    id: 'o-cam-da-nang',
    name: 'Ổ cắm điện đa năng',
    category: 'Gia dụng',
    description: 'Sắp xếp nguồn điện gọn hơn cho bàn làm việc và thiết bị quay.',
    affiliateUrl: 'https://shopee.vn/',
  },
]
