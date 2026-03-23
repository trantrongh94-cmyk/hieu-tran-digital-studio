'use client';

import { Button } from '@/components/ui/button';

interface PricingPlan {
  titleLine1: string;
  titleLine2?: string;
  subtitleLine1?: string;
  subtitleLine2?: string;
  price?: string;
  period?: string;
  features: string[];
  highlight?: boolean;
  cta?: string;
  badge?: string;
  image: string;
}

const pricingPlans: PricingPlan[] = [
  {
    titleLine1: 'GÓI COMBO 3 GMAIL',
    titleLine2: 'GEMINI PRO + FAM 2TB DRIVER',
    subtitleLine1: 'TẶNG KEY 3 TOOL AUTO 60 NGÀY',
    subtitleLine2: '',
    price: '549K',
    period: 'COMBO 1 NĂM',
    features: [
      'Gemini Pro + Add Fam Driver 2TB',
      'Hỗ trợ 24/7 Zalo 0337.146.134',
    ],
    cta: 'Liên hệ mua',
    badge: 'HOT',
    image: '/products/main-1.jpg',
  },
  {
    titleLine1: 'GÓI 1 GMAIL',
    titleLine2: 'GEMINI PRO + FAM 2TB DRIVER',
    subtitleLine1: 'TẶNG KEY 3 TOOL AUTO 30 NGÀY',
    subtitleLine2: '',
    price: '199K',
    period: 'COMBO 1 NĂM',
    features: [
      'Gemini Pro + Add Fam Driver 2TB',
      'Hỗ trợ 24/7 Zalo 0337.146.134',
    ],
    cta: 'Liên hệ mua',
    badge: 'ƯU ĐÃI',
    image: '/products/main-2.jpg',
  },
  {
    titleLine1: 'CHAT GPT PLUS',
    titleLine2: '1 THÁNG',
    subtitleLine1: 'ACC CẤP HOẶC NÂNG CHÍNH CHỦ',
    subtitleLine2: 'CẦN MUA 1 NĂM LIÊN HỆ RIÊNG',
    price: '169K - 269K',
    period: 'ACC CẤP - CHÍNH CHỦ',
    features: [
      'Nâng cấp tài khoản ChatGPT Plus',
      'Hỗ trợ 24/7 Zalo 0337.146.134',
    ],
    cta: 'Liên hệ mua',
    badge: 'HOT',
    image: '/products/main-3.jpg',
  },
  {
    titleLine1: 'COMBO',
    titleLine2: '3 TOOL AUTOMATION',
    subtitleLine1: 'TẠO HÀNG LOẠT ẢNH/VIDEO',
    subtitleLine2: 'FLOW - GROK - WHISK',
    price: '149K',
    period: 'COMBO 6 THÁNG',
    features: [
      'Tạo ảnh, video hàng loạt từ prompt',
      'Tự động tạo và tải về máy',
      'TẶNG App Voice AI, App Banana Pro',
    ],
    cta: 'Liên hệ mua',
    badge: 'COMBO',
    image: '/products/main-4.jpg',
  },
  {
    titleLine1: 'CANVA PRO',
    titleLine2: '6 THÁNG HOẶC 12 THÁNG',
    subtitleLine1: 'NÂNG CẤP GMAIL CHÍNH CHỦ',
    subtitleLine2: '',
    price: '99K - 169K',
    period: '6 THÁNG - 12 THÁNG',
    features: [
      'Kho tài nguyên Premium',
      'Lưu trữ đám mây lớn',
      'Hỗ trợ 24/7 Zalo 0337.146.134',
    ],
    cta: 'Liên hệ mua',
    badge: 'NEW',
    image: '/products/main-5.jpg',
  },
  {
    titleLine1: 'PHẦN MỀM GPM LOGIN',
    titleLine2: '',
    subtitleLine1: '1 MÁY VĨNH VIỄN',
    subtitleLine2: '',
    price: '799K',
    period: 'BẢN MỚI 4.2.8',
    features: [
      'Trình duyệt antidetect chuyên dụng',
      'Quản lý profile không giới hạn',
      'TẶNG script nuôi Gmail hoặc YouTube',
    ],
    cta: 'Liên hệ mua',
    badge: 'HOT',
    image: '/products/main-6.jpg',
  },
  {
    titleLine1: 'CAPCUT PRO 3 THIẾT BỊ',
    titleLine2: '6 THÁNG - 1 NĂM',
    subtitleLine1: 'TÀI KHOẢN CẤP SẴN',
    subtitleLine2: 'CẦN NÂNG CHÍNH CHỦ LIÊN HỆ RIÊNG',
    price: '349K - 549K',
    period: 'ACC CẤP 6 THÁNG - 1 NĂM',
    features: [
      'Dùng được cho 2 - 3 thiết bị',
      'Full tính năng Pro - Bảo hành Full',
      'Không được đổi thông tin tài khoản',
    ],
    cta: 'Liên hệ mua',
    badge: 'PRO',
    image: '/products/main-7.jpg',
  },
  {
    titleLine1: 'YOUTUBE PREMIUM',
    titleLine2: '3 THÁNG - 12 THÁNG',
    subtitleLine1: 'ADD FAM CHÍNH CHỦ',
    subtitleLine2: '',
    price: '169K - 369K',
    period: '3 THÁNG - 12 THÁNG',
    features: [
      'Xem không quảng cáo',
      'YouTube Music Premium',
      'Phát video khi tắt màn hình',
    ],
    cta: 'Liên hệ mua',
    badge: 'PREMIUM',
    image: '/products/main-8.jpg',
  },
  {
    titleLine1: 'PHẦN MỀM MKT CARE,',
    titleLine2: 'PAGE, INSTA, TUBE, TIKPRO...',
    subtitleLine1: 'MUA LẺ 1 PHẦN MỀM',
    subtitleLine2: 'HOẶC TRỌN BỘ 8 PHẦN MỀM',
    price: '799K - 3.900K',
    period: 'LẺ 1 VĨNH VIỄN - COMBO 8 V.V',
    features: [
      'Xây dựng và nuôi hệ thống mạng xã hội',
      'Seeding bài viết, video, livestream',
      'Phù hợp YouTube, Facebook, TikTok, Insta',
    ],
    cta: 'Liên hệ mua',
    badge: 'HOT',
    image: '/products/main-9.jpg',
  },
  {
    titleLine1: 'TÀI KHOẢN SUPER Grok',
    titleLine2: '1 THÁNG - 12 THÁNG',
    subtitleLine1: 'TÀI KHOẢN CẤP SẴN UY TÍN',
    subtitleLine2: '',
    price: '399K - 3.690K',
    period: '1 THÁNG - 12 THÁNG',
    features: [
      'Bản cao cấp của Grok AI',
      'Không dùng chung, không share',
      'Được bảo hành full',
    ],
    cta: 'Liên hệ mua',
    badge: 'PREMIUM',
    image: '/products/main-10.jpg',
  },
  {
    titleLine1: 'HMA VPN BẢN QUYỀN',
    titleLine2: 'KEY - TÀI KHOẢN',
    subtitleLine1: ' 1 THÁNG DÙNG 5 THIẾT BỊ',
    subtitleLine2: 'TÀI KHOẢN CẤP SẴN',
    price: '30K - 40K',
    period: 'KEY - TÀI KHOẢN',
    features: [
      'Ẩn địa chỉ IP thật',
      'Thay đổi IP sang quốc gia khác',
      'Bảo mật dữ liệu khi truy cập internet',
    ],
    cta: 'Liên hệ mua',
    badge: 'PREMIUM',
    image: '/products/main-11.jpg',
  },
  {
    titleLine1: 'TÀI KHOẢN Express VPN BẢN QUYỀN',
    titleLine2: '1 - 3 - 6 THÁNG ',
    subtitleLine1: 'DÙNG ĐƯỢC 8 THIẾT BỊ',
    subtitleLine2: 'TÀI KHOẢN CẤP SẴN',
    price: '59K - 119K - 199K',
    period: '1 THÁNG - 3 THÁNG - 6 THÁNG',
    features: [
      'Sử dụng tối đa 8 thiết bị cùng lúc',
      'Không được thay đổi thông tin tài khoản',
      'Không bảo hành nếu thay đổi thông tin',
    ],
    cta: 'Liên hệ mua',
    badge: 'PREMIUM',
    image: '/products/main-12.jpg',
  },
];

