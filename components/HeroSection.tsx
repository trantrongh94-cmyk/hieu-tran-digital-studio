'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Camera, Cpu, Users, TrendingUp, Zap, Globe, ShieldAlert, ChevronDown } from 'lucide-react'

const highlights = [
  {
    icon: Play,
    title: 'Livestream Sự Kiện',
    description: 'Trực tiếp thể thao, hội nghị, lễ hội, sự kiện doanh nghiệp chuyên nghiệp',
  },
  {
    icon: Camera,
    title: 'Quay Phim & Flycam',
    description: 'Quay phim TVC, chụp ảnh, bay flycam, dựng clip chất lượng cao',
  },
  {
    icon: Cpu,
    title: 'Tool Automation',
    description: 'Tự động hóa Flow - Grok - Meta, tạo video & hình ảnh số lượng lớn',
  },
  {
    icon: Globe,
    title: 'Dịch Vụ MMO',
    description: 'Script, tool, phần mềm hỗ trợ TikTok, YouTube, Facebook, Gmail',
  },
  {
    icon: TrendingUp,
    title: 'Tài Khoản & Combo',
    description: 'Gemini Pro, ChatGPT Plus, Canva Pro, CapCut, Adobe, Leonardo AI...',
  },
  {
    icon: Zap,
    title: 'Hỗ Trợ Nhanh Chóng',
    description: 'Tư vấn và hỗ trợ 24/7 qua Zalo, tối ưu chi phí, hiệu quả cao',
  },
]

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="pointer-events-none absolute right-[30%] top-90 hidden md:block z-10 animate-float-slow">
        <div className="w-42 rounded-[28px] border border-yellow-500/50 bg-yellow-400/20 backdrop-blur-xl shadow-[0_10px_30px_rgba(255,190,40,0.08)] p-6">
          <p className="text-xs uppercase tracking-[0.25em] text-yellow-100/80 mb-3">
            Studio
          </p>
          <h3 className="text-xl font-bold text-yellow-200/100 leading-tight">
            Hiếu Trần
          </h3>
          <p className="mt-2 text-sm leading-6 text-yellow-200/85">
            Media
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute right-[12%] top-135 hidden lg:block z-10 animate-float-delay">
        <div className="w-52 rounded-[28px] border border-yellow-500/50 bg-yellow-400/15 backdrop-blur-xl shadow-[0_10px_30px_rgba(255,190,40,0.08)] p-6">
          <p className="text-xs uppercase tracking-[0.25em] text-yellow-100/80 mb-3">
            Automation
          </p>
          <h3 className="text-xl font-bold text-yellow-200/100 leading-tight">
            Shop MMO
          </h3>
          <p className="mt-2 text-sm leading-6 text-yellow-200/85">
            Sản phẩm giá rẻ uy tín
          </p>
        </div>
      </div>

      {/* Tech grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(96, 165, 250, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(96, 165, 250, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, oklch(0.6 0.22 245), transparent 70%)' }} />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, oklch(0.65 0.2 200), transparent 70%)' }} />
      </div>

      <div className="container mx-auto px-4 pt-28 pb-20 relative z-10">
        <div className="max-w-4xl">
          {/* Tag badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Automation - Studio - Media
          </div>

          {/* Hero Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance mb-6">
            Đơn Vị Truyền Thông{' '}
            <span className="text-primary">& Shop</span>{' '}
            <span className="text-accent">MMO</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
            Chuyên cung cấp các dịch vụ Livestream, Media, MMO, Tool Automation và các giải pháp
            hỗ trợ làm việc nhanh, chuyên nghiệp
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
              onClick={() => scrollToSection('services')}
            >
              Xem dịch vụ
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button
              size="lg"
              className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-8"
              onClick={() => scrollToSection('pricing')}
            >
              Xem bảng giá
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary font-semibold px-8"
              onClick={() => scrollToSection('contact')}
            >
              Liên hệ ngay Zalo
            </Button>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8">
            <div>
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground mt-1">Năm kinh nghiệm</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground mt-1">Sự kiện đã thực hiện</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground mt-1">Tỉnh thành hỗ trợ</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Hỗ trợ khách hàng</div>
            </div>
          </div>
          <details className="group mt-14 max-w-[920px] overflow-hidden rounded-2xl border border-cyan-400/25 bg-cyan-400/6 shadow-[0_0_24px_rgba(34,211,238,0.08)]">
            <summary className="list-none cursor-pointer px-4 py-4 md:px-5 md:py-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-400/35 bg-red-500/12 shadow-[0_0_20px_rgba(239,68,68,0.18)] md:h-11 md:w-11">
                  <ShieldAlert className="h-5 w-5 text-red-300" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-[15px] leading-5 font-semibold text-cyan-200 md:text-lg">
                      Lưu ý quan trọng về sản phẩm MMO
                    </h3>

                    <ChevronDown className="h-4 w-4 shrink-0 text-cyan-300/80 transition-transform duration-300 group-open:rotate-180" />
                  </div>

                  <p className="mt-1 text-sm leading-5 text-cyan-100/70 md:text-sm">
                    Vui lòng đọc kỹ thông tin bên dưới trước khi mua hoặc sử dụng !
                  </p>
                </div>
              </div>
            </summary>

            <div className="border-t border-cyan-400/15 px-4 pb-4 pt-3 md:px-5 md:pb-5 md:pt-4">
              <ul className="space-y-3 text-[14px] leading-7 text-cyan-100/90 md:text-sm md:leading-7">
                <li>→ Các sản phẩm có chính sách bảo hành hoặc không tùy theo từng sản phẩm.</li>
                <li>→ Lưu ý vì sản phẩm giá rẻ hoặc phần mềm crack có thể phát sinh lỗi hoặc bị quét trong quá trình sử dụng.</li>
                <li>→ Trong thời gian bảo hành, sẽ được hỗ trợ đổi mới, khắc phục hoặc add lại tài khoản/gmail khác tùy trường hợp.</li>
                <li>→ Sản phẩm đã mua khi shop đã giao hàng sẽ không được hoàn lại tiền.</li>
                <li>→ Vui lòng đọc kỹ hoặc trao đổi trước khi mua để tránh hiểu nhầm về quyền lợi hỗ trợ.</li>
              </ul>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}

export function HighlightsSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Dịch vụ & Giải pháp toàn diện
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Chúng tôi cung cấp đa dạng dịch vụ từ livestream chuyên nghiệp đến công cụ tự động hóa
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={22} />
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
