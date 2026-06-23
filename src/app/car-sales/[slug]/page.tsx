import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { PageShell } from '@/components/page-shell';
import { featuredCars } from '@/data/site';
import { formatPhoneForWhatsApp } from '@/lib/utils';

type CarDetailPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return featuredCars.map((car) => ({ slug: car.slug }));
}

export default function CarDetailPage({ params }: CarDetailPageProps) {
  const { slug } = params;
  const car = featuredCars.find((item) => item.slug === slug);

  if (!car) {
    notFound();
  }

  return (
    <div className="stack">
      <PageShell eyebrow="Car Details" title={`${car.title} ${car.year}`} description={car.description} />

      <section className="detail-grid">
        <div className="site-card panel-pad">
          <div className="gallery">
            <Image src={car.images[0]} alt={car.title} width={1200} height={750} className="card-image" />
            <div className="thumb-row">
              {car.images.map((image) => (
                <div className="thumb" key={image}>
                  <Image src={image} alt={car.title} width={400} height={260} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="site-card panel-pad stack">
          <div>
            <div className="price">{car.price}</div>
            <h2 className="section-title" style={{ marginTop: '0.35rem' }}>
              {car.title} {car.year}
            </h2>
            <div className="meta-row">
              <span className="meta">{car.bodyType}</span>
              <span className="meta">{car.fuelType}</span>
              <span className="meta">{car.transmission}</span>
              <span className="meta">{car.mileage}</span>
            </div>
          </div>

          <div className="action-row">
            <a className="button primary" href={formatPhoneForWhatsApp('+923123456790')} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <Link className="button secondary" href="/contact">
              Book a Test Drive
            </Link>
          </div>

          <div className="car-specs">
            {car.specs.map((spec) => (
              <div className="spec" key={spec.label}>
                <span>{spec.label}</span>
                <strong>{spec.value}</strong>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="split-grid">
        <div className="site-card panel-pad">
          <h3>Description</h3>
          <p className="section-copy">{car.description}</p>
        </div>
        <div className="site-card panel-pad">
          <h3>Seller Information</h3>
          <p className="section-copy">
            M.A Trading ensures transparent communication, clean documents, and fast response to
            every serious inquiry.
          </p>
        </div>
      </section>
    </div>
  );
}