const topPlans: PricingPlan[] = [
  {
    titleLine1: 'TÀI KHOẢN GOOGLE',
    titleLine2: 'AI ULTRA VEO3',
    subtitleLine1: 'TÀI KHOẢN CẤP SẴN',
    subtitleLine2: '25.000 CREDIT/THÁNG',
    price: '299K - 499K - 799K',
    period: 'BẢO HÀNH 3 - 15 - 30 NGÀY',
    features: [
      'Gemini Ultra + Veo 3 + Flow Ultra',
      'Bảo hành theo số ngày mua',
      'Gói 25.000 credit ổn định',
    ],
    cta: 'Liên hệ mua',
    badge: 'TOP',
    image: '/products/top-1.jpg',
  },
  {
    titleLine1: 'PROXY DÂN CƯ MỸ / US',
    titleLine2: '10 ĐỊA CHỈ IP',
    subtitleLine1: 'DUNG LƯỢNG 1.000GB',
    subtitleLine2: '',
    price: '26 - 30 USD',
    period: '10 ĐỊA CHỈ IP / THÁNG',
    features: [
      'Proxy tĩnh dùng riêng',
      'Sạch - Tốc độ cao',
      'Phù hợp nuôi Gmail, YouTube, Facebook, TikTok',
    ],
    cta: 'Liên hệ mua',
    badge: 'TOP',
    image: '/products/top-2.jpg',
  },
  {
    titleLine1: 'TÀI KHOẢN ADOBE 1 NĂM',
    titleLine2: 'FULL TOÀN BỘ APP',
    subtitleLine1: 'TÀI KHOẢN CẤP SẴN',
    subtitleLine2: '',
    price: '899K - 1.5 TRIỆU',
    period: 'SỬ DỤNG 1 MÁY - 2 MÁY',
    features: [
      'Không thay đổi thông tin tài khoản',
      'Không thêm số điện thoại xác thực',
      'Không login IP Nga hoặc Belarus',
    ],
    cta: 'Liên hệ mua',
    badge: 'TOP',
    image: '/products/top-3.jpg',
  },
  {
    titleLine1: 'LEONARDO AI UNLIMITED',
    titleLine2: '1 THÁNG',
    subtitleLine1: 'TÀI KHOẢN CẤP SẴN',
    subtitleLine2: '',
    price: '849K',
    period: '1 THÁNG',
    features: [
      'Leonardo AI Artisan Unlimited',
      'Tạo ảnh AI chất lượng cao',
      '60.000 fast tokens, 180.000 bank tokens',
    ],
    cta: 'Liên hệ mua',
    badge: 'TOP',
    image: '/products/top-4.jpg',
  },
  {
    titleLine1: 'Elevenlabs Creator',
    titleLine2: '1 THÁNG - 3 THÁNG',
    subtitleLine1: 'TÀI KHOẢN CẤP SẴN',
    subtitleLine2: '',
    price: '349K - 749K',
    period: '1 THÁNG - 3 THÁNG',
    features: [
      '100.000 Credit mỗi tháng',
      'Truy cập đầy đủ tính năng cao cấp',
      'Bảo hành Full',
    ],
    cta: 'Liên hệ mua',
    badge: 'TOP',
    image: '/products/top-5.jpg',
  },
  {
    titleLine1: 'Tài khoản SUNO AI',
    titleLine2: 'PRO PLAN - PREMIER PLAN',
    subtitleLine1: 'TÀI KHOẢN CẤP SẴN 1 THÁNG',
    subtitleLine2: '',
    price: '199K - 499K',
    period: 'SUNO PRO - SUNO PREMIER',
    features: [
      'Tạo Nhạc AI Chuyên Nghiệp',
      '10.000 tín dụng mỗi tháng',
      'Có thể tạo tối đa 2.000 bài hát',
    ],
    cta: 'Liên hệ mua',
    badge: 'TOP',
    image: '/products/top-6.jpg',
  },
];

