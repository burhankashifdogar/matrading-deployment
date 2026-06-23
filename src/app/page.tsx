import Image from 'next/image';
import Link from 'next/link';

import { CarCard } from '@/components/car-card';
import { SectionHeading } from '@/components/section-heading';
import { featuredCars } from '@/data/site';

const features = [
  { title: 'Quality Cars', icon: '01' },
  { title: 'Trusted Service', icon: '02' },
  { title: 'Easy Financing', icon: '03' }
];

const promos = [
  {
    eyebrow: 'Car Sales',
    title: 'Find Your Perfect Car',
    description: 'Browse our wide range of quality cars, all vehicles are inspected and ready for your next ride.',
    points: ['Certified inspection', 'Best market prices', 'Flexible financing', 'Fast delivery'],
    cta: 'View All Cars',
    href: '/car-sales',
    image: '/img1.jpg',
    toneClass: 'promo-tone-sales'
  },
  {
    eyebrow: 'Car Detailing',
    title: 'Make Your Car Shine',
    description: 'Professional detailing services that restore your vehicle to showroom condition.',
    points: ['Ceramic coating', 'Paint correction', 'Interior steam clean', 'Wheel polish'],
    cta: 'View Services',
    href: '/car-detailing',
    image: '/img2.jpg',
    toneClass: 'promo-tone-detailing'
  }
];

export default function HomePage() {
  return (
    <>
      <section className="content-wrap hero-grid">
        <div className="hero-copy-block">
          <h1 className="hero-title">
            DRIVE YOUR DREAM.
            <br />
            <span className="hero-title-accent">WE TAKE CARE</span>
            <br />
            OF THE REST.
          </h1>
          <p className="hero-copy">
            Quality cars for sale and professional detailing services that keep your car looking its best.
          </p>
          <div className="hero-actions">
            <Link className="button primary arrow" href="/car-sales">
              Browse Cars
            </Link>
            <Link className="button secondary" href="/car-detailing">
              Detailing Services
            </Link>
          </div>
          <div className="hero-stats">
            <div>
              <strong>1,200+</strong>
              <span>Cars Sold</span>
            </div>
            <div>
              <strong>98%</strong>
              <span>Happy Customers</span>
            </div>
          </div>
        </div>

        <div className="hero-visual panel">
          <Image src="/hero-img.png" alt="Featured sports car" width={960} height={640} className="hero-image" priority />
        </div>
      </section>

      <section className="content-wrap feature-strip feature-strip-inline">
        {features.map((feature) => (
          <div key={feature.title} className="feature-inline-item">
            <span className="feature-inline-icon">{feature.icon}</span>
            <span>{feature.title}</span>
          </div>
        ))}
      </section>

      <section className="content-wrap promo-grid">
        {promos.map((promo) => (
          <article key={promo.title} className={`promo-card ${promo.toneClass}`}>
            <Image src={promo.image} alt={promo.title} fill className="promo-image" />
            <div className="promo-overlay" />
            <div className="promo-content">
              <div className="eyebrow promo-eyebrow">{promo.eyebrow}</div>
              <h2>{promo.title}</h2>
              <p className="promo-copy">{promo.description}</p>
              <ul className="promo-list">
                {promo.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link className="button promo-button" href={promo.href}>
                {promo.cta}
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="featured-band">
        <div className="content-wrap featured-band-inner">
          <SectionHeading title="FEATURED CARS" />
          <div className="grid-cards cars-grid featured-cars-grid">
            {featuredCars.map((car) => (
              <CarCard key={car.slug} car={car} />
            ))}
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="content-wrap stats-grid">
          <div className="stat">
            <strong>500+</strong>
            <span>Cars Sold</span>
          </div>
          <div className="stat">
            <strong>1000+</strong>
            <span>Happy Customers</span>
          </div>
          <div className="stat">
            <strong>5+</strong>
            <span>Years of Experience</span>
          </div>
          <div className="stat">
            <strong>100%</strong>
            <span>Client Satisfaction</span>
          </div>
        </div>
      </section>
    </>
  );
}
