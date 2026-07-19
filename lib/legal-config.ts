/*
===============================================================================
FILE CẤU HÌNH DÙNG CHUNG CHO 3 TRANG PHÁP LÝ
ĐƯỜNG DẪN: lib/legal-config.ts

Bạn chỉ cần sửa thông tin trong file này. Ba trang Privacy Policy,
Terms of Service và Data Deletion sẽ tự lấy lại nội dung mới.
===============================================================================
*/

export const legalConfig = {
  /* Tên cá nhân hoặc đơn vị trực tiếp sở hữu/vận hành các ứng dụng */
  operatorName: 'Hiếu Trần Media & Automation',

  /* Tên miền chính, không thêm dấu / ở cuối */
  websiteName: 'hieutran94mmo.com',
  websiteUrl: 'https://hieutran94mmo.com',

  /* Email tiếp nhận yêu cầu quyền riêng tư và xóa dữ liệu */
  privacyEmail: 'trantrongh94@gmail.com',

  /* Khu vực vận hành; không bắt buộc ghi địa chỉ nhà cụ thể */
  operatingLocation: 'Thành phố Hồ Chí Minh, Việt Nam',

  /* Ngày cập nhật chính sách, định dạng DD/MM/YYYY */
  lastUpdated: '20/07/2026',

  /* Thời gian dự kiến xử lý yêu cầu xóa dữ liệu */
  deletionResponseDays: 30,

  /*
  Các nhóm ứng dụng dùng chung chính sách.
  Khi tạo thêm Meta App hoặc TikTok App có cùng đơn vị vận hành và mục đích,
  bạn có thể thêm tên ứng dụng vào danh sách này.
  */
  appGroups: [
    'Các Meta/Facebook Developer App do Hiếu Trần Media & Automation trực tiếp quản lý',
    'Các TikTok Developer App do Hiếu Trần Media & Automation trực tiếp quản lý',
    'Các workflow n8n dùng để đăng và quản lý nội dung trên tài khoản được người dùng cho phép',
  ],

  /* Dịch vụ kỹ thuật bên thứ ba mà hệ thống có thể sử dụng */
  serviceProviders: [
    'Meta Platforms, Inc. (Facebook và Facebook Pages)',
    'TikTok và TikTok for Developers',
    'n8n hoặc máy chủ chạy n8n',
    'Google Drive và Google Sheets khi được cấu hình trong workflow',
    'Nhà cung cấp tên miền, hosting, VPS hoặc hạ tầng lưu trữ',
  ],
} as const

export const legalUrls = {
  privacy: '/privacy-policy',
  terms: '/terms-of-service',
  deletion: '/data-deletion',
} as const
