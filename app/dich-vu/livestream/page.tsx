/*
===============================================================================
FILE: app/dich-vu/livestream/page.tsx

NHỮNG VỊ TRÍ THƯỜNG CẦN SỬA:
1. LINKS: Link Zalo, Google Drive hình ảnh và video.
2. HERO_IMAGE: Ảnh lớn ở phần đầu trang.
3. GALLERY_ITEMS: Ba ảnh năng lực 1200 x 900.
4. capabilityItems: Bốn khung năng lực.
5. mediaPackages: Nội dung sáu gói nằm trong lib/livestream-packages.ts.

ẢNH GALLERY CẦN ĐẶT ĐÚNG ĐƯỜNG DẪN:
public/livestream/su-kien-doanh-nghiep.jpg
public/livestream/giai-dau-the-thao.jpg
public/livestream/san-khau-le-hoi.jpg
===============================================================================
*/

import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'
import {
  ArrowRight,
  Camera,
  Check,
  Clapperboard,
  Radio,
  ShieldCheck,
  Signal,
  Video,
} from 'lucide-react'

import { ContactSection, Footer } from '@/components/ContactSection'
import { Header } from '@/components/Header'
import {
  mediaAddons,
  mediaPackages,
  type MediaPackage,
} from '@/lib/livestream-packages'

/*
===============================================================================
SEO CỦA TRANG
===============================================================================
*/
export const metadata: Metadata = {
  title:
    'Dịch vụ Livestream, Chụp ảnh, Quay video & Flycam | Hiếu Trần Media',
  description:
    'Dịch vụ livestream sự kiện, chụp ảnh, quay video, flycam và sản xuất nội dung truyền thông chuyên nghiệp.',
}

/*
===============================================================================
LINK LIÊN HỆ VÀ LINK THAM KHẢO
Chỉ cần sửa các URL tại đây, không phải tìm trong toàn bộ file.
===============================================================================
*/
const LINKS = {
  zalo: 'https://zalo.me/0337146134',

  // Thay bằng link thư mục Google Drive hình ảnh của bạn.
  referenceImages:
    'https://drive.google.com/drive/folders/1gUZu9HVICQEsKGTSMN-Xo25-2wINAf8j?usp=sharing',

  // QUAN TRỌNG: thay đường dẫn bên dưới bằng link thư mục video thật.
  referenceVideos:
    'https://drive.google.com/drive/folders/THAY_MA_THU_MUC_VIDEO',
} as const

/*
===============================================================================
ẢNH LỚN Ở PHẦN ĐẦU TRANG
Có thể đổi thành ảnh trong public, ví dụ:
const HERO_IMAGE = '/livestream/anh-hero.jpg'
===============================================================================
*/
const HERO_IMAGE =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-0OS8kxf7JTY8uf3fz9JD8rAGdbrIvj.jpg'

/*
===============================================================================
BỐN KHUNG NĂNG LỰC
Muốn thêm khung: sao chép một object và đổi title/description/icon.
===============================================================================
*/
const capabilityItems = [
  {
    icon: Camera,
    title: 'Đa máy quay',
    description:
      'Cấu hình số lượng camera theo quy mô và kịch bản chương trình.',
  },
  {
    icon: Signal,
    title: 'Đường truyền ổn định',
    description:
      'Kiểm tra trước sự kiện và chuẩn bị phương án dự phòng phù hợp.',
  },
  {
    icon: Video,
    title: 'Đồ họa trực tiếp',
    description:
      'Logo, lower-third, video intro, bảng tên và nội dung chương trình.',
  },
  {
    icon: ShieldCheck,
    title: 'Vận hành có quy trình',
    description:
      'Khảo sát, test tín hiệu, tổng duyệt và bàn giao sau chương trình.',
  },
] as const

/*
===============================================================================
BA ẢNH NĂNG LỰC
- Ảnh khuyến nghị: 1200 x 900 (tỷ lệ 4:3).
- Muốn thêm ảnh thứ tư: sao chép một object.
- Nếu thêm ảnh thứ tư, có thể đổi md:grid-cols-3 thành md:grid-cols-2 xl:grid-cols-4.
===============================================================================
*/
const GALLERY_ITEMS = [
  {
    id: 'su-kien-doanh-nghiep',
    title: 'Sự kiện doanh nghiệp',
    image: '/livestream/su-kien-doanh-nghiep.jpg',
    alt: 'Hình ảnh triển khai sự kiện doanh nghiệp',
  },
  {
    id: 'giai-dau-the-thao',
    title: 'Giải đấu thể thao',
    image: '/livestream/giai-dau-the-thao.jpg',
    alt: 'Hình ảnh triển khai giải đấu và sự kiện thể thao',
  },
  {
    id: 'san-khau-le-hoi',
    title: 'Sân khấu lễ hội',
    image: '/livestream/san-khau-le-hoi.jpg',
    alt: 'Hình ảnh triển khai sân khấu và lễ hội',
  },
] as const

