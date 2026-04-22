'use client';

import { Facebook, Mail, MessageCircle, Phone, MapPin, ArrowRight, ShieldAlert, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mx-auto mb-16 md:mb-20 max-w-[920px]">
          {/* Mobile */}
          <details className="md:hidden overflow-hidden rounded-2xl border border-cyan-400/25 bg-cyan-400/5 shadow-[0_0_20px_rgba(34,211,238,0.08)]">
            <summary className="list-none cursor-pointer px-4 py-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-400/35 bg-red-500/12 shadow-[0_0_20px_rgba(239,68,68,0.18)]">
                  <ShieldAlert className="h-5 w-5 text-red-300" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-[15px] leading-5 font-semibold text-cyan-200">
                      Lưu ý trước khi mua sản phẩm MMO
                    </h3>
                    <ChevronDown className="h-4 w-4 shrink-0 text-cyan-300/80" />
                  </div>

                  <p className="mt-1 text-sm leading-5 text-cyan-100/70">
                    Vui lòng đọc kĩ trước khi mua sản phẩm.
                  </p>
                </div>
              </div>
            </summary>

            <div className="border-t border-cyan-400/15 px-4 pb-4 pt-3">
              <ul className="space-y-2 text-[14px] leading-7 text-cyan-100/90">
                <li>→ Các sản phẩm có chính sách bảo hành hoặc không tùy theo từng sản phẩm.</li>
                <li>→ Lưu ý vì sản phẩm giá rẻ hoặc phần mềm crack có thể phát sinh lỗi hoặc bị quét trong quá trình sử dụng.</li>
                <li>→ Trong thời gian bảo hành, sẽ được hỗ trợ đổi mới, khắc phục hoặc add lại tài khoản/gmail khác tùy trường hợp.</li>
                <li>→ Sản phẩm đã mua khi shop đã giao hàng sẽ không được hoàn lại tiền.</li>
                <li>→ Vui lòng đọc kỹ hoặc trao đổi trước khi mua để tránh hiểu nhầm về quyền lợi hỗ trợ.</li>
              </ul>
            </div>
          </details>

          {/* Desktop */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-cyan-400/25 bg-cyan-400/6 shadow-[0_0_24px_rgba(34,211,238,0.08)]">
            <div className="flex items-center gap-3 px-5 py-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-400/35 bg-red-500/12 shadow-[0_0_20px_rgba(239,68,68,0.18)]">
                <ShieldAlert className="h-5 w-5 text-red-300" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-200">
                  Lưu ý quan trọng về sản phẩm MMO
                </h3>
                <p className="text-sm text-cyan-100/70">
                  Vui lòng đọc kỹ phần thông tin bên dưới trước khi mua hoặc sử dụng.
                </p>
              </div>
            </div>

            <div className="border-t border-cyan-400/15 px-5 py-4">
              <ul className="space-y-2 text-sm leading-7 text-cyan-100/90">
                <li>→ Các sản phẩm có chính sách bảo hành hoặc không tùy theo từng sản phẩm.</li>
                <li>→ Lưu ý vì sản phẩm giá rẻ hoặc phần mềm crack có thể phát sinh lỗi hoặc bị quét trong quá trình sử dụng.</li>
                <li>→ Trong thời gian bảo hành, sẽ được hỗ trợ đổi mới, khắc phục hoặc add lại tài khoản/gmail khác tùy trường hợp.</li>
                <li>→ Sản phẩm đã mua khi shop đã giao hàng sẽ không được hoàn lại tiền.</li>
                <li>→ Vui lòng đọc kỹ hoặc trao đổi trước khi mua để tránh hiểu nhầm về quyền lợi hỗ trợ.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-mono">
            Thank You !
          </h2>
          <p className="text-accent text-lg">Cảm ơn đã tin tưởng</p>
          <p className="text-accent text-lg">và sử dụng dịch vụ của chúng tôi !</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left: QR & Contact Info */}
          <div className="flex flex-col items-center md:items-start space-y-8">
            {/* Contact Details */}
            <div className="space-y-4 w-full">
              <div className="flex items-start gap-4">
                <a
                  href="https://zalo.me/0337146134"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 hover:bg-accent/30 transition"
                >
                  <MessageCircle className="w-6 h-6 text-accent" />
                </a>
                <div>
                  <p className="text-muted-foreground text-sm">CONTACT US</p>
                  <p className="text-foreground font-semibold">Zalo: 0337.146.134</p>
                  <p className="text-foreground font-semibold">Gmail: trantrong999@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <a
                  href="https://www.facebook.com/hie.trantrong/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 hover:bg-accent/30 transition"
                >
                  <Facebook className="w-6 h-6 text-accent" />
                </a>
                <div>
                  <p className="text-muted-foreground text-sm">FACEBOOK</p>
                  <p className="text-foreground font-semibold">Hiếu Trần</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">SERVICE AREAS</p>
                  <p className="text-foreground font-semibold">HCM, Bình Dương, Đồng Nai, Bình Phướcc</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Decorative & Message */}
          <div className="flex flex-col items-center justify-center md:items-end space-y-8">
            {/* Illustration placeholder - could be replaced with actual image */}
            <div className="w-full max-w-[500px] bg-gradient-to-br from-card to-secondary rounded-2xl border-2 border-accent/30 overflow-hidden relative">
              <img
                src="contact-image 1.png"
                alt="Contact illustration"
                className="w-full h-auto block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent"></div>
            </div>

            {/* Message */}
            <div className="text-center md:text-right space-y-4">
              <p className="text-muted-foreground text-lg">
                Cảm ơn bạn đã quan tâm đến các sản phẩm dịch vụ của chúng tôi !
              </p>
              <a
                href="https://zalo.me/0337146134"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-accent hover:bg-accent/90 text-background font-bold inline-flex gap-2">
                  Liên hệ ngay
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-foreground font-mono font-bold text-lg">HIẾU TRẦN MMO</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/hie.trantrong/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/40 transition"
              >
                <Facebook className="w-5 h-5 text-accent" />
              </a>
              <a
                href="https://zalo.me/0337146134"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/40 transition"
              >
                <MessageCircle className="w-5 h-5 text-accent" />
              </a>
              <a
                href="mailto:trantrong999@gmail.com"
                className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/40 transition"
              >
                <Mail className="w-5 h-5 text-accent" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-foreground font-bold">DỊCH VỤ</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#services" className="hover:text-accent transition">Dịch vụ Livestream chuyên nghiệp</a></li>
              <li><a href="#" className="hover:text-accent transition">Dịch vụ Quay Phim - Chụp Ảnh</a></li>
              <li><a href="#" className="hover:text-accent transition">Dịch vụ MMO - Tool Automation - Tool Phone Farm</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-foreground font-bold">CÔNG TY</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-accent transition">Về chúng tôi</a></li>
              <li><a href="#pricing" className="hover:text-accent transition">Bảng giá</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-foreground font-bold">LIÊN HỆ</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>0337.146.134</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>trantrong999@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span>Hồ Chí Minh, Bình Dương, Đồng Nai, Bình Phước</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              {currentYear} Hieu Tran 94 - All rights reserved.
            </p>
            <div className="flex gap-6 text-muted-foreground text-sm">
              <a href="#" className="hover:text-accent transition">Chính sách bảo mật</a>
              <a href="#" className="hover:text-accent transition">Điều khoản dịch vụ</a>
              <a href="#contact" className="hover:text-accent transition">Liên hệ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
