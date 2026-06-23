import Image from 'next/image';
import Link from 'next/link';

import { brand, navigation, services } from '@/data/site';
import { formatPhoneForWhatsApp } from '@/lib/utils';

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="content-wrap">
        <div className="footer-grid">
          <div>
            <div className="brand-mark footer-brand">
              <Image src="/logo.jpeg" alt={brand.name} width={110} height={35} className="brand-image" />
              <div>
                <span className="brand-name">{brand.name}</span>
                <br />
                <span className="brand-subtitle">Your trusted partner for premium cars and detailing services.</span>
              </div>
            </div>
            <small>{brand.address}</small>
          </div>

          <div>
            <h3>Quick Links</h3>
            <div className="stack">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3>Our Services</h3>
            <div className="stack">
              {services.map((service) => (
                <Link key={service.slug} href={`/car-detailing#${service.slug}`}>
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3>Contact</h3>
            <div className="stack">
              <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a>
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
              <a href={formatPhoneForWhatsApp(brand.whatsapp)} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <small>(c) 2026 {brand.name}. All rights reserved.</small>
          <small>
            <Link href="/privacy">Privacy Policy</Link> | <Link href="/terms">Terms & Conditions</Link>
          </small>
        </div>
      </div>
    </footer>
  );
}