/*
===============================================================================
THÔNG TIN KHÁCH HÀNG CẦN GỬI KHI YÊU CẦU BÁO GIÁ
===============================================================================
*/
const QUOTE_REQUIREMENTS = [
  'Ngày, giờ và địa điểm tổ chức',
  'Thời lượng chương trình',
  'Số lượng sân khấu hoặc khu vực ghi hình',
  'Dịch vụ cần dùng: Livestream, chụp ảnh, quay video hoặc Flycam',
  'Yêu cầu camera, âm thanh, ánh sáng và đồ họa',
  'Nhu cầu dựng highlight hoặc bàn giao file gốc',
] as const

export default function LivestreamServicePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <HeroSection />
      <CapabilitiesSection />
      <GallerySection />
      <PackagesSection />
      <QuoteRequirementsSection />

      <ContactSection />
      <Footer />
    </main>
  )
}

/*
===============================================================================
SECTION 1: GIỚI THIỆU ĐẦU TRANG
===============================================================================
*/
function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(96,165,250,.18) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,.18) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="absolute right-[10%] top-24 -z-10 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Link
            href="/#services"
            className="text-sm font-semibold text-cyan-200 transition hover:text-cyan-200"
          >
            ← Quay lại danh sách dịch vụ
          </Link>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <Radio size={8} />
            Media & Livestream
          </div>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-tight text-foreground md:text-6xl">
            Dịch vụ Media Livestream chuyên nghiệp
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Hội nghị, lễ hội, giải thể
            thao, talkshow và sự các kiện doanh nghiệp
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ExternalButton href={LINKS.zalo}>
              Nhận tư vấn báo giá
              <ArrowRight size={17} />
            </ExternalButton>

            <a
              href="#bang-gia"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-6 py-3 text-sm font-bold text-foreground transition hover:border-primary/50"
            >
              Xem các gói dịch vụ
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-secondary">
            <img
              src={HERO_IMAGE}
              alt="Năng lực Media và Livestream Hiếu Trần"
              className="h-full w-full object-contain"
            />

            <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/10 bg-[#020817]/85 p-4 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                Hiếu Trần Media
              </p>
              <p className="mt-1 font-semibold text-white">
                Livestream · Quay video · TVC · Recap · Chụp ảnh · Flycam
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/*
===============================================================================
SECTION 2: BỐN KHUNG NĂNG LỰC
===============================================================================
*/
function CapabilitiesSection() {
  return (
    <section className="border-y border-border bg-secondary/30 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {capabilityItems.map((item) => {
          const Icon = item.icon

          return (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon size={21} />
              </div>

              <h2 className="mt-5 text-lg font-bold text-foreground">
                {item.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

/*
===============================================================================
SECTION 3: HÌNH ẢNH VÀ VIDEO THAM KHẢO

ĐIỂM ĐÃ TỐI ƯU:
- Nội dung căn giữa.
- Hai nút cách ảnh bằng mt-16.
- Khung ảnh giữ tỷ lệ 4:3, phù hợp ảnh 1200 x 900.
- Tiêu đề nằm ở thanh bên dưới, không che ảnh.
- Container rộng tối đa 1500px để ảnh lớn hơn.
===============================================================================
*/
function GallerySection() {
  return (
    <section
      id="hinh-anh-video"
      className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-[1500px]">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Hình ảnh - Video
          </p>

          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-5xl">
            Các nhóm chương trình đã triển khai
          </h2>

          <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-muted-foreground">
            Một số hình ảnh thực tế từ các chương trình livestream, sự kiện và
            hoạt động truyền thông đã triển khai.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ExternalButton
              href={LINKS.referenceImages}
              className="min-w-[220px]"
            >
              Xem hình ảnh tham khảo
            </ExternalButton>

            <ExternalButton
              href={LINKS.referenceVideos}
              variant="outline"
              className="min-w-[220px]"
            >
              Xem video tham khảo
            </ExternalButton>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {GALLERY_ITEMS.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

type GalleryItem = (typeof GALLERY_ITEMS)[number]

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={item.image}
          alt={item.alt}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="border-t border-primary/20 bg-[#06152a] px-5 py-4 text-center">
        <p className="text-lg font-bold text-white lg:text-xl">
          {item.title}
        </p>
      </div>
    </article>
  )
}

/*
===============================================================================
SECTION 4: SÁU GÓI DỊCH VỤ
Nội dung từng khung được lấy từ:
lib/livestream-packages.ts
===============================================================================
*/
function PackagesSection() {
  return (
    <section
      id="bang-gia"
      className="scroll-mt-24 bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Cấu hình & báo giá
          </p>

          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-5xl">
            Các gói dịch vụ tham khảo
          </h2>

          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Chi phí được báo giá cụ thể sau
            khi nhận được nội dung, thời lượng, địa điểm và yêu cầu thực tế
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mediaPackages.map((item) => (
            <MediaPackageCard key={item.id} item={item} />
          ))}
        </div>

        <MediaAddonsTable />
      </div>
    </section>
  )
}

function MediaPackageCard({ item }: { item: MediaPackage }) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl border p-6 ${
        item.featured
          ? 'border-primary/60 bg-card shadow-[0_20px_70px_rgba(30,110,255,0.12)]'
          : 'border-border bg-card/75'
      }`}
    >
      {item.featured && (
        <span className="absolute right-5 top-5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
          Đề xuất
        </span>
      )}

      <p className="font-mono text-xs font-bold tracking-[0.2em] text-primary">
        GÓI {item.label}
      </p>

      <h3 className="mt-3 pr-16 text-2xl font-bold text-foreground">
        {item.name}
      </h3>

      <p className="mt-3 min-h-[78px] text-sm leading-6 text-muted-foreground">
        {item.suitableFor}
      </p>

      <dl className="mt-6 space-y-3 rounded-2xl border border-border bg-background/45 p-4 text-sm">
        {item.specifications.map((specification) => (
          <InfoRow
            key={`${item.id}-${specification.label}`}
            label={specification.label}
            value={specification.value}
          />
        ))}
      </dl>

      <ul className="mt-6 flex-1 space-y-3">
        {item.deliverables.map((feature) => (
          <li
            key={`${item.id}-${feature}`}
            className="flex gap-3 text-sm leading-6 text-foreground/90"
          >
            <Check size={17} className="mt-1 shrink-0 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7 border-t border-border pt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Chi phí
        </p>

        <p className="mt-2 text-2xl font-bold text-cyan-300">{item.price}</p>

        <ExternalButton
          href={LINKS.zalo}
          className="mt-5 w-full"
        >
          Nhận báo giá chi tiết
        </ExternalButton>
      </div>
    </article>
  )
}

function MediaAddonsTable() {
  return (
    <div className="mt-12 overflow-x-auto rounded-2xl border border-border bg-card">
      <table className="w-full min-w-[760px] border-collapse text-left">
        <thead className="bg-secondary/70 text-sm text-foreground">
          <tr>
            <th className="px-5 py-4 font-bold">Hạng mục thiết bị bổ sung</th>
            <th className="px-5 py-4 font-bold">Phạm vi</th>
            <th className="px-5 py-4 font-bold">Chi phí</th>
          </tr>
        </thead>

        <tbody>
          {mediaAddons.map(([name, description, price]) => (
            <tr
              key={name}
              className="border-t border-border text-sm"
            >
              <td className="px-5 py-4 font-semibold text-foreground">
                {name}
              </td>

              <td className="px-5 py-4 leading-6 text-muted-foreground">
                {description}
              </td>

              <td className="px-5 py-4 font-semibold text-cyan-300">
                {price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/*
===============================================================================
SECTION 5: THÔNG TIN CẦN GỬI ĐỂ BÁO GIÁ
===============================================================================
*/
function QuoteRequirementsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-border bg-card p-7 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Clapperboard size={25} />
            </div>

            <h2 className="mt-5 text-3xl font-bold text-foreground">
              Thông tin khách hàng cần gửi để nhận báo giá cụ thể
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {QUOTE_REQUIREMENTS.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl border border-border bg-background/40 p-4 text-sm leading-6 text-foreground/90"
              >
                <Check size={17} className="mt-1 shrink-0 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/*
===============================================================================
CÁC COMPONENT NHỎ DÙNG LẠI
===============================================================================
*/
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-3">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="break-words font-semibold text-foreground">{value}</dd>
    </div>
  )
}

type ExternalButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline'
  className?: string
}

function ExternalButton({
  href,
  children,
  variant = 'primary',
  className = '',
}: ExternalButtonProps) {
  const variantClass =
    variant === 'outline'
      ? 'border border-primary/50 bg-primary/10 text-cyan-300 hover:bg-primary/20'
      : 'bg-primary text-primary-foreground hover:bg-primary/90'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-bold transition ${variantClass} ${className}`}
    >
      {children}
    </a>
  )
}
