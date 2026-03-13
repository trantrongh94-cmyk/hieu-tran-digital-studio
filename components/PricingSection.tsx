'use client';

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingPlan {
  title: string;
  subtitle: string;
  price?: string;
  period?: string;
  features: string[];
  highlight?: boolean;
  cta?: string;
}

const pricingPlans: PricingPlan[] = [
  {
    title: 'GÓI 3 GMAIL GEMINI-PRO + FAM 2TB DRIVER',
    subtitle: 'TẶNG 3 TOOL AUTO 60 NGÀY',
    price: '549K',
    period: 'COMBO 1 NĂM',
    features: [
      '3 Gmail Gemini Pro + Add Fam Driver 2TB',
      'Hỗ trợ 24/7 Zalo 0337.146.134',
    ],
    cta: 'Liên hệ mua',
  },
  {
    title: 'GÓI 1 GMAIL + GEMINI-PRO + FAM 2TB DRIVER',
    subtitle: 'TẶNG 3 TOOL 30 NGÀY',
    price: '199K',
    period: 'COMBO 1 NĂM',
    features: [
      '1 Gmail Gemini Pro + Add Fam Driver 2TB',
      'Hỗ trợ 24/7 Zalo 0337.146.134',
    ],
    cta: 'Liên hệ mua',
  },
  {
    title: 'CHAT GPT PLUS 1 THÁNG',
    subtitle: 'ACC CẤP - NÂNG CẤP CHÍNH CHỦ',
    price: '199K - 299K',
    period: 'ACC CẤP - CHÍNH CHỦ',
    features: [
      'ChatGPT của bạn sẽ được nâng cấp lên gói Plus',
      'Hỗ trợ 24/7 Zalo 0337.146.134',
    ],
    cta: 'Liên hệ mua',
  },
  {
    title: 'COMBO 3 TOOL AUTOMATION',
    subtitle: 'TẠO HÀNG LOẠT TRÊN FLOW - GROK - META',
    price: '149K',
    period: 'COMBO 6 THÁNG',
    features: [
      'Tạo hình ảnh, video hàng loạt từ promt',
      'Tự động tạo và tải về máy tối ưu thời gian',
      'Hỗ trợ 24/7 Zalo 0337.146.134',
      'TẶNG APP ĐỌC VOICE AI, APP TẠO ẢNH BANANA PRO TỰ NHẬP API KEY',
    ],
    cta: 'Liên hệ mua',
  },
  {
    title: 'CANVA PRO',
    subtitle: 'NÂNG CẤP GMAIL CHÍNH CHỦ',
    price: '99K - 179K',
    period: '6 THÁNG - 12 THÁNG',
    features: [
      'Nâng cấp gmail chính chủ',
      'Kho tài nguyên Premium',
      'Lưu trữ đám mây lớn',
      'Hỗ trợ 24/7 Zalo 0337.146.134',
    ],
    cta: 'Liên hệ mua',
  },
  {
    title: 'PHẦN MỀM GPM LOGIN',
    subtitle: '1 MÁY VĨNH VIỄN',
    price: '799K',
    period: 'BẢN MỚI 4.2.8 ',
    features: [
      'GPM Login là trình duyệt antidetect chuyên dụng',
      'Quản lý Profile không giới hạn',
      'Hỗ trợ 24/7 Zalo 0337.146.134',
      'TẶNG Scrpit AUTO NUÔI GMAIL HOẶC YOUTUBE',
    ],
    cta: 'Liên hệ mua',
  },
  {
    title: 'CAPCUT PRO 3 THIẾT BỊ',
    subtitle: 'NÂNG CẤP CHÍNH CHỦ 6 THÁNG 699K ĐẶT RIÊNG',
    price: '399k - 599K',
    period: 'ACC CẤP 6 THÁNG - 1 NĂM',
    features: [
      'Tài khoản cấp sẵn Capcut Pro',
      'Loại 6 tháng và 1 năm dùng được cho 3 thiết bị',
      'Sử dụng full tính năng pro, có thể thay bằng email chính chủ',
      'Hỗ trợ 24/7 Zalo 0337.146.134',
    ],
    cta: 'Liên hệ mua',
  },
  {
    title: 'YOUTUBE PREMIUM',
    subtitle: 'NÂNG CẤP CHÍNH CHỦ 3 - 12 THÁNG',
    price: '199K - 399K',
    period: '3 THÁNG - 12 THÁNG',
    features: [
      'Nâng cấp tài khoản Youtube Premium chính chủ',
      'Loại 3 tháng và 12 tháng xem video không có quảng cáo',
      'YouTube Music Premium, Originals, Phát video khi tắt màn hình',
      'Hỗ trợ 24/7 Zalo 0337.146.134',
    ],
    cta: 'Liên hệ mua',
  },
  {
    title: 'PHẦN MỀM MKT CARE, PAGE, INSTA, TUBE, TIKPRO, VIRAL, AFFILIATE, POST, UID',
    subtitle: 'VĨNH VIỄN',
    price: '799K - 3.500 TRIỆU',
    period: 'LẺ 1 - TRỌN BỘ 8 PHẦN MỀM',
    features: [
      'Xây dựng nền tảng các kênh mạng xã hội',
      'Nuôi nick tương tác youtube, facebook, tiktok, insta',
      'Seeding bài viết, video, livestream theo kịch bản',
      'Hỗ trợ 24/7 Zalo 0337.146.134',
    ],
    cta: 'Liên hệ mua',
  },
];

