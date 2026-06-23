import Image from 'next/image';
import Link from 'next/link';

import { PageShell } from '@/components/page-shell';
import { featuredCars } from '@/data/site';

export default function AboutPage() {
  return (
    <div className="stack">
      <PageShell
        eyebrow="About Us"
        title="Your trusted partner for quality cars and detailing services."
        description="M.A Trading focuses on honest sales, premium detailing, and a customer-first experience."
      />

      <section className="two-column">
        <div className="site-card panel-pad stack">
          <p className="section-copy">
            We believe vehicle buying and care should feel simple, premium, and transparent. The
            website is structured to support listings today and a full admin workflow tomorrow.
          </p>
          <ul className="list">
            <li className="list-item">
              <span className="list-dot" />
              <span>Quality inspected cars</span>
            </li>
            <li className="list-item">
              <span className="list-dot" />
              <span>Transparent deals</span>
            </li>
            <li className="list-item">
              <span className="list-dot" />
              <span>Customer-first approach</span>
            </li>
          </ul>
          <Link className="button primary" href="/car-sales">
            Browse Cars
          </Link>
        </div>

        <div className="site-card panel-pad">
          <Image
            src={featuredCars[0].images[1]}
            alt="M.A Trading showroom"
            width={1200}
            height={800}
            className="card-image"
          />
        </div>
      </section>
    </div>
  );
}
