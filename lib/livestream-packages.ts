/*
===============================================================================
FILE: lib/livestream-packages.ts
MỤC ĐÍCH:
- Quản lý toàn bộ nội dung các gói dịch vụ Media.
- Muốn sửa chữ, thông số, quyền lợi hoặc giá: sửa trong file này.
- Muốn thêm một khung mới: sao chép một object trong mediaPackages và đổi id.

LƯU Ý:
- id phải khác nhau giữa các gói.
- label là số thứ tự hiển thị: 01, 02, 03...
- specifications có thể dùng nhãn linh hoạt:
  Camera / Thiết bị / Thời lượng / Bàn giao / Nền tảng...
===============================================================================
*/

export type MediaPackageSpecification = {
  label: string
  value: string
}

export type MediaPackage = {
  /** Mã duy nhất, không được trùng với gói khác */
  id: string

  /** Số thứ tự nhỏ ở đầu khung */
  label: string

  /** Tên gói dịch vụ */
  name: string

  /** Nhóm khách hàng hoặc chương trình phù hợp */
  suitableFor: string

  /** Các dòng thông số nằm trong khung nhỏ */
  specifications: MediaPackageSpecification[]

  /** Danh sách quyền lợi/dịch vụ đi kèm */
  deliverables: string[]

  /** Giá hoặc nội dung liên hệ */
  price: string

  /** Đánh dấu gói nổi bật */
  featured?: boolean
}

/*
===============================================================================
DANH SÁCH 6 GÓI DỊCH VỤ
CÁCH NHÂN BẢN:
1. Sao chép trọn một object từ dấu { đến dấu }.
2. Dán xuống cuối mảng, trước dấu ].
3. Đổi id, label, name và nội dung.
===============================================================================
*/
export const mediaPackages: MediaPackage[] = [
  {
    id: 'livestream-basic',
    label: '01',
    name: 'Gói Livestream Cơ Bản',
    suitableFor:
      'Họp nội bộ, talkshow nhỏ, livestream bán hàng và lớp học trực tuyến',
    specifications: [
      {
        label: 'Camera',
        value: '1 - 2 camera Full HD',
      },
      {
        label: 'Thời lượng',
        value: 'Tối đa 3 giờ',
      },
      {
        label: 'Nền tảng',
        value: 'Facebook, YouTube, Tiktok',
      },
    ],
    deliverables: [
      'Kỹ thuật viên vận hành & nhân sự quay phim',
      'Chèn logo, tên chương trình và khung hình cơ bản',
      'Kiểm tra đường truyền trước chương trình',
      'Lưu file ghi hình chương trình',
    ],
    price: '3.000.000 - 5.000.000 VND',
  },

  {
    id: 'livestream-professional',
    label: '02',
    name: 'Gói Livestream Nâng cao',
    suitableFor:
      'Hội nghị, lễ khai trương, sự kiện doanh nghiệp',
    specifications: [
      {
        label: 'Camera',
        value: '3 - 4 camera Full HD',
      },
      {
        label: 'Thời lượng',
        value: 'Chương trình 4 giờ',
      },
      {
        label: 'Nền tảng',
        value: 'Facebook, YouTube, Tiktok',
      },
    ],
    deliverables: [
      'Kỹ thuật bấm hình và vận hành livestream',
      'Bộ nhận diện, lower-third, chuyển cảnh',
      'Âm thanh đầu vào từ mixer sự kiện',
      'Đường truyền chính và phương án dự phòng',
      'Bàn giao file chương trình sau sự kiện',
    ],
    price: '6.000.000 - 8.000.000 VND',
    featured: true,
  },

  {
    id: 'livestream-large-event',
    label: '03',
    name: 'Gói Livestream Sự Kiện Lớn',
    suitableFor:
      'Festival, lễ hội, chương trình sân khấu lớn và sự kiện chính trị',
    specifications: [
      {
        label: 'Camera',
        value: '5 camera trở lên',
      },
      {
        label: 'Thời lượng',
        value: 'Theo timeline chương trình',
      },
      {
        label: 'Hệ thống',
        value: 'Đa nền tảng, màn LED và tín hiệu nội bộ',
      },
    ],
    deliverables: [
      'Khảo sát địa điểm và thiết kế sơ đồ tín hiệu',
      'Đạo diễn hình, camera operator và đội kỹ thuật chuyên trách',
      'Đồ họa cơ bản theo nhu cầu',
      'Hệ thống truyền dẫn xa, intercom và giám sát tín hiệu',
      'Phương án dự phòng thiết bị và đường truyền',
    ],
    price: 'Báo giá theo quy mô',
  },

  {
    id: 'event-photography',
    label: '04',
    name: 'Gói Chụp Ảnh',
    suitableFor:
      'Hội nghị, lễ khai trương, doanh nghiệp, lễ hội, hội thảo...',
    specifications: [
      {
        label: 'Thiết bị',
        value: ' 1 Máy ảnh Full-frame và Flash',
      },
      {
        label: 'Thời lượng',
        value: 'Chương trình 4 giờ',
      },
      {
        label: 'Bàn giao',
        value: 'Ảnh chọn lọc và chỉnh màu',
      },
    ],
    deliverables: [
      'Nhiếp ảnh tác nghiệp tại hiện trường',
      'Chụp toàn cảnh, sân khấu, khách mời và hoạt động chính',
      'Chỉnh sáng, màu sắc và bố cục ảnh',
      'Bàn giao ảnh chất lượng cao qua Google Drive',
      'Có thể bàn giao nhanh một số ảnh trong ngày',
    ],
    price: '1.500.000 - 3.000.000 VND',
  },

  {
    id: 'event-video',
    label: '05',
    name: 'Gói Quay dựng Video',
    suitableFor:
      'Doanh nghiệp, khai trương, hội nghị, sự kiện, phóng sự...',
    specifications: [
      {
        label: 'Thiết bị',
        value: 'Camera Full HD/4K, thiết bị thu âm',
      },
      {
        label: 'Thời lượng',
        value: 'Theo timeline chương trình',
      },
      {
        label: 'Bàn giao',
        value: 'Video hoàn chỉnh và file theo thỏa thuận',
      },
    ],
    deliverables: [
      'Quay toàn cảnh và các hoạt động nổi bật',
      'Quay cận cảnh khách mời, sân khấu và nội dung chính',
      'Dựng video highlight theo nhận diện thương hiệu',
      'Chỉnh màu, xử lý âm thanh và chèn logo, phụ đề',
      'Xuất video phù hợp Facebook, TikTok và YouTube',
    ],
    price: '5.000.000 - 15.000.000 VND',
  },

  {
    id: 'event-flycam',
    label: '06',
    name: 'Gói Livestream thể thao',
    suitableFor:
      'Các giải đấu thể thao lớn, chuyên nghiệp, nhiều góc máy',
    specifications: [
      {
        label: 'Thiết bị',
        value: '3 - 6 camera Full HD',
      },
      {
        label: 'Thời lượng',
        value: 'Theo trận đấu, buổi hoặc ngày',
      },
      {
        label: 'Nền tảng',
        value: 'Facebook, YouTube',
      },
    ],
    deliverables: [
      'Kỹ thuật bấm hình và vận hành livestream',
      'Bộ nhận diện, lower-third, chuyển cảnh, tỉ số',
      'Hệ thống máy replay/slowmotion',
      'Đường truyền chính và phương án dự phòng',
      'Bàn giao file sau trận đấu',
    ],
    price: '5.000.000 - 15.000.000 VND',
  },
]

