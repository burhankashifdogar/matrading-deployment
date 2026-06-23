import Link from 'next/link';

import { CarCard } from '@/components/car-card';
import { PageShell } from '@/components/page-shell';
import { SectionHeading } from '@/components/section-heading';
import { featuredCars } from '@/data/site';

export default function CarSalesPage() {
  return (
    <div className="stack">
      <PageShell
        eyebrow="Car Sales"
        title="Find your perfect car"
        description="Browse a static inventory now with a structure ready for filters, search, and admin-managed vehicles later."
      >
        <div className="action-row">
          <Link className="button primary" href="/contact">
            Sell / Inquire
          </Link>
          <Link className="button secondary" href="/car-detailing">
            Detailing Services
          </Link>
        </div>
      </PageShell>

      <section className="content-wrap split-grid">
        <aside className="site-card panel-pad sidebar">
          <SectionHeading title="Filters" description="Static for now, wired for future search and filtering." />
          <div className="filter-box">
            <input placeholder="Search make or model" />
            <select defaultValue="">
              <option value="" disabled>
                Make
              </option>
              <option>Toyota</option>
              <option>Honda</option>
              <option>Hyundai</option>
            </select>
            <select defaultValue="">
              <option value="" disabled>
                Model
              </option>
              <option>Corolla</option>
              <option>Civic</option>
              <option>Elantra</option>
            </select>
            <select defaultValue="">
              <option value="" disabled>
                Transmission
              </option>
              <option>Automatic</option>
              <option>Manual</option>
            </select>
            <button className="button primary" type="button">
              Reset Filters
            </button>
          </div>
        </aside>

        <div className="grid-cards cars-grid">
          {featuredCars.map((car) => (
            <CarCard key={car.slug} car={car} />
          ))}
        </div>
      </section>
    </div>
  );
}
