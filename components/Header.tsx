'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-lg md:text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            <span className="text-primary">HIẾU TRẦN</span>
            <span className="hidden md:inline text-muted-foreground"> - </span>
            <span className="hidden md:inline text-accent">AUTOMATION</span>
            <span className="hidden md:inline text-muted-foreground"> - </span>
            <span className="hidden md:inline">MEDIA</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Trang chủ
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Dịch vụ
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Giá cả
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Liên hệ
            </button>
            <Link href="https://zalo.me/0337146134" target="_blank">
              <Button className="bg-primary hover:bg-primary/90">
                Liên hệ Zalo
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-6 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Trang chủ
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Dịch vụ
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Giá cả
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Liên hệ
            </button>
            <Link href="https://zalo.me/0337146134" target="_blank" className="inline-block">
              <Button className="bg-primary hover:bg-primary/90 w-full">
                Liên hệ Zalo
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
