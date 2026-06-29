import Image from 'next/image';
import Link from 'next/link';

const pillars = [
  {
    title: 'Our Mission',
    icon: 'flag',
    description:
      'To provide an uncompromising automotive experience that bridges the gap between mechanical excellence and luxury lifestyle, ensuring every vehicle we touch leaves in its absolute peak state.'
  },
  {
    title: 'Our Vision',
    icon: 'eye',
    description:
      'To be the global benchmark for automotive curation and detailing, where the M.A Trading seal of approval is recognized as the ultimate guarantee of vehicle perfection.'
  },
  {
    title: 'Why M.A Trading',
    icon: 'shield',
    bullets: [
      'Certified multi-point inspections by master technicians.',
      'Transparent vehicle history and provenance.',
      'Proprietary 12-stage detailing process.'
    ]
  }
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="content-wrap about-intro-section">
        <div className="about-copy-panel">
          <span className="about-eyebrow">About Us</span>
          <h1>Your Trusted Partner for Quality Cars & Detailing Services</h1>
          <p>
            At M.A Trading, we believe in quality, transparency, and customer satisfaction. With years of experience in the automotive industry, we provide the best used cars and professional detailing services under one roof.
          </p>
          <div className="about-check-list">
            <span>Quality Inspected Cars</span>
            <span>Transparent Deals</span>
            <span>Customer First Approach</span>
          </div>
          <Link className="about-primary-link" href="/car-sales">
            Learn More
          </Link>
        </div>

        <div className="about-image-panel">
          <Image src="/hero-img.jpg" alt="M.A Trading showroom" width={1100} height={760} priority />
        </div>
      </section>

      <section className="content-wrap about-pillars-section">
        <div className="about-section-heading">
          <span>Our Core Pillars</span>
          <h2>Driven by Integrity, Defined by Quality</h2>
        </div>

        <div className="about-pillars-grid">
          {pillars.map((pillar) => (
            <article className="about-pillar-card" key={pillar.title}>
              <span className={`about-pillar-icon icon-${pillar.icon}`} aria-hidden="true" />
              <h3>{pillar.title}</h3>
              {pillar.description && <p>{pillar.description}</p>}
              {pillar.bullets && (
                <ul>
                  {pillar.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="content-wrap about-standard-wrap">
        <div className="about-standard-cta">
          <h2>Ready to experience the M.A standard?</h2>
          <p>
            Whether you&apos;re looking to acquire a rare masterpiece or restore your current vehicle to its factory-fresh glory, our team is ready to assist.
          </p>
          <div className="about-standard-actions">
            <Link href="/contact">Schedule a Consultation</Link>
            <Link href="/car-sales">View Sales Inventory</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
