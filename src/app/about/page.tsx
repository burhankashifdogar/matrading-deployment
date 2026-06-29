import Image from 'next/image';
import Link from 'next/link';
import AnimatedNumber from '@/components/animated-number';

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
          <h1>
            Your Trusted Partner for Quality Cars &
            <br />
            Detailing Services
          </h1>
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
          <div className="about-image-shape">
            <Image
              src="/about.png"
              alt="About M.A Trading"
              width={1100}
              height={760}
              className="about-image"
              priority
            />
          </div>
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

      <section className="stats-band">
        <div className="content-wrap stats-grid">
          <div className="stat">
            <strong><AnimatedNumber to={500} duration={2600} suffix="+" /></strong>
            <span>Cars Sold</span>
          </div>
          <div className="stat">
            <strong><AnimatedNumber to={1000} duration={2800} suffix="+" /></strong>
            <span>Happy Customers</span>
          </div>
          <div className="stat">
            <strong><AnimatedNumber to={5} duration={2000} suffix="+" /></strong>
            <span>Years of Experience</span>
          </div>
          <div className="stat">
            <strong><AnimatedNumber to={100} duration={3000} suffix="%" /></strong>
            <span>Client Satisfaction</span>
          </div>
        </div>
      </section>
    </div>
  );
}
