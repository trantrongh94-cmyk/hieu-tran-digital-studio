'use client';

interface PricingPlan {
  titleLine1: string;
  titleLine2?: string;
  subtitleLine1?: string;
  subtitleLine2?: string;
  subtitleLine3?: string;
  price?: string;
  period?: string;
  features: string[];
  highlight?: boolean;
  cta?: string;
  badge?: string;
  image: string;
  href?: string;
  discount?: string;
}

const pricingPlans: PricingPlan[] = [
  {
    titleLine1: 'GEMINI PRO',
    titleLine2: '3 GMAIL - 1 NĂM',
    subtitleLine1: 'ADD FAM 2TB DRIVER',
    subtitleLine2: 'GMAIL CHÍNH CHỦ CHỈ 549K',
    subtitleLine3: 'TẶNG KEY 3 TOOL 60 NGÀY ',
    price: '549K',
    period: 'COMBO 1 NĂM',
    features: [
      'Gemini Pro + Add Fam Driver 2TB',
      'Hỗ trợ 24/7 Zalo 0337.146.134',
    ],
    cta: 'Xem chi tiết',
    badge: 'HOT',
    image: '/products/main-1.jpg',
    href: '/san-pham/sp01',
    discount: 'COMBO',
  },
  {
    titleLine1: 'GEMINI PRO',
    titleLine2: '1 GMAIL - 1 NĂM',
    subtitleLine1: 'ADD FAM 2TB DRIVER',
    subtitleLine2: 'GMAIL CHÍNH CHỦ CHỈ 199K',
    subtitleLine3: 'TẶNG KEY 3 TOOL 30 NGÀY ',
    price: '199K',
    period: 'COMBO 1 NĂM',
    features: [
      'Gemini Pro + Add Fam Driver 2TB',
      'Hỗ trợ 24/7 Zalo 0337.146.134',
    ],
    cta: 'Xem chi tiết',
    badge: 'ƯU ĐÃI',
    image: '/products/main-2.jpg',
    href: '/san-pham/sp02',
  },
  {
    titleLine1: 'CHAT GPT PLUS',
    titleLine2: '1 THÁNG',
    subtitleLine1: 'TÀI KHOẢN CẤP SẴN',
    subtitleLine2: 'HOẶC NÂNG CHÍNH CHỦ',
    subtitleLine3: 'MUA 1 NĂM CẦN ĐẶT TRƯỚC',
    price: '169K - 269K',
    period: 'ACC CẤP - CHÍNH CHỦ',
    features: [
      'Nâng cấp tài khoản ChatGPT Plus',
      'Hỗ trợ 24/7 Zalo 0337.146.134',
    ],
    cta: 'Xem chi tiết',
    badge: 'HOT',
    image: '/products/main-3.jpg',
    href: '/san-pham/sp03',
  },
  {
    titleLine1: 'TOOL AUTOMATION',
    titleLine2: 'COMBO 4',
    subtitleLine1: 'TẠO HÀNG LOẠT ẢNH/VIDEO',
    subtitleLine2: 'FLOW - SEEDANCE - META - GPT',
    subtitleLine3: 'TẶNG APP VOICE + BANANA',
    price: '149K',
    period: 'COMBO 6 THÁNG',
    features: [
      'Tạo ảnh, video hàng loạt từ prompt',
      'Tự động tạo và tải về máy',
      'TẶNG App Voice AI, App Banana Pro',
    ],
    cta: 'Xem chi tiết',
    badge: 'COMBO',
    image: '/products/main-4.jpg',
    href: '/san-pham/sp04',
    discount: 'GIẢM 10%',
  },
  {
    titleLine1: 'CANVA PRO',
    titleLine2: '6 THÁNG - 12 THÁNG',
    subtitleLine1: 'NÂNG CẤP GMAIL CHÍNH CHỦ',
    subtitleLine2: '',
    price: '99K - 169K',
    period: '6 THÁNG - 12 THÁNG',
    features: [
      'Kho tài nguyên Premium',
      'Lưu trữ đám mây lớn',
      'Hỗ trợ 24/7 Zalo 0337.146.134',
    ],
    cta: 'Xem chi tiết',
    badge: 'NEW',
    image: '/products/main-5.jpg',
    href: '/san-pham/sp05',
  },
  {
    titleLine1: 'GPM LOGIN',
    titleLine2: 'PHẦN MỀM VĨNH VIỄN',
    subtitleLine1: '1 MÁY - BẢN MỚI 4.2.8',
    subtitleLine2: '',
    price: '799K',
    period: 'BẢN MỚI 4.2.8',
    features: [
      'Trình duyệt antidetect chuyên dụng',
      'Quản lý profile không giới hạn',
      'TẶNG script nuôi Gmail hoặc YouTube',
    ],
    cta: 'Xem chi tiết',
    badge: 'HOT',
    image: '/products/main-6.jpg',
    href: '/san-pham/sp06',
    discount: 'GIẢM 15%',
  },
  {
    titleLine1: 'CAPCUT PRO',
    titleLine2: '3 THIẾT BỊ',
    subtitleLine1: 'TÀI KHOẢN CẤP SẴN',
    subtitleLine2: 'CHÍNH CHỦ LIÊN HỆ ĐẶT',
    price: '349K - 549K',
    period: 'ACC CẤP 6 THÁNG - 1 NĂM',
    features: [
      'Dùng được cho 2 - 3 thiết bị',
      'Full tính năng Pro - Bảo hành Full',
      'Không được đổi thông tin tài khoản',
    ],
    cta: 'Xem chi tiết',
    badge: 'PRO',
    image: '/products/main-7.jpg',
    href: '/san-pham/sp07',
    discount: 'GIẢM 10%',
  },
  {
    titleLine1: 'YOUTUBE PREMIUM',
    titleLine2: '6 THÁNG - 12 THÁNG',
    subtitleLine1: 'ADD FAM CHÍNH CHỦ',
    subtitleLine2: '',
    price: '199K - 369K',
    period: '6 THÁNG - 12 THÁNG',
    features: [
      'Xem không quảng cáo',
      'YouTube Music Premium',
      'Phát video khi tắt màn hình',
    ],
    cta: 'Xem chi tiết',
    badge: 'PREMIUM',
    image: '/products/main-8.jpg',
    href: '/san-pham/sp08',
    discount: 'GIẢM 10%',
  },
  {
    titleLine1: 'PHẦN MỀM MKT',
    titleLine2: '1 MÁY - VĨNH VIỄN',
    subtitleLine1: 'MUA LẺ 1 PHẦN MỀM',
    subtitleLine2: 'HOẶC TRỌN BỘ 8 PHẦN MỀM',
    price: '799K - 3.900K',
    period: 'LẺ 1 VĨNH VIỄN - COMBO 8 V.V',
    features: [
      'Xây dựng và nuôi hệ thống mạng xã hội',
      'Seeding bài viết, video, livestream',
      'Phù hợp YouTube, Facebook, TikTok, Insta',
    ],
    cta: 'Xem chi tiết',
    badge: 'HOT',
    image: '/products/main-9.jpg',
    href: '/san-pham/sp09',
    discount: 'GIẢM 15%',
  },
  {
    titleLine1: 'SUPER GROK ',
    titleLine2: 'TOOL AUTOMATION',
    subtitleLine1: 'NÂNG CẤP CHÍNH CHỦ',
    subtitleLine2: 'VÀ TÀI KHOẢN CẤP SẴN',
    price: '399K - 3.690K',
    period: '1 THÁNG - 12 THÁNG',
    features: [
      'Bản cao cấp của Grok AI',
      'Không dùng chung, không share',
      'Được bảo hành full',
    ],
    cta: 'Xem chi tiết',
    badge: 'PREMIUM',
    image: '/products/main-10.jpg',
    href: '/san-pham/sp10',
  },
  {
    titleLine1: 'HMA VPN',
    titleLine2: '5 THIẾT BỊ - 1 THÁNG',
    subtitleLine1: 'KEY BẢN QUYỀN',
    subtitleLine2: 'TÀI KHOẢN CẤP SẴN',
    price: '30K - 40K',
    period: 'KEY - TÀI KHOẢN',
    features: [
      'Ẩn địa chỉ IP thật',
      'Thay đổi IP sang quốc gia khác',
      'Bảo mật dữ liệu khi truy cập internet',
    ],
    cta: 'Xem chi tiết',
    badge: 'PREMIUM',
    image: '/products/main-11.jpg',
    href: '/san-pham/sp11',
  },
  {
    titleLine1: 'Express VPN',
    titleLine2: '8 THIẾT BỊ',
    subtitleLine1: '1 - 3 - 6 THÁNG',
    subtitleLine2: 'TÀI KHOẢN CẤP SẴN',
    price: '59K - 119K - 199K',
    period: '1 THÁNG - 3 THÁNG - 6 THÁNG',
    features: [
      'Sử dụng tối đa 8 thiết bị cùng lúc',
      'Không được thay đổi thông tin tài khoản',
      'Không bảo hành nếu thay đổi thông tin',
    ],
    cta: 'Xem chi tiết',
    badge: 'PREMIUM',
    image: '/products/main-12.jpg',
    href: '/san-pham/sp12',
  },
];