function ProductCard({ plan }: { plan: PricingPlan }) {
  return (
    <div className="group relative flex h-[355px] w-full min-w-0 flex-col overflow-hidden rounded-lg border border-cyan-400/20 bg-[#03182b] shadow-[0_0_0_1px_rgba(34,211,238,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[0_12px_28px_rgba(0,255,255,0.08)] sm:h-[390px]">
      <div className="relative h-[82px] overflow-hidden border-b border-cyan-400/15 bg-[#07243d] sm:h-[96px]">
        {plan.badge && (
          <div className="absolute left-2 top-2 z-20 rounded-full border border-cyan-200/30 bg-gradient-to-r from-cyan-300 to-cyan-400 px-2 py-1 text-[8px] font-black uppercase tracking-[0.12em] text-black shadow-[0_6px_14px_rgba(34,211,238,0.25)]">
            {plan.badge}
          </div>
        )}

        <img
          src={plan.image}
          alt={`${plan.titleLine1} ${plan.titleLine2 || ''}`.trim()}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#02111f]/30 via-transparent to-transparent"></div>
      </div>

      <div className="flex flex-1 flex-col p-2 sm:p-3">
        <div className="h-[64px] overflow-hidden sm:h-[72px]">
          <div className="text-[11px] font-extrabold uppercase leading-[1.25] text-white">
            <div className="line-clamp-1">{plan.titleLine1 || '\u00A0'}</div>
            <div className="line-clamp-1">{plan.titleLine2 || '\u00A0'}</div>
          </div>

          <div className="mt-1 text-[9px] font-semibold uppercase leading-[1.25] tracking-wide text-cyan-400/90">
            <div className="line-clamp-1">{plan.subtitleLine1 || '\u00A0'}</div>
            <div className="line-clamp-1">{plan.subtitleLine2 || '\u00A0'}</div>
          </div>
        </div>

        <div className="mt-2 h-[58px] rounded-lg border border-cyan-400/10 bg-[#07243a] p-2 sm:mt-3 sm:h-[70px] sm:p-3">
          <div className="line-clamp-1 text-[16px] font-extrabold leading-none tracking-tight text-cyan-300">
            {plan.price || ''}
          </div>

          <div className="mt-2 line-clamp-1 text-[9px] uppercase tracking-wide text-slate-400">
            {plan.period || '\u00A0'}
          </div>
        </div>

        <div className="mt-2 h-[34px] overflow-hidden sm:mt-3 sm:h-[42px]">
          {[0, 1, 2, 3].map((i) => {
            const feature = plan.features[i];

            return (
              <div key={i} className="flex items-start gap-1.5 text-[9px] leading-[1.2] text-slate-300">
                <span
                  className={`mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                    feature ? 'bg-cyan-400' : 'bg-transparent'
                  }`}
                ></span>
                <span className="line-clamp-1">{feature || '\u00A0'}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-auto pt-3">
          <a
            href="https://zalo.me/0394417714"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="h-8 w-full rounded-full border border-cyan-300/20 bg-gradient-to-r from-cyan-400 to-cyan-300 px-2 text-[9px] font-bold text-black shadow-[0_8px_20px_rgba(34,211,238,0.20)] transition-all duration-300 hover:scale-[1.02] hover:from-cyan-300 hover:to-cyan-200 sm:h-9 sm:px-3 sm:text-[11px]">
              {plan.cta || 'Liên hệ'}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-accent blur-3xl"></div>
        <div className="absolute bottom-20 left-0 h-96 w-96 rounded-full bg-primary blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-mono text-4xl font-bold text-foreground md:text-5xl">
            BẢNG GIÁ TẤT CẢ CÁC DỊCH VỤ
          </h2>
          <p className="text-lg text-accent">
            Các gói giá ưu đãi cho khách hàng
          </p>
        </div>

        <div className="mb-12 grid grid-cols-3 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {pricingPlans.map((plan, idx) => (
            <ProductCard key={idx} plan={plan} />
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-12">
          <h3 className="mb-8 text-center font-mono text-2xl font-bold text-foreground">
            CÁC GÓI DỊCH VỤ HÀNG ĐẦU
          </h3>

          <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {topPlans.map((plan, idx) => (
              <ProductCard key={idx} plan={plan} />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            Tất cả sản phẩm trên có thể hết hàng hoặc cần đặt trước - vui lòng
            liên hệ Zalo hoặc Facebook để biết thêm thông tin.
          </p>
        </div>
      </div>
    </section>
  );
}