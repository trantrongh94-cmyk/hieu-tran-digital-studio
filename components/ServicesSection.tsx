import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Play, Camera, Cpu, Code, Headset, MapPin, Check } from 'lucide-react'

const services = [
  {
    icon: Play,
    badge: 'Media & Livestream',
    title: 'Dịch Vụ Livestream - Media',
    description: 'Giải pháp truyền thông trực tiếp và sản xuất nội dung chuyên nghiệp',
    features: [
      'Livestream trực tiếp sự kiện, hội nghị, lễ hội, hợp trực tuyến...',
      'Các giải thể thao: Bóng đá, Billiards, Marathon, Pickleball...',
      'Quay dựng video, MV ca nhạc, TVC, chụp ảnh sự kiện, bay flycam...',
      'Với đội ngũ sản xuất chuyên nghiệp có nhiều năm kinh nghiệm từ nhiều chương trình lớn',
      'Thiết bị chất lượng, đa dạng, tối ưu theo từng nhu cầu của khách hàng',
    ],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-0OS8kxf7JTY8uf3fz9JD8rAGdbrIvj.jpg',
  },
  {
    icon: Cpu,
    badge: 'Automation Tools',
    title: 'Tool Hiếu Trần - Automation',
    description: 'Công cụ tự động hóa tăng tốc quy trình làm việc, tạo nội dung số lượng lớn',
    features: [
      'Tool tự động hóa Flow - Grok - Meta - Whisk',
      'Tăng tốc quy trình làm việc, tạo video/hình ảnh số lượng lớn tiết kiệm thời gian',
      'Có key miễn phí khi mua gmail',
    ],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-030USfjUhdw0JJ5z3sHWGWiZU6w1ts.jpg',
  },
  {
    icon: Code,
    badge: 'MMO & Scripts',
    title: 'Phần Mềm / Script / Tool MMO',
    description: '',
    features: [
      'Script YouTube Automate GPM - nuôi Gmail tự động',
      'CCK TikTok - đăng ký, nuôi nick, tương tác tự động',
      'Tool auto tăng like chéo - Facebook, Instagram, TikTok',
      'Max Care - Max Phone Farm - nuôi nick chuyên nghiệp',
      'MKT TikPro - MKT YouTube - quản lý & tương tác theo kịch bản',
    ],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-FnlqFeXT5O8V3vGyed0SSMjKs7s8tV.jpg',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
          Media - Livestream - Phần mềm - MMO
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
              >
                <div className={`grid md:grid-cols-2 gap-8 ${isEven ? '' : 'md:grid-flow-dense'}`}>
                  {/* Image */}
                  <div className={`relative min-h-[280px] md:min-h-[400px] ${isEven ? '' : 'md:col-start-2'}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/50 to-transparent md:hidden" />
                  </div>

                  {/* Content */}
                  <div className={`p-8 md:p-10 flex flex-col justify-center ${isEven ? '' : 'md:col-start-1'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold mb-4 w-fit">
                      <Icon size={14} />
                      {service.badge}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-pretty">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex gap-3 text-sm text-foreground/90">
                          <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="https://zalo.me/0337146134" target="_blank">
                      <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                        Liên hệ để nhận báo giá
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