const topPlans: PricingPlan[] = [
  {
    titleLine1: 'AI ULTRA VEO 3',
    titleLine2: 'TÀI KHOẢN GOOGLE',
    subtitleLine1: 'TÀI KHOẢN CẤP SẴN',
    subtitleLine2: '25.000 CREDIT/THÁNG',
    price: '299K - 499K - 799K',
    period: 'BẢO HÀNH 3 - 15 - 30 NGÀY',
    features: [
      'Gemini Ultra + Veo 3 + Flow Ultra',
      'Bảo hành theo số ngày mua',
      'Gói 25.000 credit ổn định',
    ],
    cta: 'Xem chi tiết',
    badge: 'TOP',
    image: '/products/top-1.jpg',
    href: '/san-pham/sp13',
    discount: 'GIẢM 10%',
  },
  {
    titleLine1: 'TÀI KHOẢNG KLING AI',
    titleLine2: '1100 - 4500 CREDIT',
    subtitleLine1: 'TẠO VIDEO AI CHUYÊN NGHIỆP',
    subtitleLine2: 'DÀI LÊN ĐẾN 2 PHÚT 1080P,  ',
    price: '26 - 30 USD',
    period: '10 ĐỊA CHỈ IP / THÁNG',
    features: [
      'Proxy tĩnh dùng riêng',
      'Sạch - Tốc độ cao',
      'Phù hợp nuôi Gmail, YouTube, Facebook, TikTok',
    ],
    cta: 'Xem chi tiết',
    badge: 'TOP',
    image: '/products/top-2.jpg',
    href: '/san-pham/sp14',
  },
  {
    titleLine1: 'TÀI KHOẢN ADOBE',
    titleLine2: 'FULL APP - 1 NĂM',
    subtitleLine1: 'TÀI KHOẢN ĐƯỢC CẤP SẴN',
    subtitleLine2: '',
    price: '899K - 1.5 TRIỆU',
    period: 'SỬ DỤNG 1 MÁY - 2 MÁY',
    features: [
      'Không thay đổi thông tin tài khoản',
      'Không thêm số điện thoại xác thực',
      'Không login IP Nga hoặc Belarus',
    ],
    cta: 'Xem chi tiết',
    badge: 'TOP',
    image: '/products/top-3.jpg',
    href: '/san-pham/sp15',
    discount: 'GIẢM 10%',
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
    cta: 'Xem chi tiết',
    badge: 'TOP',
    image: '/products/top-4.jpg',
    href: '/san-pham/sp16',
  },
  {
    titleLine1: 'Elevenlabs',
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
    cta: 'Xem chi tiết',
    badge: 'TOP',
    image: '/products/top-5.jpg',
    href: '/san-pham/sp17',
  },
  {
    titleLine1: 'SUNO AI',
    titleLine2: 'PRO PLAN - PREMIER',
    subtitleLine1: 'TÀI KHOẢN CẤP SẴN 1 THÁNG',
    subtitleLine2: '',
    price: '199K - 499K',
    period: 'SUNO PRO - SUNO PREMIER',
    features: [
      'Tạo Nhạc AI Chuyên Nghiệp',
      '10.000 tín dụng mỗi tháng',
      'Có thể tạo tối đa 2.000 bài hát',
    ],
    cta: 'Xem chi tiết',
    badge: 'TOP',
    image: '/products/top-6.jpg',
    href: '/san-pham/sp18',
  },
];

