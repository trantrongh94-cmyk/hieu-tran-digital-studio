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
      'Livestream trực tiếp sự kiện, hội nghị, lễ hội, hợp trực tuyến',
      'Các giải thể thao: Bóng đá, Billiards, Marathon,...',
      'Quay TVC, chụp ảnh sự kiện, bay flycam 4K',
      'Quay dựng video, bay flycam chuyên nghiệp',
      'Hỗ trợ khu vực: Hồ Chí Minh, Bình Dương, Đồng Nai, Bình Phước',
    ],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-0OS8kxf7JTY8uf3fz9JD8rAGdbrIvj.jpg',
  },
  {
    icon: Cpu,
    badge: 'Automation Tools',
    title: 'Tool Hiếu Trần - Automation',
    description: 'Công cụ tự động hóa giúp tăng tốc quy trình làm việc, tạo nội dung số lượng lớn một cách nhanh chóng',
    features: [
      'Tool Hiếu Trần hỗ trợ tự động hóa Flow - Grok - Meta',
      'Tăng tốc quy trình làm việc, tiết kiệm thời gian',
      'Tạo video, hình ảnh số lượng lớn bằng prompt AI',
      'Tự động tải xuống khi hoàn thành',
      'Có bản miễn phí và bản kích hoạt key nâng cao',
    ],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-030USfjUhdw0JJ5z3sHWGWiZU6w1ts.jpg',
  },
  {
    icon: Code,
    badge: 'MMO & Scripts',
    title: 'Phần Mềm / Script / Tool MMO',
    description: 'Giải pháp phần mềm và script toàn diện cho các nền tảng digital marketing và MMO',
    features: [
      'Script YouTube Automate GPM - nuôi Gmail tự động',
      'CCK TikTok - đăng ký, nuôi nick, tương tác tự động',
      'Tool auto tăng like chéo - Facebook, Instagram, TikTok',
      'Max Care - Max Phone Farm - nuôi nick chuyên nghiệp',
      'MKT TikPro - MKT YouTube - quản lý & tương tác theo kịch bản',
      'Script Gmail - YouTube Automate GPM - reg Gmail hàng loạt',
    ],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-FnlqFeXT5O8V3vGyed0SSMjKs7s8tV.jpg',
  },
  {
    icon: Headset,
    badge: 'Support & Community',
    title: 'Dịch Vụ Hỗ Trợ & Cộng Đồng',
    description: 'Hỗ trợ khách hàng tận tình, hướng dẫn chi tiết, giải đáp mọi thắc mắc về dịch vụ và sản phẩm',
    features: [
      'Hỗ trợ qua Zalo: 0337.146.134 (24/7)',
      'Nhóm hỗ trợ và cộng đồng người dùng',
      'Tư vấn cài đặt và triển khai chi tiết',
      'Hướng dẫn sử dụng và tối ưu hiệu quả',
      'Giải đáp thắc mắc và xử lý sự cố nhanh chóng',
    ],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-tEn2ugZUUOtG32HRjkffYDBdQzBGjf.jpg',
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
            Giải pháp toàn diện từ livestream chuyên nghiệp, công cụ automation đến phần mềm MMO
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
                        Liên hệ báo giá
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Location info */}
        <div className="mt-16 p-6 rounded-xl border border-border bg-secondary/30 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="text-accent" size={20} />
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">Khu vực phục vụ</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Chúng tôi cung cấp dịch vụ livestream và media tại{' '}
              <span className="text-accent font-medium">Hồ Chí Minh, Bình Dương, Đồng Nai, Bình Phước</span>.
              Các dịch vụ tool và phần mềm hỗ trợ toàn quốc qua Zalo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