const topPlans = [
  {
    title: 'TÀI KHOẢN GOOGLE AI ULTRA VEO3',
    subtitle: 'TÀI KHOẢN CẤP 25.000 - 45.000 Credit 1 THÁNG\nNÂNG CẤP CHÍNH CHỦ 5.000 Credit 1 THÁNG - 480K',
    price: 'Bảo hành 2 ngày 299K | 7 ngày 599K | 15 ngày 999K',
    features: [
      'Gemini Ultra + Veo 3, Flow Ultra, Veo 3 Fast Unlimited',
      'Bảo hành theo số ngày (Login thành công và kiểm đúng số credits)',
      'Hàng không có sẵn nhiều tùy theo đợt quét',
      'Các gói 25.000 Credit ít bị quét',
      'Các gói 45.000 Credit có bị quét',
    ],
    cta: 'Liên hệ mua',
  },
  {
    title: 'PROXY DÂN CƯ MỸ/US',
    subtitle: 'DUNG LƯỢNG 1.000GB',
    price: '30 USD - 10 ĐỊA CHỈ IP/THÁNG',
    features: [
      'Hỗ trợ 24/7 Zalo 0337.146.134',
      'Proxy tĩnh dùng riêng',
      'Tốc độ cao',
      'Sạch - Độ Trust cao',
      'Phù hợp nuôi gmail, youtube, facebook, tiktok...',
    ],
    cta: 'Liên hệ mua',
  },
  {
    title: 'TÀI KHOẢN ADOBE FULL APP',
    subtitle: 'TÀI KHOẢN CẤP 1 NĂM',
    price: '1 MÁY 899K - 2 MÁY 1.5 TRIỆU',
    features: [
      'Khách lưu ý các mục dưới đây ↓',
      'Không được thay đổi tất cả các thông tin trong tài khoản',
      'Không được thêm số điện thoại xác thực, Không login ở IP Nga hoặc Belarus',
      'Không tham gia các fam khác, Không add email phụ',
      'Nếu khách tự ý làm những mục trên từ chối bảo hành !'
    ],
    cta: 'Liên hệ mua',
  },
  {
    title: 'LEONARDO AI UNLIMITED',
    subtitle: 'TÀI KHOẢN Leonardo AI ACC CẤP',
    price: '1 THÁNG - 849K',
    features: [
      'Leonardo AI Artisan Unlimited',
      'Tạo hình ảnh AI chất lượng cao',
      'Leonardo AI cung cấp quyền sở hữu hoàn toàn hình ảnh',
      '60.000 fast tokens, 180,000 tokens bank',
      'Hỗ trợ 24/7 Zalo 0337.146.134',
    ],
    cta: 'Liên hệ mua',
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-mono">
            BẢNG GIÁ TẤT CẢ CÁC DỊCH VỤ
          </h2>
          <p className="text-accent text-lg">Các gói giá ưu đãi cho khách hàng</p>
        </div>

        {/* Main pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-lg p-6 border-2 transition-all duration-300 hover:shadow-xl ${
                plan.highlight
                  ? 'border-accent bg-accent/10 shadow-lg'
                  : 'border-primary/30 bg-card'
              }`}
            >
              <div className="mb-4">
                <h3 className="text-foreground font-mono font-bold text-base mb-2">{plan.title}</h3>
                <p className="text-accent text-sm font-semibold">{plan.subtitle}</p>
              </div>

              {plan.price && (
                <div className="mb-6 p-4 bg-secondary rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-1">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">{plan.period}</div>
                </div>
              )}

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://zalo.me/0394417714"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-background font-bold py-2"
                >
                  {plan.cta || 'Liên hệ'}
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Top packages */}
        <div className="mt-20 pt-12 border-t border-border">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8 font-mono">
            CÁC GÓI DỊCH VỤ HÀNG ĐẦU
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topPlans.map((plan, idx) => (
              <div
                key={idx}
                className="border-2 border-border rounded-lg p-6 bg-card hover:border-accent transition-all"
              >
                <h3 className="text-foreground font-mono font-bold text-base mb-2">{plan.title}</h3>
                <p className="text-accent text-sm font-semibold mb-4 whitespace-pre-line">{plan.subtitle}</p>
                {plan.price && (
                  <div className="text-accent font-bold mb-4">{plan.price}</div>
                )}
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                href="https://zalo.me/0394417714"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-background font-bold py-2"
                >
                  {plan.cta || 'Liên hệ'}
                </Button>
              </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center text-muted-foreground text-sm">
          <p>
            Tất cả sản phẩm trên có thể hết hàng hoặc cần đặt trước - vui lòng liên hệ zalo hoặc facebook để biết thêm thông tin !
          </p>
        </div>
      </div>
    </section>
  );
}
