import Image from 'next/image';
import Link from 'next/link';

import { CarCard } from '@/components/car-card';
import { SectionHeading } from '@/components/section-heading';
import AnimatedNumber from '@/components/animated-number';
import { availableStock } from '@/data/site';
import type { Car } from '@/types/site';

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

const bannerPoints = [
  'Fresh arrivals every week',
  'Verified, inspected inventory',
  'Quick contact and test-drive booking'
];

const homeFeaturedCars: Car[] = [
  'toyota-corolla-2015-gli-white-islamabad',
  'toyota-corolla-2013-altis-white-islamabad',
  'honda-city-2022-cvt-white-lahore',
  'toyota-fortuner-2020-27-v-black-islamabad'
].map((slug) => {
  const car = availableStock.find((item) => item.slug === slug);

  if (!car) {
    throw new Error(`Missing home featured stock car: ${slug}`);
  }

  const bodyType = car.slug.includes('fortuner') ? 'SUV' : 'Sedan';
  const transmission = car.slug.includes('alto') ? 'Manual' : 'Automatic';

  return {
    slug: car.slug,
    title: car.make,
    year: car.model,
    price: `PKR ${new Intl.NumberFormat('en-PK').format(car.demandPkr)}`,
    bodyType,
    fuelType: 'Petrol',
    transmission,
    mileage: `${new Intl.NumberFormat('en-PK').format(car.mileageKm)} km`,
    description: `${car.make} ${car.model} ${car.variant} in ${car.colour}.`,
    specs: [
      { label: 'Variant', value: car.variant },
      { label: 'Color', value: car.colour },
      { label: 'Registered', value: car.registrationCity },
      { label: 'Condition', value: 'Excellent' }
    ],
    images: car.images ?? ['/img1.jpg']
  } satisfies Car;
});

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
            {homeFeaturedCars.map((car, index) => (
              <CarCard key={`${car.slug}-${index}`} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional banner */}
      <section className="w-full px-[clamp(16px,2vw,24px)] mt-9">
        <div className="relative overflow-hidden rounded-[30px] border border-[rgba(10,58,104,0.08)] bg-[linear-gradient(135deg,#102739_0%,#1f435f_54%,#0d6671_100%)] shadow-[0_24px_60px_rgba(8,20,40,0.14)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(31,167,184,0.24),transparent_26%),radial-gradient(circle_at_12%_82%,rgba(255,255,255,0.08),transparent_28%),repeating-linear-gradient(135deg,rgba(255,255,255,0.04)_0_1px,transparent_1px_18px)] opacity-70" />
          <div className="relative grid grid-cols-[1.15fr_0.85fr] items-center gap-8 px-8 py-10 max-[1080px]:grid-cols-1 max-[720px]:px-5 max-[720px]:py-8">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.22)] bg-[rgba(255,255,255,0.08)] px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[rgba(255,255,255,0.9)]">
                Special Offer
              </div>
              <h2 className="mt-4 mb-3 text-[clamp(1.9rem,3vw,3rem)] leading-[1.02] tracking-[-0.05em] font-extrabold">
                Looking for your next car?
                <br />
                We have got the right deal waiting.
              </h2>
              <p className="max-w-[52ch] text-[rgba(255,255,255,0.9)] text-[0.98rem] leading-[1.8]">
                Explore freshly selected cars, compare options quickly, and get in touch with our team for a fast response.
              </p>
              <ul className="grid gap-3 mt-5 mb-0 p-0 list-none">
                {bannerPoints.map((point) => (
                  <li key={point} className="relative pl-7 text-[0.94rem] text-[rgba(255,255,255,0.92)] before:content-['+'] before:absolute before:left-0 before:top-0 before:text-brand-2 before:font-bold">
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mt-7">
                <Link
                  href="/car-sales"
                  className="inline-flex items-center justify-center rounded-[12px] bg-white px-5 py-[0.95rem] text-brand font-bold text-[0.92rem] shadow-[0_14px_26px_rgba(0,0,0,0.14)] transition hover:-translate-y-px no-underline"
                >
                  Browse Inventory
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-[12px] border border-[rgba(255,255,255,0.26)] bg-[rgba(255,255,255,0.06)] px-5 py-[0.95rem] text-white font-bold text-[0.92rem] transition hover:-translate-y-px hover:bg-[rgba(255,255,255,0.12)] no-underline"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] shadow-[0_18px_40px_rgba(0,0,0,0.18)] max-[720px]:min-h-[250px]">
              <Image
                src="/hero-img.jpg"
                alt="Promotional car banner"
                fill
                className="object-cover object-center scale-[1.08]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,25,48,0.08),rgba(8,25,48,0.5))]" />
              <div className="absolute bottom-4 left-4 right-4 rounded-[18px] border border-[rgba(255,255,255,0.16)] bg-[rgba(7,25,46,0.62)] p-4 text-white backdrop-blur-[8px]">
                <div className="text-[0.7rem] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.72)]">Featured promotion</div>
                <div className="mt-1 text-[1.1rem] font-bold leading-tight">Drive away with confidence and a cleaner deal.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

