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
    <div className="bg-white pt-[2.4rem]">

      {/* Intro Section */}
      <section className="w-full px-[clamp(16px,2vw,24px)] grid grid-cols-[1fr_0.86fr] gap-8 items-start py-[48px_40px] max-[980px]:grid-cols-1">

        {/* Copy Panel */}
        <div className="grid gap-[1.1rem] items-start justify-items-start max-w-[46ch] max-[980px]:max-w-full">
          <span className="text-[#1fa7b8] text-[0.78rem] font-extrabold tracking-[0.18em] uppercase">
            About Us
          </span>

          <h1 className="m-0 text-[#063e66] text-[clamp(2.2rem,4vw,4rem)] leading-[1.08] tracking-[-0.04em]">
            Your Trusted Partner for Quality Cars &amp;
            <br />
            Detailing Services
          </h1>

          <p className="m-0 text-[#40536b] text-base leading-[1.85]">
            At M.A Trading, we believe in quality, transparency, and customer satisfaction. With years of experience in the automotive industry, we provide the best used cars and professional detailing services under one roof.
          </p>

          {/* Check List — keeping about-check-list class because ::before pseudo element */}
          <div className="about-check-list">
            <span>Quality Inspected Cars</span>
            <span>Transparent Deals</span>
            <span>Customer First Approach</span>
          </div>

          <Link
            className="inline-flex w-max items-center justify-center min-h-[46px] rounded-md bg-[#063e66] text-white px-[1.45rem] font-[750] hover:bg-[#055f86] transition-colors"
            href="/car-sales"
          >
            Learn More
          </Link>
        </div>

        {/* Image Panel */}
        <div className="flex justify-end max-[980px]:justify-center">
          {/* about-image-shape kept because of clip-path polygon + ::before overlay */}
          <div className="about-image-shape">
            <Image
              src="/about.png"
              alt="About M.A Trading"
              width={1100}
              height={760}
              className="w-full h-full object-cover object-center block"
              priority
            />
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="w-full px-[clamp(16px,2vw,24px)] max-w-[1180px] mx-auto mt-[5.2rem] mb-[3.2rem]">

        {/* Section Heading */}
        <div className="grid gap-[0.55rem] justify-items-center mb-[3.2rem] text-center">
          <span className="text-[#063e66] text-[0.8rem] font-black tracking-[0.22em] uppercase">
            Our Core Pillars
          </span>
          <h2 className="m-0 text-[#063e66] text-[clamp(2rem,3vw,3rem)] leading-[1.08] tracking-[-0.04em]">
            Driven by Integrity, Defined by Quality
          </h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-3 gap-8 items-stretch max-[980px]:grid-cols-1">
          {pillars.map((pillar, index) => (
            <article
              className={[
                'grid gap-[1.15rem] min-h-[330px] border border-[rgba(10,58,104,0.08)] rounded-2xl bg-white p-[2.35rem]',
                'shadow-[0_18px_42px_rgba(8,20,40,0.055)] transition-[transform,box-shadow] duration-[250ms] ease-out',
                'hover:-translate-y-3 hover:shadow-[0_28px_60px_rgba(8,20,40,0.18)]',
                index === 1
                  ? 'translate-y-8 shadow-[0_24px_52px_rgba(8,20,40,0.11)] max-[980px]:translate-y-0'
                  : ''
              ].join(' ')}
              key={pillar.title}
            >
              {/* Icon — keeping about-pillar-icon class because complex ::before/::after CSS icons */}
              <span
                className={[
                  'about-pillar-icon',
                  `icon-${pillar.icon}`,
                  index === 1 ? 'bg-[#063e66] text-white' : 'bg-[#eaf3ff] text-[#063e66]'
                ].join(' ')}
                aria-hidden="true"
              />

              <h3 className="m-0 text-[#063e66] text-[1.08rem] font-[750]">
                {pillar.title}
              </h3>

              {pillar.description && (
                <p className="m-0 text-[#2d435b] text-[0.98rem] leading-[1.8]">
                  {pillar.description}
                </p>
              )}

              {pillar.bullets && (
                <ul className="grid gap-[0.8rem] m-0 p-0 list-none">
                  {pillar.bullets.map((item) => (
                    <li
                      key={item}
                      className="relative pl-[1.55rem] text-[#2d435b] text-[0.9rem] leading-[1.45] before:content-[''] before:absolute before:left-0 before:top-[0.25rem] before:w-[0.65rem] before:h-[0.65rem] before:border-2 before:border-[#063e66] before:rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-[#0a3a68] mt-[38px] py-7">
        <div className="w-full px-[clamp(16px,2vw,24px)] grid grid-cols-4 gap-4 max-[1080px]:grid-cols-2 max-[720px]:grid-cols-1">
          <div className="text-white text-center">
            <strong className="block text-[clamp(1.6rem,3.6vw,2.6rem)] font-extrabold leading-none">
              <AnimatedNumber to={500} duration={2600} suffix="+" />
            </strong>
            <span className="block text-[clamp(0.78rem,1.2vw,0.95rem)] uppercase tracking-[0.12em] font-bold mt-[0.35rem] opacity-95">
              Cars Sold
            </span>
          </div>
          <div className="text-white text-center">
            <strong className="block text-[clamp(1.6rem,3.6vw,2.6rem)] font-extrabold leading-none">
              <AnimatedNumber to={1000} duration={2800} suffix="+" />
            </strong>
            <span className="block text-[clamp(0.78rem,1.2vw,0.95rem)] uppercase tracking-[0.12em] font-bold mt-[0.35rem] opacity-95">
              Happy Customers
            </span>
          </div>
          <div className="text-white text-center">
            <strong className="block text-[clamp(1.6rem,3.6vw,2.6rem)] font-extrabold leading-none">
              <AnimatedNumber to={5} duration={2000} suffix="+" />
            </strong>
            <span className="block text-[clamp(0.78rem,1.2vw,0.95rem)] uppercase tracking-[0.12em] font-bold mt-[0.35rem] opacity-95">
              Years of Experience
            </span>
          </div>
          <div className="text-white text-center">
            <strong className="block text-[clamp(1.6rem,3.6vw,2.6rem)] font-extrabold leading-none">
              <AnimatedNumber to={100} duration={3000} suffix="%" />
            </strong>
            <span className="block text-[clamp(0.78rem,1.2vw,0.95rem)] uppercase tracking-[0.12em] font-bold mt-[0.35rem] opacity-95">
              Client Satisfaction
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}