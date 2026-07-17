import type { Metadata } from 'next'
import { AffiliateShop } from '@/components/AffiliateShop'
import { Footer } from '@/components/ContactSection'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: 'Affiliate Shop',
  description: 'Danh sách sản phẩm Shopee được Hiếu Trần chọn lọc cho creator, livestream, góc làm việc và nhu cầu hằng ngày.',
}

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#06101f] text-white">
      <Header />
      <AffiliateShop />
      <Footer />
    </main>
  )
}