function ProductCard({ plan }: { plan: PricingPlan }) {
  return (
    <div className="group relative flex w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-cyan-400/15 bg-[#03182b] shadow-[0_0_0_1px_rgba(34,211,238,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_12px_28px_rgba(0,255,255,0.08)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#07243d]">
        <img
          src={plan.image}
          alt={`${plan.titleLine1} ${plan.titleLine2 || ''}`.trim()}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {plan.discount ? (
          <div className="absolute left-3 top-3 rounded-full bg-red-500/85 px-3 py-1 text-[8px] font-bold uppercase tracking-[0.05em] text-white shadow-lg">
            {plan.discount}
          </div>
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-[#02111f]/20 via-transparent to-transparent"></div>
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <div className="min-h-[96px] sm:min-h-[104px]">
          <div className="space-y-1">
            <div className="text-[16px] font-extrabold uppercase leading-5 tracking-[-0.01em] text-white sm:text-[16px]">
              {plan.titleLine1 || '\u00A0'}
            </div>

            {plan.titleLine2 ? (
              <div className="text-[14px] font-semibold uppercase leading-5 text-cyan-100/90 sm:text-[14px]">
                {plan.titleLine2}
              </div>
            ) : null}

            {plan.subtitleLine1 ? (
              <div className="pt-1 text-[10px] font-medium uppercase tracking-[0.08em] leading-4 text-cyan-300/70">
                {plan.subtitleLine1}
              </div>
            ) : null}

            {plan.subtitleLine2 ? (
              <div className="text-[10px] font-medium uppercase leading-4 tracking-[0.08em] text-cyan-300/70">
                {plan.subtitleLine2}
              </div>
            ) : null}

            {plan.subtitleLine3 ? (
              <div className="text-[10px] font-medium uppercase leading-4 tracking-[0.08em] text-cyan-300/70">
                {plan.subtitleLine3}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-auto pt-3">
          <a
            href={plan.href || '#'}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-full items-center justify-center rounded-full border border-cyan-300/20 bg-gradient-to-r from-cyan-400 to-cyan-300 px-3 text-[11px] font-bold text-black shadow-[0_8px_20px_rgba(34,211,238,0.20)] transition-all duration-300 hover:scale-[1.02] hover:from-cyan-300 hover:to-cyan-200"
          >
            Xem chi tiết
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
            CÁC SẢN PHẨM MMO
          </h2>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
            Bấm xem chi tiết để xem sản phẩm và giá
          </p>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {pricingPlans.map((plan, idx) => (
            <ProductCard key={idx} plan={plan} />
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-12">
          <h3 className="mb-8 text-center font-mono text-2xl font-bold text-foreground">
            SẢN PHẨM MỚI
          </h3>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {topPlans.map((plan, idx) => (
              <ProductCard key={idx} plan={plan} />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center text-sm leading-7 text-muted-foreground">
          <p>
            Một số sản phẩm trên có thể hết hàng hoặc cần đặt trước. Vui lòng liên hệ zalo để được tư vấn !
          </p>
        </div>
      </div>
    </section>
  );
}
