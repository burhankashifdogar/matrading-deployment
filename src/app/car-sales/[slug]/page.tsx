import Link from 'next/link';
import { notFound } from 'next/navigation';

import { CarGallery } from '@/components/car-gallery';
import { CarCard } from '@/components/car-card';
import { SectionHeading } from '@/components/section-heading';
import { availableStock, brand, featuredCars } from '@/data/site';
import { formatPhoneForWhatsApp } from '@/lib/utils';

type CarDetailPageProps = {
  params: Promise<{ slug: string }>;
};

type DetailItem = {
  slug: string;
  title: string;
  images: string[];
  price: string;
  year: number;
  transmission: string;
  fuelType: string;
  mileage: string;
  description: string;
  specs: Array<{ label: string; value: string }>;
  relatedTitle: string;
  type: 'featured' | 'stock';
};

const thumbnailImages = ['/int-1.jpg', '/int-2.jpg', '/int-3.jpg', '/int-4.jpg', '/int-5.jpg', '/int-6.jpg'];
const stockImages = ['/img1.jpg', '/car1.jpg', '/car2.jpg', '/car3.jpg'];
const formatNumber = (value: number) => new Intl.NumberFormat('en-PK').format(value);

function getDetailItem(slug: string): DetailItem | null {
  const featured = featuredCars.find((item) => item.slug === slug);
  if (featured) {
    const engine = featured.specs.find((spec) => spec.label === 'Engine')?.value ?? featured.bodyType;

    return {
      slug: featured.slug,
      title: featured.title,
      images: featured.images,
      price: featured.price,
      year: featured.year,
      transmission: featured.transmission,
      fuelType: featured.fuelType,
      mileage: featured.mileage,
      description: featured.description,
      specs: [
        { label: 'Mileage', value: featured.mileage },
        { label: 'Engine', value: engine },
        { label: 'Fuel Type', value: featured.fuelType },
        { label: 'Transmission', value: featured.transmission }
      ],
      relatedTitle: featured.bodyType,
      type: 'featured'
    };
  }

  const stock = availableStock.find((item) => item.slug === slug);
  if (stock) {
    return {
      slug: stock.slug,
      title: stock.make,
      images: stockImages,
      price: `PKR ${formatNumber(stock.demandPkr)} | GBP ${formatNumber(stock.demandPound)}`,
      year: stock.model,
      transmission: 'N/A',
      fuelType: 'N/A',
      mileage: `${formatNumber(stock.mileageKm)} km`,
      description: 'This vehicle is listed from the current Excel stock sheet and is shown with the exact inventory details provided by the client.',
      specs: [
        { label: 'Make', value: stock.make },
        { label: 'Model', value: String(stock.model) },
        { label: 'Variant', value: stock.variant },
        { label: 'Colour', value: stock.colour },
        { label: 'Registration City', value: stock.registrationCity },
        { label: 'Mileage', value: `${formatNumber(stock.mileageKm)} km` },
        { label: 'Demand PKR', value: `PKR ${formatNumber(stock.demandPkr)}` },
        { label: 'Demand GBP', value: `GBP ${formatNumber(stock.demandPound)}` }
      ],
      relatedTitle: stock.make,
      type: 'stock'
    };
  }

  return null;
}

export function generateStaticParams() {
  return [...featuredCars.map((car) => ({ slug: car.slug })), ...availableStock.map((item) => ({ slug: item.slug }))];
}