/*
===============================================================================
CÁC HẠNG MỤC BỔ SUNG HIỂN THỊ TRONG BẢNG
Cấu trúc mỗi dòng:
['Tên hạng mục', 'Mô tả phạm vi', 'Giá']
===============================================================================
*/
export type MediaAddon = readonly [
  name: string,
  description: string,
  price: string,
]

export const mediaAddons: MediaAddon[] = [
  [
    'Camera bổ sung',
    'Thêm góc máy: Máy quay, máy ảnh gimbal, wireless truyền hình ảnh không dây ',
    '1.500.000 - 2.500.000 VND',
  ],
  [
    'Quay video xả source giao file',
    'Quay video toàn bộ chương trình giao file gốc - kết nối màn hình Led',
    '2.000.000 - 3.000.000 VND',
  ],
  [
    'Bay Flycam/FPV',
    'Lưu file hoặc truyền hình ảnh trực tiếp livestream - Tùy điều kiện thực tế và khu vực bay',
    '2.000.000 - 3.000.000 VND',
  ],
  [
    'Quay và dựng highlight/recap',
    'Dựng video tổng kết ngắn sau chương trình',
    '3.000.000 - 5.000.000 VND',
  ],
  [
    'Đồ họa chuyên biệt',
    'Tỷ số, bảng tên, motion graphic, lower-third và nội dung trình chiếu',
    'Liên hệ báo giá',
  ],
  [
    'Nhân sự bổ sung',
    'Thêm nhiếp ảnh, quay phim, kỹ thuật viên hoặc đạo diễn hình...',
    'Liên hệ báo giá',
  ],
  [
    'Đường truyền dự phòng',
    '4G/5G bonding hoặc đường truyền internet riêng cho tùy khu vực sự kiện',
    'Liên hệ báo giá',
  ],
]
