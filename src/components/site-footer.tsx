import Image from 'next/image';
import Link from 'next/link';

import { brand, navigation } from '@/data/site';

export function SiteFooter() {
  return (
    <footer className="w-full mt-8 pt-6 pb-5 border-t border-[rgba(13,27,42,0.1)] bg-white">
      <div className="w-full px-[clamp(16px,2vw,24px)]">
        <div className="grid gap-4 grid-cols-[1.2fr_0.9fr_0.9fr] max-[1080px]:grid-cols-1">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <Image src="/logo.jpeg" alt={brand.name} width={110} height={35} className="w-auto h-[58px] object-contain" />
              <div>
                <span className="font-extrabold tracking-[0.04em] text-[1.1rem]">{brand.name}</span>
                <br />
                <span className="text-muted text-[0.85rem]">Your trusted partner for premium cars and detailing services.</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3">Quick Links</h3>
            <div className="grid gap-4">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-muted hover:text-brand transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3">Our Services</h3>
            <div className="grid gap-4">
              <Link href="/car-detailing#cleaning" className="text-muted hover:text-brand transition-colors">
                Detailings (Cleaning)
              </Link>
              <Link href="/car-detailing#documents-inspection" className="text-muted hover:text-brand transition-colors">
                Documents Inspection
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-[rgba(13,27,42,0.1)] flex flex-wrap justify-between gap-3">
          <small className="text-muted">(c) 2026 {brand.name}. All rights reserved.</small>
          <small className="text-muted">
            <Link href="/privacy" className="hover:text-brand">Privacy Policy</Link> | <Link href="/terms" className="hover:text-brand">Terms &amp; Conditions</Link>
          </small>
        </div>
      </div>
    </footer>
  );
}