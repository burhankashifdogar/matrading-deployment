import Link from 'next/link';
import { notFound } from 'next/navigation';

import { CarGallery } from '@/components/car-gallery';
import { brand, featuredCars } from '@/data/site';
import { formatPhoneForWhatsApp } from '@/lib/utils';

type CarDetailPageProps = {
  params: Promise<{ slug: string }>;
};

const thumbnailImages = ['/int-1.jpg', '/int-2.jpg', '/int-3.jpg', '/int-4.jpg', '/int-5.jpg', '/int-6.jpg'];

export function generateStaticParams() {
  return featuredCars.map((car) => ({ slug: car.slug }));
}

export default async function CarDetailPage({ params }: CarDetailPageProps) {
  const { slug } = await params;
  const car = featuredCars.find((item) => item.slug === slug);

  if (!car) {
    notFound();
  }

  const engine = car.specs.find((spec) => spec.label === 'Engine')?.value ?? car.bodyType;

  return (
    <div className="stack car-detail-page">
      <nav className="content-wrap car-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">&gt;</span>
        <Link href="/car-sales">Car Sales</Link>
        <span aria-hidden="true">&gt;</span>
        <span>{car.title}</span>
      </nav>

      <section className="content-wrap car-detail-layout">
        <CarGallery mainImage={car.images[0] ?? '/img1.jpg'} thumbnailImages={thumbnailImages} title={car.title} />

        <aside className="car-detail-panel">
          <div className="car-detail-heading">
            <h1>{car.title} Altis</h1>
            <p>{engine} | {car.year} Model</p>
            <div className="detail-badges">
              <span>Verified</span>
              <span>New Arrival</span>
            </div>
          </div>

          <div className="detail-price-block">
            <span>Current Price</span>
            <strong>{car.price}</strong>
            <p>Inclusive of all local taxes</p>
          </div>

          <div className="detail-spec-grid">
            <div>
              <span>Mileage</span>
              <strong>{car.mileage}</strong>
            </div>
            <div>
              <span>Engine</span>
              <strong>{engine}</strong>
            </div>
            <div>
              <span>Fuel Type</span>
              <strong>{car.fuelType}</strong>
            </div>
            <div>
              <span>Transmission</span>
              <strong>{car.transmission}</strong>
            </div>
          </div>

          <div className="detail-actions">
            <a className="detail-action whatsapp" href={formatPhoneForWhatsApp(brand.whatsapp)} target="_blank" rel="noreferrer">
              Contact via WhatsApp
            </a>
            <Link className="detail-action drive" href="/contact">
              Book a Test Drive
            </Link>
          </div>
        </aside>
      </section>

      <section className="content-wrap car-detail-info-grid">
        <div className="detail-content-card">
          <div className="detail-description-block">
            <h3>Description</h3>
            <p>{car.description}</p>
          </div>

          <div className="detail-features-block">
            <h3>Features</h3>
            <div className="detail-feature-grid">
              {['ABS Brakes', 'Air Conditioning', 'Alloy Rims', 'Airbags', 'Power Steering', 'Power Windows', 'Central Locking', 'Touch Screen'].map((feature) => (
                <div className="detail-feature-item" key={feature}>
                  <span aria-hidden="true" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
