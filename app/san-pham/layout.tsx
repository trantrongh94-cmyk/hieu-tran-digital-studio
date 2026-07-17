import { Footer } from '@/components/ContactSection'
import { Header } from '@/components/Header'

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
