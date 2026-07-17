import Link from 'next/link'
import { ArrowRight, Check, Code, Cpu, Play, ShoppingBag } from 'lucide-react'

const services = [
  {
    icon: Play,
    badge: 'Media & Livestream',
    title: 'Dịch Vụ Livestream - Media',
    description: 'Giải pháp truyền thông trực tiếp và sản xuất nội dung chuyên nghiệp',
    features: [
      'Livestream trực tiếp sự kiện, hội nghị, lễ hội, họp trực tuyến...',
      'Các giải thể thao: Bóng đá, Billiards, Marathon, Pickleball...',
      'Quay dựng video, MV ca nhạc, TVC, recap, chụp ảnh sự kiện, bay flycam...',
      'Đội ngũ sản xuất có kinh nghiệm triển khai nhiều chương trình quy mô lớn',
      'Thiết bị đa dạng, cấu hình tối ưu theo từng nhu cầu của khách hàng',
    ],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-0OS8kxf7JTY8uf3fz9JD8rAGdbrIvj.jpg',
    href: '/dich-vu/livestream',
    cta: 'Xem hình ảnh & bảng giá',
  },
  {
    icon: Cpu,
    badge: 'Automation Tools',
    title: 'Tool Hiếu Trần - Automation',
    description: 'Công cụ tự động hóa tăng tốc quy trình làm việc, tạo nội dung số lượng lớn',
    features: [
      'Tool tự động hóa Flow - Grok - Meta - GPT - Seedance',
      'Tăng tốc quy trình làm việc, tạo video/hình ảnh số lượng lớn tiết kiệm thời gian',
      'Có key sử dụng miễn phí khi mua Gmail',
    ],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-030USfjUhdw0JJ5z3sHWGWiZU6w1ts.jpg',
    href: 'https://zalo.me/0812700812',
    cta: 'Liên hệ để nhận tư vấn',
    external: true,
  },
  {
    icon: Code,
    badge: 'MMO & Scripts',
    title: 'Phần Mềm / Script / Tool MMO',
    description: 'Giải pháp phần mềm và kịch bản tự động hóa cho hệ thống nội dung, tài khoản và vận hành đa nền tảng.',
    features: [
      'Script YouTube Automate GPM - nuôi Gmail tự động',
      'CCK TikTok - đăng ký, nuôi nick, tương tác tự động',
      'Tool auto tăng like chéo - Facebook, Instagram, TikTok',
      'Max Care - Max Phone Farm - nuôi nick chuyên nghiệp',
      'MKT TikPro - MKT YouTube - quản lý & tương tác theo kịch bản',
    ],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-FnlqFeXT5O8V3vGyed0SSMjKs7s8tV.jpg',
    href: 'https://zalo.me/0812700812',
    cta: 'Trao đổi nhu cầu triển khai',
    external: true,
  },
  {
    icon: ShoppingBag,
    badge: 'MMO Store',
    title: 'Sản Phẩm MMO & Tài Khoản Số',
    description: 'Gian hàng riêng dành cho tài khoản AI, phần mềm, VPN, công cụ sáng tạo và các combo hỗ trợ làm việc online.',
    features: [
      'Danh sách sản phẩm được tách khỏi trang chủ để dễ theo dõi',
      'Mỗi sản phẩm có trang chi tiết riêng về giá, thời hạn và bảo hành',
      'Có thể cập nhật thêm sản phẩm mới mà không làm rối phần dịch vụ Media',
      'Tư vấn trực tiếp qua Zalo trước khi mua hoặc kích hoạt',
    ],
    href: '/mmo',
    cta: 'Mở gian hàng sản phẩm',
    productMosaic: true,
  },
]

const productMosaic = [
  '/products/main-3.jpg',
  '/products/main-4.jpg',
  '/products/main-6.jpg',
  '/products/main-7.jpg',
  '/products/top-3.jpg',
  '/products/top-5.jpg',
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-5xl">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Media - Livestream - Phần mềm - MMO
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0

            return (
              <Link
                key={service.title}
                href={service.href}
                target={service.external ? '_blank' : undefined}
                rel={service.external ? 'noreferrer' : undefined}
                className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/55 hover:shadow-[0_24px_70px_rgba(0,0,0,0.22)]"
              >
                <article className={`grid gap-8 md:grid-cols-2 ${isEven ? '' : 'md:grid-flow-dense'}`}>
                  <div className={`relative min-h-[280px] overflow-hidden md:min-h-[400px] ${isEven ? '' : 'md:col-start-2'}`}>
                    {service.productMosaic ? (
                      <div className="absolute inset-0 grid grid-cols-3 gap-1.5 bg-[#061426] p-3 sm:p-5">
                        {productMosaic.map((image, imageIndex) => (
                          <div key={image} className="relative overflow-hidden rounded-lg border border-cyan-300/10">
                            <img
                              src={image}
                              alt={`Sản phẩm MMO ${imageIndex + 1}`}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/45 to-transparent" />
                          </div>
                        ))}
                        <div className="absolute inset-x-5 bottom-5 rounded-xl border border-cyan-300/20 bg-[#03182b]/90 p-4 backdrop-blur-md">
                          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">18+ sản phẩm</p>
                          <p className="mt-1 text-lg font-bold text-white">Tài khoản · Phần mềm · Tool · AI</p>
                        </div>
                      </div>
                    ) : (
                      <>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/45 to-transparent md:hidden" />
                      </>
                    )}
                  </div>

                  <div className={`flex flex-col justify-center p-8 md:p-10 ${isEven ? '' : 'md:col-start-1'}`}>
                    <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                      <Icon size={14} />
                      {service.badge}
                    </div>

                    <h3 className="mb-3 text-pretty text-2xl font-bold text-foreground md:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mb-6 leading-relaxed text-muted-foreground">{service.description}</p>

                    <ul className="mb-8 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex gap-3 text-sm text-foreground/90">
                          <Check className="mt-0.5 flex-shrink-0 text-primary" size={18} />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <span className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors group-hover:bg-primary/90 sm:w-fit">
                      {service.cta}
                      <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
