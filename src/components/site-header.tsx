"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { brand, navigation } from '@/data/site';
import { cn, formatPhoneForWhatsApp } from '@/lib/utils';

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-[rgba(13,27,42,0.1)] bg-white">
      <div className="w-full px-[clamp(28px,4vw,56px)]">
        <div className="w-full flex items-center justify-between py-3.5 gap-4 lg:gap-6 xl:gap-9">
          <Link href="/" className="flex items-center gap-3.5 flex-none" aria-label={`${brand.name} home`}>
            <Image src="/logo.jpeg" alt={brand.name} width={128} height={42} className="w-auto h-11 object-contain" priority />
          </Link>

          <nav className="flex flex-wrap items-center gap-2 lg:gap-2.5 xl:gap-3.5" aria-label="Primary">
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

          <div className="flex items-center gap-2 lg:gap-2.5 xl:gap-3.5 flex-shrink-0">
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
        </div>
      </div>
    </header>
  );
}
