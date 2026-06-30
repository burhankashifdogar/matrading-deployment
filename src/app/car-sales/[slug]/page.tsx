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
    <div className="grid gap-4 bg-[#f5f8fe] pt-[1.6rem]">
      {/* Breadcrumb */}
      <nav
        className="flex items-center gap-[0.65rem] w-[min(100%,calc(790px+1.55rem+385px))] mx-auto px-[clamp(16px,2vw,24px)] mb-[0.15rem] text-[#68788d] text-[0.9rem] font-medium max-[1080px]:w-full"
        aria-label="Breadcrumb"
      >
        <Link href="/" className="text-[#063e66] font-semibold hover:text-brand-2">Home</Link>
        <span aria-hidden="true">&gt;</span>
        <Link href="/car-sales" className="text-[#063e66] font-semibold hover:text-brand-2">Car Sales</Link>
        <span aria-hidden="true">&gt;</span>
        <span className="text-[#334960]">{car.title}</span>
      </nav>

      {/* Main layout: gallery + panel */}
      <section className="w-full px-[clamp(16px,2vw,24px)] grid items-start grid-cols-[minmax(0,790px)_minmax(340px,385px)] justify-center gap-[1.55rem] max-[1080px]:grid-cols-1 max-[1080px]:justify-stretch">
        <CarGallery mainImage={car.images[0] ?? '/img1.jpg'} thumbnailImages={thumbnailImages} title={car.title} />

        <aside className="grid gap-7 rounded-[8px] bg-white shadow-detail min-h-[590px] p-8 max-[1080px]:p-[1.65rem] max-[1080px]:min-h-auto">
          {/* Heading */}
          <div className="grid gap-3 pb-5 border-b border-[rgba(10,58,104,0.07)]">
            <h1 className="m-0 text-[#063e66] text-[clamp(1.95rem,2.5vw,2.55rem)] leading-[1.05] tracking-[-0.04em] font-[650]">{car.title} Altis</h1>
            <p className="m-0 text-[#283d55] text-base font-normal">{engine} | {car.year} Model</p>
            <div className="flex flex-wrap gap-[0.65rem] mt-[0.3rem]">
              <span className="rounded-full bg-[#e7f1ff] text-[#063e66] px-3 py-[0.4rem] text-[0.66rem] font-extrabold tracking-[0.08em] uppercase">Verified</span>
              <span className="rounded-full bg-[#f1f2f4] text-[#687282] px-3 py-[0.4rem] text-[0.66rem] font-extrabold tracking-[0.08em] uppercase">New Arrival</span>
            </div>
          </div>

          {/* Price */}
          <div className="grid gap-[0.32rem]">
            <span className="text-[#344b63] text-[0.68rem] font-bold tracking-[0.12em] uppercase">Current Price</span>
            <strong className="text-[#063e66] text-[clamp(2rem,2.8vw,2.55rem)] leading-none font-bold">{car.price}</strong>
            <p className="m-0 text-[#263c54] text-[0.95rem]">Inclusive of all local taxes</p>
          </div>

          {/* Specs grid */}
          <div className="grid grid-cols-2 gap-[1.45rem_2rem] max-[720px]:grid-cols-1">
            {[
              { label: 'Mileage', value: car.mileage },
              { label: 'Engine', value: engine },
              { label: 'Fuel Type', value: car.fuelType },
              { label: 'Transmission', value: car.transmission },
            ].map(({ label, value }) => (
              <div key={label} className="grid gap-[0.28rem]">
                <span className="text-[#344b63] text-[0.68rem] font-bold tracking-[0.12em] uppercase">{label}</span>
                <strong className="text-[#001f3f] text-base font-[650] block mt-[0.25rem]">{value}</strong>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="grid gap-[0.85rem]">
            <a
              className="inline-flex min-h-[58px] justify-center items-center rounded-[4px] bg-[#25d366] text-white font-bold transition hover:-translate-y-px hover:bg-[#1fc45d] hover:shadow-[0_14px_28px_rgba(8,20,40,0.12)] no-underline"
              href={formatPhoneForWhatsApp(brand.whatsapp)}
              target="_blank"
              rel="noreferrer"
            >
              Contact via WhatsApp
            </a>
            <Link
              className="inline-flex min-h-[58px] justify-center items-center rounded-[4px] bg-[#063e66] text-white font-bold transition hover:-translate-y-px hover:bg-[#005f86] hover:shadow-[0_14px_28px_rgba(8,20,40,0.12)] no-underline"
              href="/contact"
            >
              Book a Test Drive
            </Link>
          </div>
        </aside>
      </section>

      {/* Info grid: description + features */}
      <section className="w-full px-[clamp(16px,2vw,24px)] grid items-start gap-[1.55rem] mt-[1.4rem] mb-16 grid-cols-[minmax(0,790px)_minmax(340px,385px)] justify-center max-[1080px]:grid-cols-1 max-[1080px]:justify-stretch">
        <div className="w-full border border-[rgba(10,58,104,0.06)] rounded-[8px] bg-white shadow-[0_16px_38px_rgba(8,20,40,0.055)] overflow-hidden col-start-1">
          {/* Description */}
          <div className="px-[1.9rem] py-[1.75rem] border-b border-[rgba(10,58,104,0.07)] max-[720px]:px-[1.35rem]">
            <h3 className="m-0 mb-[1.05rem] text-[#0d2745] text-base font-bold">Description</h3>
            <p className="max-w-[680px] m-0 text-[#405169] text-[0.95rem] leading-[1.8]">{car.description}</p>
          </div>

          {/* Features */}
          <div className="px-[1.9rem] py-[1.75rem] max-[720px]:px-[1.35rem]">
            <h3 className="m-0 mb-[1.05rem] text-[#0d2745] text-base font-bold">Features</h3>
            <div className="grid grid-cols-3 gap-[1.25rem_1.6rem] max-[720px]:grid-cols-1">
              {['ABS Brakes', 'Air Conditioning', 'Alloy Rims', 'Airbags', 'Power Steering', 'Power Windows', 'Central Locking', 'Touch Screen'].map((feature) => (
                <div key={feature} className="detail-feature-item flex items-center gap-[0.7rem] text-[#243852] text-[0.92rem] font-semibold">
                  <span className="relative w-6 h-6 flex-none rounded-full bg-[#eef4ff]" aria-hidden="true" />
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
