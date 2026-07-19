import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowLeft, FileText, ShieldCheck } from 'lucide-react'

import { Footer } from '@/components/ContactSection'
import { Header } from '@/components/Header'
import { legalConfig, legalUrls } from '@/lib/legal-config'

type LegalPageLayoutProps = {
  eyebrow: string
  title: string
  description: string
  children: ReactNode
}

export function LegalPageLayout({
  eyebrow,
  title,
  description,
  children,
}: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="relative overflow-hidden border-b border-border px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div
          className="absolute inset-0 -z-10 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(96,165,250,.18) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,.18) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="absolute right-[8%] top-20 -z-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />

        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
          >
            <ArrowLeft size={16} />
            Quay lại trang chủ
          </Link>

          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <ShieldCheck size={15} />
            {eyebrow}
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-foreground md:text-6xl">
            {title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            {description}
          </p>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span>
              Đơn vị vận hành:{' '}
              <strong className="text-foreground">{legalConfig.operatorName}</strong>
            </span>
            <span>
              Cập nhật:{' '}
              <strong className="text-foreground">{legalConfig.lastUpdated}</strong>
            </span>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FileText size={20} />
                </div>
                <p className="font-bold text-foreground">Trang pháp lý</p>
              </div>

              <nav className="mt-5 grid gap-2 text-sm">
                <LegalNavLink href={legalUrls.privacy}>
                  Chính sách quyền riêng tư
                </LegalNavLink>
                <LegalNavLink href={legalUrls.terms}>
                  Điều khoản sử dụng
                </LegalNavLink>
                <LegalNavLink href={legalUrls.deletion}>
                  Hướng dẫn xóa dữ liệu
                </LegalNavLink>
              </nav>

              <div className="mt-6 border-t border-border pt-5 text-sm leading-6 text-muted-foreground">
                <p className="font-semibold text-foreground">Liên hệ quyền riêng tư</p>
                <a
                  href={`mailto:${legalConfig.privacyEmail}`}
                  className="mt-1 block break-all text-cyan-300 transition hover:text-cyan-200"
                >
                  {legalConfig.privacyEmail}
                </a>
              </div>
            </div>
          </aside>

          <article className="min-w-0 rounded-3xl border border-border bg-card/70 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.16)] sm:p-8 lg:p-10">
            <div className="space-y-10">{children}</div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function LegalNavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-lg border border-transparent px-3 py-2.5 font-semibold text-muted-foreground transition hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
    >
      {children}
    </Link>
  )
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-2xl font-bold text-foreground md:text-3xl">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-8 text-muted-foreground">
        {children}
      </div>
    </section>
  )
}

export function LegalList({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-2 pl-6">{children}</ul>
}

export function LegalNotice({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-primary/35 bg-primary/10 p-5 text-sm leading-7 text-foreground/90">
      {children}
    </div>
  )
}
