import Link from 'next/link';

import { PageShell } from '@/components/page-shell';

const reasons = [
  'Quality assured cars and detailing work.',
  'Best prices with straightforward conversations.',
  'Trusted service from a team that knows vehicles.',
  'Easy financing support when applicable.',
  'Fast response on WhatsApp, call, and web inquiry.',
  'A site structure ready for future scale.'
];

export default function WhyUsPage() {
  return (
    <div className="stack">
      <PageShell eyebrow="Why Us" title="Why choose M.A Trading?" description="A compact trust page that supports car sales and detailing conversions." />

      <section className="site-card panel-pad">
        <div className="grid-cards services-grid">
          {reasons.map((reason) => (
            <div key={reason} className="panel panel-pad">
              <div className="eyebrow">Benefit</div>
              <strong>{reason}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="banner">
        <div>
          <strong>Have questions?</strong>
          <p>We are here to help you with cars, detailing, and bookings.</p>
        </div>
        <Link className="button secondary" href="/contact">
          Contact Us
        </Link>
      </section>
    </div>
  );
}
