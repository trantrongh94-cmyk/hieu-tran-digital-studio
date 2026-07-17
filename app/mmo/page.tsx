import type { Metadata } from 'next'
import { ContactSection, Footer } from '@/components/ContactSection'
import { Header } from '@/components/Header'
import { PricingSection } from '@/components/PricingSection'

export const metadata: Metadata = {
  title: 'Sản phẩm MMO & Tool | Hiếu Trần 94',
  description: 'Gian hàng tài khoản AI, phần mềm, VPN, công cụ sáng tạo và các sản phẩm hỗ trợ MMO của Hiếu Trần 94.',
}

export default function MmoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
