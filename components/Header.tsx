'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const navigation = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Dịch vụ', href: '/#services' },
  { label: 'Livestream', href: '/dich-vu/livestream' },
  { label: 'Sản phẩm MMO', href: '/mmo' },
  { label: 'Affiliate', href: '/shop' },
  { label: 'Liên hệ', href: '/#contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'border-b border-border bg-background/95 shadow-[0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="whitespace-nowrap text-lg font-bold text-foreground transition-colors hover:text-primary md:text-xl"
          >
            <span className="text-primary">HIẾU TRẦN</span>
            <span className="hidden text-muted-foreground md:inline"> - </span>
            <span className="hidden text-accent md:inline">AUTOMATION</span>
            <span className="hidden text-muted-foreground md:inline"> - </span>
            <span className="hidden md:inline">MEDIA - LIVESTREAM</span>
          </Link>

          <nav className="hidden items-center gap-5 xl:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-foreground/90 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}

            <Link href="https://zalo.me/0812700812" target="_blank" rel="noreferrer">
              <Button className="bg-primary hover:bg-primary/90">Liên hệ Zalo</Button>
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            className="text-foreground transition-colors hover:text-primary xl:hidden"
            aria-label={isMobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="grid gap-2 border-t border-border/70 py-4 xl:hidden">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="https://zalo.me/0812700812"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2"
            >
              <Button className="w-full bg-primary hover:bg-primary/90">Liên hệ Zalo</Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