export default async function CarDetailPage({ params }: CarDetailPageProps) {
  const { slug } = await params;
  const detail = getDetailItem(slug);

  if (!detail) {
    notFound();
  }

  const relatedFeaturedCars = detail.type === 'featured'
    ? [...featuredCars]
        .filter((item) => item.slug !== detail.slug)
        .sort((a, b) => {
          const aScore = Number(a.bodyType === detail.relatedTitle) * 3 + Number(a.fuelType === detail.fuelType) * 2 + Number(a.transmission === detail.transmission);
          const bScore = Number(b.bodyType === detail.relatedTitle) * 3 + Number(b.fuelType === detail.fuelType) * 2 + Number(b.transmission === detail.transmission);
          return bScore - aScore;
        })
    : featuredCars;

  const relatedCarsForDisplay = relatedFeaturedCars.slice(0, 4);

  return (
    <div className="grid gap-4 bg-[#f5f8fe] pt-[1.6rem]">
      <nav
        className="flex items-center gap-[0.65rem] w-[min(100%,calc(790px+1.55rem+385px))] mx-auto px-[clamp(16px,2vw,24px)] mb-[0.15rem] text-[#68788d] text-[0.9rem] font-medium max-[1080px]:w-full"
        aria-label="Breadcrumb"
      >
        <Link href="/" className="text-[#063e66] font-semibold hover:text-brand-2">Home</Link>
        <span aria-hidden="true">&gt;</span>
        <Link href="/car-sales" className="text-[#063e66] font-semibold hover:text-brand-2">Car Sales</Link>
        <span aria-hidden="true">&gt;</span>
        <span className="text-[#334960]">{detail.title}</span>
      </nav>

      <section className="w-full px-[clamp(16px,2vw,24px)] grid items-start grid-cols-[minmax(0,790px)_minmax(340px,385px)] justify-center gap-[1.55rem] max-[1080px]:grid-cols-1 max-[1080px]:justify-stretch">
        <CarGallery mainImage={detail.images[0] ?? '/img1.jpg'} thumbnailImages={thumbnailImages} title={detail.title} />

        <aside className="grid gap-7 rounded-[8px] bg-white shadow-detail min-h-[590px] p-8 max-[1080px]:p-[1.65rem] max-[1080px]:min-h-auto">
          <div className="grid gap-3 pb-5 border-b border-[rgba(10,58,104,0.07)]">
            <h1 className="m-0 text-[#063e66] text-[clamp(1.95rem,2.5vw,2.55rem)] leading-[1.05] tracking-[-0.04em] font-[650]">{detail.title}</h1>
            <p className="m-0 text-[#283d55] text-base font-normal">{detail.year} Model</p>
            <div className="flex flex-wrap gap-[0.65rem] mt-[0.3rem]">
              <span className="rounded-full bg-[#e7f1ff] text-[#063e66] px-3 py-[0.4rem] text-[0.66rem] font-extrabold tracking-[0.08em] uppercase">Verified</span>
              <span className="rounded-full bg-[#f1f2f4] text-[#687282] px-3 py-[0.4rem] text-[0.66rem] font-extrabold tracking-[0.08em] uppercase">New Arrival</span>
            </div>
          </div>

          <div className="grid gap-[0.32rem]">
            <span className="text-[#344b63] text-[0.68rem] font-bold tracking-[0.12em] uppercase">Current Price</span>
            <strong className="text-[#063e66] text-[clamp(2rem,2.8vw,2.55rem)] leading-none font-bold">{detail.price}</strong>
            <p className="m-0 text-[#263c54] text-[0.95rem]">Inclusive of all local taxes</p>
          </div>

          <div className="grid grid-cols-2 gap-[1.45rem_2rem] max-[720px]:grid-cols-1">
            {detail.specs.map(({ label, value }) => (
              <div key={label} className="grid gap-[0.28rem]">
                <span className="text-[#344b63] text-[0.68rem] font-bold tracking-[0.12em] uppercase">{label}</span>
                <strong className="text-[#001f3f] text-base font-[650] block mt-[0.25rem]">{value}</strong>
              </div>
            ))}
          </div>

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

      <section className="w-full px-[clamp(16px,2vw,24px)] grid items-start gap-[1.55rem] mt-[1.4rem] mb-16 grid-cols-[minmax(0,790px)_minmax(340px,385px)] justify-center max-[1080px]:grid-cols-1 max-[1080px]:justify-stretch">
        <div className="w-full border border-[rgba(10,58,104,0.06)] rounded-[8px] bg-white shadow-[0_16px_38px_rgba(8,20,40,0.055)] overflow-hidden col-start-1">
          <div className="px-[1.9rem] py-[1.75rem] border-b border-[rgba(10,58,104,0.07)] max-[720px]:px-[1.35rem]">
            <h3 className="m-0 mb-[1.05rem] text-[#0d2745] text-base font-bold">Description</h3>
            <p className="max-w-[680px] m-0 text-[#405169] text-[0.95rem] leading-[1.8]">{detail.description}</p>
          </div>

          <div className="px-[1.9rem] py-[1.75rem] max-[720px]:px-[1.35rem]">
            <h3 className="m-0 mb-[1.05rem] text-[#0d2745] text-base font-bold">Details</h3>
            <div className="grid grid-cols-3 gap-[1.25rem_1.6rem] max-[720px]:grid-cols-1">
              {detail.specs.map(({ label, value }) => (
                <div key={`${label}-${value}`} className="detail-feature-item flex items-center gap-[0.7rem] text-[#243852] text-[0.92rem] font-semibold">
                  <span className="relative w-6 h-6 flex-none rounded-full bg-[#eef4ff]" aria-hidden="true" />
                  <span>
                    {label}: {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {detail.type === 'featured' ? (
        <section className="bg-[#eef4fb] py-16 mt-4">
          <div className="w-full px-[clamp(16px,2vw,24px)]">
            <SectionHeading eyebrow="Related Listings" title="More Cars You May Like" />
            <div className="grid grid-cols-4 gap-4 mt-8 max-[1080px]:grid-cols-2 max-[720px]:grid-cols-1">
              {relatedCarsForDisplay.map((relatedCar) => (
                <CarCard key={`${relatedCar.slug}-${relatedCar.slug === detail.slug ? 'current' : 'related'}`} car={relatedCar} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
