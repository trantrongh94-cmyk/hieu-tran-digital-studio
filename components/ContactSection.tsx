'use client'

import Link from 'next/link'
import { ArrowRight, Facebook, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-20 top-10 h-96 w-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 left-10 h-96 w-96 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Liên hệ</p>
          <h2 className="mt-4 font-mono text-4xl font-bold text-foreground md:text-5xl">
            Trao đổi trực tiếp với chúng tôi
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
            Nội dung hoặc tên sản phẩm cần tư vấn để nhận phương án phù hợp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 rounded-3xl border border-border bg-card/65 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <div className="space-y-6">
            <ContactItem
              href="https://zalo.me/0812700812"
              icon={MessageCircle}
              label="Zalo Liên Hệ"
              value="0812.700.812"
            />
            <ContactItem
              href="mailto:trantrongh94@gmail.com"
              icon={Mail}
              label="Gmail Liên Hệ"
              value="trantrongh94@gmail.com"
            />
            <ContactItem
              href="https://www.facebook.com/hie.trantrong/"
              icon={Facebook}
              label="Facebook Hỗ Trợ"
              value="Hiếu Trần"
            />

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-background/45 p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Khu vực phục vụ chính</p>
                <p className="mt-1 font-semibold leading-7 text-foreground">TP.HCM, Bình Dương, Đồng Nai, Bình Phước</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-accent/25 bg-gradient-to-br from-card to-secondary p-5 md:p-7">
            <img
              src="/contact-image 1.png"
              alt="Mã QR Zalo hỗ trợ và Zalo Hiếu Trần"
              className="w-full max-w-[500px] rounded-xl"
            />
            <p className="mt-5 text-center text-sm leading-7 text-muted-foreground">
              Quét mã QR hoặc bấm nút bên dưới để gửi thông tin dự án và nhận tư vấn !
            </p>
            <a href="https://zalo.me/0812700812" target="_blank" rel="noreferrer" className="mt-5">
              <Button className="gap-2 bg-accent font-bold text-background hover:bg-accent/90">
                Liên hệ ngay <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({
  href,
  icon: Icon,
  label,
  value,
}: {
  href: string
  icon: typeof MessageCircle
  label: string
  value: string
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="flex items-start gap-4 rounded-2xl border border-border bg-background/45 p-4 transition hover:border-primary/45 hover:bg-background/70"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15">
        <Icon className="h-5 w-5 text-accent" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
        <p className="mt-1 font-semibold text-foreground">{value}</p>
      </div>
    </a>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="font-mono text-lg font-bold text-foreground">HIẾU TRẦN 94</h3>
            <p className="text-sm leading-6 text-muted-foreground">Media · Livestream · Automation · MMO</p>
            <div className="flex gap-3">
              <SocialLink href="https://www.facebook.com/hie.trantrong/" icon={Facebook} label="Facebook" />
              <SocialLink href="https://zalo.me/0812700812" icon={MessageCircle} label="Zalo" />
              <SocialLink href="mailto:trantrongh94@gmail.com" icon={Mail} label="Email" />
            </div>
          </div>

          <FooterGroup
            title="DỊCH VỤ"
            links={[
              ['Livestream - Truyền thông', '/dich-vu/livestream'],
              ['Quay phim - Chụp ảnh', '/#services'],
              ['Tool Automation', '/#services'],
            ]}
          />

          <FooterGroup
            title="GIAN HÀNG"
            links={[
              ['Sản phẩm MMO', '/mmo'],
              ['Affiliate Shopee', '/shop'],
              ['Liên hệ tư vấn', '/#contact'],
            ]}
          />

          <div className="space-y-4">
            <h4 className="font-bold text-foreground">LIÊN HỆ</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" />0812.700.812</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" />trantrongh94@gmail.com</li>
              <li className="flex items-start gap-2"><MapPin className="mt-1 h-4 w-4 shrink-0 text-accent" />Hồ Chí Minh và các tỉnh thành lân cận</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>{currentYear} Hieu Tran 94 - All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-end">
            <Link href="/" className="transition hover:text-accent">
              Trang chủ
            </Link>

            <Link href="/mmo" className="transition hover:text-accent">
              Sản phẩm MMO
            </Link>

            <Link href="/shop" className="transition hover:text-accent">
              Affiliate
            </Link>

            <Link href="/privacy-policy" className="transition hover:text-accent">
              Chính sách quyền riêng tư
            </Link>

            <Link href="/terms-of-service" className="transition hover:text-accent">
              Điều khoản sử dụng
            </Link>

            <Link href="/data-deletion" className="transition hover:text-accent">
              Xóa dữ liệu
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: typeof Facebook; label: string }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 transition hover:bg-accent/40"
    >
      <Icon className="h-5 w-5 text-accent" />
    </a>
  )
}

function FooterGroup({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div className="space-y-4">
      <h4 className="font-bold text-foreground">{title}</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {links.map(([label, href], index) => (
          <li key={`${label}-${href}-${index}`}>
            <Link href={href} className="transition hover:text-accent">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
