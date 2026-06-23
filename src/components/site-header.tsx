"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { brand, navigation } from '@/data/site';
import { cn, formatPhoneForWhatsApp } from '@/lib/utils';

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="content-wrap topbar-inner-content">
          <Link href="/" className="brand-mark" aria-label={`${brand.name} home`}>
            <Image src="/logo.jpeg" alt={brand.name} width={128} height={42} className="brand-image" priority />
          </Link>

          <nav className="nav" aria-label="Primary">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-active={pathname === item.href}
                className={cn(pathname === item.href && 'is-active')}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav nav-actions">
            <a className="header-cta secondary" href={`tel:${brand.phone.replace(/\s/g, '')}`}>
              Call {brand.phone}
            </a>
            <a className="header-cta primary" href={formatPhoneForWhatsApp(brand.whatsapp)} target="_blank" rel="noreferrer">
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
