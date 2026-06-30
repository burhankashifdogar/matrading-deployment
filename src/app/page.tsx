import Image from 'next/image';
import Link from 'next/link';

import { CarCard } from '@/components/car-card';
import { SectionHeading } from '@/components/section-heading';
import AnimatedNumber from '@/components/animated-number';
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
    points: ['Certified inspection', 'Best market prices', 'Fast delivery'],
    cta: 'View All Cars',
    href: '/car-sales',
    image: '/img1.jpg',
    toneClass: 'promo-tone-sales'
  },
  {
    eyebrow: 'Car Detailing',
    title: 'Make Your Car Shine',
    description: 'Professional detailing services that restore your vehicle to showroom condition.',
    points: ['Ceramic coating', 'Paint correction', 'Interior steam clean'],
    cta: 'View Services',
    href: '/car-detailing',
    image: '/img2.jpg',
    toneClass: 'promo-tone-detailing'
  }
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full px-[clamp(16px,2vw,24px)] grid grid-cols-[1fr_0.95fr] items-center py-12 gap-8 max-[1080px]:grid-cols-1 max-[1080px]:gap-6">
        <div className="pl-0.5">
          <h1 className="my-[0.4rem] mb-[0.85rem] text-[clamp(2.2rem,3.6vw,4rem)] leading-[0.96] tracking-[-0.055em] text-brand font-extrabold">
            DRIVE YOUR DREAM.
            <br />
            <span className="hero-title-accent">WE TAKE CARE</span>
            <br />
            OF THE REST.
          </h1>
          <p className="max-w-[40ch] text-muted text-base leading-[1.6] max-[1080px]:max-w-full">
            Quality cars for sale and professional detailing services that keep your car looking its best.
          </p>
          <div className="flex flex-wrap items-center mt-7 gap-4">
            <Link className="inline-flex items-center justify-center gap-2 rounded-[12px] px-5 py-[0.9rem] bg-gradient-to-br from-brand to-brand-2 text-white font-bold text-[0.92rem] shadow-[0_14px_28px_rgba(10,58,104,0.18)] transition hover:-translate-y-px no-underline after:content-['→'] after:ml-[0.65rem] after:text-[1.05rem]" href="/car-sales">
              Browse Cars
            </Link>
            <Link className="inline-flex items-center justify-center gap-2 rounded-[12px] px-5 py-[0.9rem] bg-white text-brand border border-[rgba(10,58,104,0.18)] font-bold text-[0.92rem] transition hover:-translate-y-px no-underline" href="/car-detailing">
              Detailing Services
            </Link>
          </div>
          <div className="flex gap-[2.2rem] mt-[1.4rem] max-[720px]:gap-5">
            <div>
              <strong className="block text-brand text-[1.55rem] leading-none">1,200+</strong>
              <span className="text-muted text-[0.72rem] uppercase tracking-[0.14em] font-bold">Cars Sold</span>
            </div>
            <div>
              <strong className="block text-brand text-[1.55rem] leading-none">98%</strong>
              <span className="text-muted text-[0.72rem] uppercase tracking-[0.14em] font-bold">Happy Customers</span>
            </div>
          </div>
        </div>

        <div className="p-0 max-w-full relative overflow-hidden rounded-[28px] border border-[rgba(13,27,42,0.1)] shadow-site bg-surface">
          <Image src="/hero-img.jpg" alt="Featured sports car" width={960} height={640} className="w-full h-auto max-h-[420px] object-cover rounded-[28px] max-[1080px]:max-h-[320px] max-[720px]:max-h-[280px]" priority />
        </div>
      </section>

      {/* Feature strip */}
      <section className="w-full px-[clamp(16px,2vw,24px)] grid grid-cols-3 gap-4 py-14 max-[1080px]:grid-cols-2 max-[720px]:grid-cols-1">
        {features.map((feature) => (
          <div key={feature.title} className="flex items-center gap-[0.55rem] text-brand-3 font-bold text-[0.96rem]">
            <span className="w-[22px] h-[22px] rounded-full inline-grid place-items-center text-brand-2">{feature.icon}</span>
            <span>{feature.title}</span>
          </div>
        ))}
      </section>

      {/* Promo grid */}
      <section className="w-full px-[clamp(16px,2vw,24px)] grid grid-cols-2 gap-[1.4rem] py-11 my-5 max-[1080px]:grid-cols-2 max-[720px]:grid-cols-1">
        {promos.map((promo) => (
          <article
            key={promo.title}
            className={`promo-card relative min-h-[360px] rounded-[28px] overflow-hidden shadow-promo transition-[transform,box-shadow] duration-300 hover:-translate-y-[5px] hover:shadow-promo-hover ${promo.toneClass} max-[1080px]:min-h-[320px] max-[720px]:min-h-[300px]`}
          >
            <Image src={promo.image} alt={promo.title} fill className={`promo-image object-cover object-center saturate-[0.82] contrast-[1.05] blur-[0.6px] scale-[1.04] transition-[transform,filter] duration-[450ms] ${promo.toneClass === 'promo-tone-sales' ? 'object-left' : 'object-right'}`} />
            <div className={`promo-overlay absolute inset-0 transition-[background,opacity] duration-[350ms] ${promo.toneClass === 'promo-tone-sales' ? 'bg-[linear-gradient(90deg,rgba(14,51,97,0.4),rgba(9,34,70,0.78))]' : 'bg-[linear-gradient(90deg,rgba(12,40,76,0.42),rgba(5,20,42,0.84))]'}`} />
            <div className={`promo-content absolute bottom-0 left-0 text-white z-[1] p-8 transition-transform duration-300 max-w-[68%] max-[720px]:max-w-full max-[720px]:p-[1.6rem] ${promo.toneClass === 'promo-tone-detailing' ? '' : ''}`}>
              <div className="text-[rgba(255,255,255,0.84)] tracking-[0.18em] text-[0.72rem] uppercase">{promo.eyebrow}</div>
              <h2 className="m-0 text-[clamp(2rem,2.4vw,2.4rem)] leading-[1.02]">{promo.title}</h2>
              <p className="my-[0.9rem] mb-4 text-[rgba(255,255,255,0.94)] text-[0.95rem] leading-[1.75] max-w-[34rem]">{promo.description}</p>
              <ul className="grid gap-[0.6rem] m-0 p-0 list-none">
                {promo.points.map((point) => (
                  <li key={point} className="relative pl-[1.6rem] text-[rgba(255,255,255,0.92)] text-[0.92rem] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-brand-2 before:text-[1.2rem] before:leading-none">{point}</li>
                ))}
              </ul>
              <Link
                className="inline-flex items-center justify-center gap-2 px-4 mt-6 min-w-[170px] rounded-[12px] py-[0.9rem] bg-[rgba(255,255,255,0.98)] text-brand border border-[rgba(10,58,104,0.18)] font-bold text-[0.92rem] shadow-[0_12px_24px_rgba(10,58,104,0.12)] transition hover:-translate-y-px hover:shadow-[0_16px_30px_rgba(31,167,184,0.16)] no-underline max-[720px]:min-w-0"
                href={promo.href}
              >
                {promo.cta}
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Featured cars band */}
      <section className="bg-[#eef4fb] py-24 mt-9 max-[1080px]:py-[72px_0_78px]">
        <div className="w-full px-[clamp(16px,2vw,24px)] grid justify-items-center text-center gap-[18px]">
          <SectionHeading title="FEATURED CARS" />
          <div className="grid grid-cols-4 gap-4 mt-[18px] w-full max-[1080px]:grid-cols-2 max-[720px]:grid-cols-1">
            {featuredCars.map((car) => (
              <CarCard key={car.slug} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-brand mt-[38px] py-7">
        <div className="w-full px-[clamp(16px,2vw,24px)] grid grid-cols-4 gap-4 max-[1080px]:grid-cols-2 max-[720px]:grid-cols-1">
          {[
            { to: 500, duration: 2600, suffix: '+', label: 'Cars Sold' },
            { to: 1000, duration: 2800, suffix: '+', label: 'Happy Customers' },
            { to: 5, duration: 2000, suffix: '+', label: 'Years of Experience' },
            { to: 100, duration: 3000, suffix: '%', label: 'Client Satisfaction' },
          ].map(({ to, duration, suffix, label }) => (
            <div key={label} className="text-white text-center">
              <strong className="block text-[clamp(1.6rem,3.6vw,2.6rem)] font-extrabold leading-none">
                <AnimatedNumber to={to} duration={duration} suffix={suffix} />
              </strong>
              <span className="block text-[clamp(0.78rem,1.2vw,0.95rem)] uppercase tracking-[0.12em] font-bold mt-1.5 opacity-95">{label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
