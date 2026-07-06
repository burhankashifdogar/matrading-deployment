import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { WhatsAppFloat } from '@/components/whatsapp-float';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'M.A Trading',
  description: 'M.A Trading car sales and detailing website.',
  metadataBase: new URL('https://matrading.pk')
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="w-full">
          <SiteHeader />
          <main>{children}</main>
          <WhatsAppFloat />
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
