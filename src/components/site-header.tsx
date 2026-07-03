"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { brand, navigation } from '@/data/site';
import { cn, formatPhoneForWhatsApp } from '@/lib/utils';

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="w-full border-b border-[rgba(13,27,42,0.1)] bg-white sticky top-0 z-50">
      <div className="w-full px-[clamp(16px,2vw,24px)] lg:px-[clamp(28px,4vw,56px)]">
        <div className="flex items-center justify-between gap-3 py-3.5 lg:gap-6 xl:gap-9">
          <Link href="/" className="flex items-center gap-3.5 flex-none" aria-label={`${brand.name} home`}>
            <Image src="/logo.jpeg" alt={brand.name} width={128} height={42} className="w-auto h-10 lg:h-11 object-contain" priority />
          </Link>

          <nav className="hidden lg:flex flex-wrap items-center gap-2 lg:gap-2.5 xl:gap-3.5" aria-label="Primary">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-active={pathname === item.href}
                className={cn(
                  'font-semibold text-[0.92rem] text-muted px-[0.55rem] py-[0.4rem] rounded-full transition-colors',
                  pathname === item.href
                    ? 'text-brand bg-[rgba(31,167,184,0.12)]'
                    : 'hover:text-brand'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2 lg:gap-2.5 xl:gap-3.5 flex-shrink-0">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-[12px] px-3.5 lg:px-4 xl:px-3 py-2 lg:py-2.5 xl:py-[0.5rem] border border-[rgba(10,58,104,0.18)] bg-white text-brand font-bold text-[0.82rem] lg:text-[0.86rem] xl:text-[0.92rem] transition hover:-translate-y-px no-underline"
              href={formatPhoneForWhatsApp(brand.whatsapp)}
              target="_blank"
              rel="noreferrer"
              aria-label={`Chat with ${brand.name} on WhatsApp`}
            >
              Call {brand.phone}
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-[12px] px-3.5 lg:px-4 xl:px-3 py-2 lg:py-2.5 xl:py-[0.5rem] bg-gradient-to-br from-brand to-brand-2 text-white font-bold text-[0.82rem] lg:text-[0.86rem] xl:text-[0.92rem] shadow-[0_14px_28px_rgba(10,58,104,0.18)] transition hover:-translate-y-px no-underline"
              href="/car-detailing/book"
              aria-label="Open car detailing booking form"
            >
              Get a Quote
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-[12px] border border-[rgba(10,58,104,0.14)] bg-white text-brand"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="relative block w-5 h-5" aria-hidden="true">
              <span className={`absolute left-0 top-[4px] w-5 h-[2px] bg-current transition-transform duration-200 ${menuOpen ? 'translate-y-[5px] rotate-45' : ''}`} />
              <span className={`absolute left-0 top-[9px] w-5 h-[2px] bg-current transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 top-[14px] w-5 h-[2px] bg-current transition-transform duration-200 ${menuOpen ? '-translate-y-[5px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>

        {menuOpen ? (
          <div
            id="mobile-menu"
            className="lg:hidden border-t border-[rgba(13,27,42,0.08)] py-4 pb-5"
          >
            <nav className="grid gap-2" aria-label="Mobile primary">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  data-active={pathname === item.href}
                  className={cn(
                    'rounded-[14px] px-4 py-3 text-[0.98rem] font-semibold transition-colors',
                    pathname === item.href
                      ? 'bg-[rgba(31,167,184,0.12)] text-brand'
                      : 'text-[#334960] hover:bg-[#f5f8fc] hover:text-brand'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="grid gap-3 mt-4">
              <a
                className="inline-flex items-center justify-center rounded-[12px] px-4 py-3 border border-[rgba(10,58,104,0.18)] bg-white text-brand font-bold text-[0.92rem] no-underline"
                href={formatPhoneForWhatsApp(brand.whatsapp)}
                target="_blank"
                rel="noreferrer"
              >
                Call {brand.phone}
              </a>
              <a
                className="inline-flex items-center justify-center rounded-[12px] px-4 py-3 bg-gradient-to-br from-brand to-brand-2 text-white font-bold text-[0.92rem] no-underline shadow-[0_14px_28px_rgba(10,58,104,0.18)]"
                href="/car-detailing/book"
              >
                Get a Quote
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
