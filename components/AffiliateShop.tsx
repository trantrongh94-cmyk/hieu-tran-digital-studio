'use client'

import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  Camera,
  Cpu,
  Headphones,
  Home,
  Lightbulb,
  Mic2,
  Monitor,
  Search,
  ShoppingBag,
  Smartphone,
} from 'lucide-react'
import { affiliateProducts, type AffiliateCategory, type AffiliateProduct } from '@/lib/affiliate-products'

const categories: AffiliateCategory[] = ['Nổi bật', 'Livestream', 'Công nghệ', 'Góc làm việc', 'Gia dụng']

export function AffiliateShop() {
  const [activeCategory, setActiveCategory] = useState<AffiliateCategory>('Nổi bật')
  const [query, setQuery] = useState('')

  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('vi')
    return affiliateProducts.filter((product) => {
      const matchesCategory = activeCategory === 'Nổi bật' ? product.featured : product.category === activeCategory
      const matchesQuery =
        !normalizedQuery ||
        product.name.toLocaleLowerCase('vi').includes(normalizedQuery) ||
        product.description.toLocaleLowerCase('vi').includes(normalizedQuery)
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  return (
    <>
      <section className="relative overflow-hidden px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_30%,rgba(249,115,22,.16),transparent_26%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,.12),transparent_28%)]" />
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-orange-300/20 bg-orange-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-orange-200">
            <ShoppingBag size={14} /> Hiếu Trần
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-[-0.00em] text-white sm:text-5xl">
            Các sản phẩm trên sàn thương mại điện tử
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            Danh sách được gắn trong TikTok Bio, fanpage hoặc nội dung review
          </p>

          <div className="mx-auto mt-9 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.045] p-3 shadow-[0_20px_70px_rgba(0,0,0,.2)] backdrop-blur-xl">
            <label className="flex items-center gap-3 rounded-xl bg-[#06101f] px-4 py-3">
              <Search className="h-5 w-5 text-slate-500" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Tìm sản phẩm"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
              />
            </label>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-black transition ${
                  activeCategory === category
                    ? 'bg-orange-400 text-slate-950'
                    : 'border border-white/10 bg-white/[0.035] text-slate-300 hover:bg-white/[0.07]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {visibleProducts.length === 0 && (
            <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-10 text-center">
              <p className="font-bold text-white">Không tìm thấy sản phẩm phù hợp.</p>
              <p className="mt-2 text-sm text-slate-500">Thử từ khóa khác hoặc chọn danh mục khác.</p>
            </div>
          )}

          <div className="mt-10 rounded-[1.2rem] border border-white/10 bg-white/[0.035] p-5 text-sm leading-4 text-slate-400">
            Giá và ưu đãi được quyết định bởi gian hàng trên Shopee và có thể thay đổi theo từng thời điểm.
          </div>
        </div>
      </section>
    </>
  )
}

function ProductCard({ product, index }: { product: AffiliateProduct; index: number }) {
  const Icon = getProductIcon(product)
  const gradient = [
    'from-orange-400/25 via-amber-300/10 to-transparent',
    'from-cyan-400/25 via-blue-400/10 to-transparent',
    'from-violet-400/25 via-fuchsia-400/10 to-transparent',
    'from-emerald-400/20 via-cyan-400/10 to-transparent',
  ][index % 4]

  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#08172a] transition duration-300 hover:-translate-y-1 hover:border-orange-300/30">
      <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${gradient}`}>
        {product.image ? (
          <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <div className="grid h-24 w-24 place-items-center rounded-[2rem] border border-white/10 bg-black/20 text-white shadow-2xl backdrop-blur-xl transition duration-500 group-hover:scale-105 group-hover:rotate-2">
              <Icon size={42} strokeWidth={1.5} />
            </div>
          </div>
        )}
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-orange-400 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-slate-950">
            {product.badge}
          </span>
        )}
        <span className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/70 backdrop-blur">
          {product.category}
        </span>
      </div>

      <div className="p-5">
        <h2 className="min-h-[56px] text-lg font-black leading-7 text-white">{product.name}</h2>
        <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">{product.description}</p>
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="sponsored nofollow noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-orange-300"
        >
          Xem trên Shopee <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  )
}

function getProductIcon(product: AffiliateProduct) {
  const text = product.name.toLocaleLowerCase('vi')
  if (text.includes('micro')) return Mic2
  if (text.includes('đèn')) return Lightbulb
  if (text.includes('tripod') || text.includes('giá đỡ')) return Smartphone
  if (text.includes('webcam')) return Camera
  if (text.includes('capture')) return Monitor
  if (text.includes('bàn phím')) return Cpu
  if (text.includes('tai nghe')) return Headphones
  if (product.category === 'Gia dụng') return Home
  return ShoppingBag
}
