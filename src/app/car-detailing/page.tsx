import Link from 'next/link';

import { PageShell } from '@/components/page-shell';
import { SectionHeading } from '@/components/section-heading';
import { ServiceCard } from '@/components/service-card';
import { services } from '@/data/site';

export default function CarDetailingPage() {
  return (
    <div className="stack">
      <PageShell
        eyebrow="Car Detailing"
        title="Our detailing services"
        description="A premium detailing section designed to become a service catalog and booking funnel later."
      >
        <div className="action-row">
          <Link className="button primary" href="/car-detailing/book">
            Book Appointment
          </Link>
          <Link className="button secondary" href="/contact">
            Get a Quote
          </Link>
        </div>
      </PageShell>

      <section className="grid-cards services-grid">
        {services.map((service) => (
          <div key={service.slug} id={service.slug}>
            <ServiceCard service={service} />
          </div>
        ))}
      </section>

      <section className="banner">
        <div>
          <strong>Ready to make your car shine?</strong>
          <p>Book an appointment today and experience the difference.</p>
        </div>
        <Link className="button secondary" href="/car-detailing/book">
          Book a Quote
        </Link>
      </section>
    </div>
  );
}
