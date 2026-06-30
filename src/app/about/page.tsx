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

function PillarIcon({ name }: { name: string }) {
  const commonProps = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const
  };
  switch (name) {
    case 'flag':
      return (
        <svg {...commonProps}>
          <path d="M4 3v18" />
          <path d="M4 4h12l-2 4 2 4H4" />
        </svg>
      );
    case 'eye':
      return (
        <svg {...commonProps}>
          <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...commonProps}>
          <path d="M12 3l7 3v5c0 4.5-2.8 8-7 10-4.2-2-7-5.5-7-10V6l7-3z" />
          <path d="M9 12l2 2 4-5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function AboutPage() {
  return (
    <div className="bg-white pt-[2.4rem]">

      {/* Intro Section */}
      <section className="w-full px-[clamp(16px,2vw,24px)] grid grid-cols-[1fr_0.86fr] gap-8 items-start py-[48px_40px] max-[980px]:grid-cols-1">

        {/* Copy Panel */}
        <div className="grid gap-[1.1rem] items-start justify-items-start max-w-[600px] max-[980px]:max-w-full">
          <span className="text-[#1fa7b8] text-[0.78rem] font-extrabold tracking-[0.18em] uppercase">
            About Us
          </span>

          <h1 className="m-0 max-w-[50ch] text-[#063e66] text-[clamp(2.2rem,4vw,4rem)] leading-[1.08] tracking-[-0.04em] font-medium">
            Your Trusted Partner for Quality Cars &amp; Detailing Services
          </h1>

          <p className="m-0 max-w-[60ch] text-[#40536b] text-base leading-[1.85]">
            At M.A Trading, we believe in quality, transparency, and customer satisfaction. With years of experience in the automotive industry, we provide the best used cars and professional detailing services under one roof.
          </p>

          {/* Check List */}
          <div className="grid gap-[0.65rem]">
            <span className="relative block pl-6 text-[#2d435b] text-[0.95rem] font-semibold before:content-[''] before:absolute before:left-0 before:top-1 before:w-[0.8rem] before:h-[0.8rem] before:rounded-full before:bg-[#e8f7fa] before:shadow-[inset_0_0_0_3px_#1fa7b8]">
              Quality Inspected Cars
            </span>
            <span className="relative block pl-6 text-[#2d435b] text-[0.95rem] font-semibold before:content-[''] before:absolute before:left-0 before:top-1 before:w-[0.8rem] before:h-[0.8rem] before:rounded-full before:bg-[#e8f7fa] before:shadow-[inset_0_0_0_3px_#1fa7b8]">
              Transparent Deals
            </span>
            <span className="relative block pl-6 text-[#2d435b] text-[0.95rem] font-semibold before:content-[''] before:absolute before:left-0 before:top-1 before:w-[0.8rem] before:h-[0.8rem] before:rounded-full before:bg-[#e8f7fa] before:shadow-[inset_0_0_0_3px_#1fa7b8]">
              Customer First Approach
            </span>
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
              {/* Icon */}
              <span
                className={`relative inline-grid place-items-center w-12 h-12 rounded-xl ${
                  index === 1 ? 'bg-[#063e66] text-white' : 'bg-[#eaf3ff] text-[#063e66]'
                }`}
                aria-hidden="true"
              >
                <PillarIcon name={pillar.icon} />
              </span>

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
                      className="flex items-start gap-2 text-[#2d435b] text-[0.9rem] leading-[1.45]"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#063e66"
                        strokeWidth={2}
                        className="flex-none mt-[0.15rem]"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M9 12l2 2 4-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{item}</span>
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