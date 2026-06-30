"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';

type DetailingIconName = 'shine' | 'seat' | 'shield' | 'coating' | 'clean' | 'engine';

type DetailingService = {
  title: string;
  description: string;
  image: string;
  icon: DetailingIconName;
};

const detailingServices: DetailingService[] = [
  { title: 'Exterior Detailing', description: 'Complete exterior cleaning and polishing.', image: '/img2.jpg', icon: 'shine' },
  { title: 'Interior Detailing', description: 'Deep cleaning of interior surfaces.', image: '/interior.jpg', icon: 'seat' },
  { title: 'Paint Protection', description: "Protect your car's paint from damage.", image: '/painting.jpg', icon: 'shield' },
  { title: 'Ceramic Coating', description: 'Long-lasting protection with ceramic finish.', image: '/ceramic coating.jpg', icon: 'coating' },
  { title: 'Deep Cleaning', description: 'Thorough cleaning of every corner.', image: '/deep.jpg', icon: 'clean' },
  { title: 'Engine Bay Cleaning', description: 'Clean and degrease engine compartment.', image: '/engine cleaning.jpg', icon: 'engine' }
];

const SERVICES_PER_PAGE = 6;

function DetailingIcon({ name }: { name: DetailingIconName }) {
  const commonProps = {
    width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 1.9,
    strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const
  };
  switch (name) {
    case 'seat':
      return (<svg {...commonProps}><path d="M7 4h6.5c1.4 0 2.5 1.1 2.5 2.5v5.2" /><path d="M7 4v8.5c0 1.4 1.1 2.5 2.5 2.5H18" /><path d="M5 18h14" /><path d="M7 15l-1.5 3" /><path d="M17 15l1.5 3" /></svg>);
    case 'shield':
      return (<svg {...commonProps}><path d="M12 3l7 3v5c0 4.5-2.8 8-7 10-4.2-2-7-5.5-7-10V6l7-3z" /><path d="M9 12l2 2 4-5" /></svg>);
    case 'coating':
      return (<svg {...commonProps}><path d="M12 3s5 5.4 5 10a5 5 0 0 1-10 0c0-4.6 5-10 5-10z" /><path d="M9.5 14.5c.7 1.2 1.6 1.8 2.8 1.8" /><path d="M17.5 5.5l2-2" /><path d="M20 8h2" /></svg>);
    case 'clean':
      return (<svg {...commonProps}><path d="M5 14l5-5 5 5" /><path d="M8 11v7" /><path d="M12 11v7" /><path d="M16 11v7" /><path d="M6 18h12" /><path d="M17 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" /></svg>);
    case 'engine':
      return (<svg {...commonProps}><path d="M7 8h8l2 2v6H7V8z" /><path d="M4 12h3" /><path d="M17 12h3v3" /><path d="M9 8V5h5" /><path d="M10 5V3" /><path d="M13 5V3" /><path d="M9.5 12h5" /></svg>);
    case 'shine':
    default:
      return (<svg {...commonProps}><path d="M6 16h9.5c1.2 0 2.1-.9 2.1-2.1V11l-2-4.2A2.4 2.4 0 0 0 13.4 5H8.8a2.4 2.4 0 0 0-2.2 1.5L5 11v5z" /><path d="M7 16v2" /><path d="M16 16v2" /><path d="M7 11h9" /><path d="M8 13h.1" /><path d="M15 13h.1" /><path d="M19 4l.6 1.4L21 6l-1.4.6L19 8l-.6-1.4L17 6l1.4-.6L19 4z" /></svg>);
  }
}

export default function CarDetailingPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(detailingServices.length / SERVICES_PER_PAGE));
  const visibleServices = useMemo(() => {
    const startIndex = (currentPage - 1) * SERVICES_PER_PAGE;
    return detailingServices.slice(startIndex, startIndex + SERVICES_PER_PAGE);
  }, [currentPage]);

  return (
    <div className="bg-white">
      {/* Hero band */}
      <section className="detailing-hero-band text-white py-[2.3rem] text-center">
        <div className="w-full px-[clamp(16px,2vw,24px)] relative z-[1] grid gap-[0.55rem] justify-items-center">
          <h1 className="m-0 text-white text-[clamp(1.65rem,2.5vw,2.35rem)] font-bold tracking-[-0.02em]">Our Detailing Services</h1>
          <p className="m-0 text-[rgba(255,255,255,0.8)] text-[0.96rem]">Professional care for your car to make it shine again.</p>
        </div>
      </section>

      {/* Services */}
      <section className="w-full px-[clamp(16px,2vw,24px)] pt-[3.8rem] pb-[3.7rem]">
        <div className="grid grid-cols-3 gap-8 mx-auto max-w-[1180px] max-[980px]:grid-cols-2 max-[640px]:grid-cols-1">
          {visibleServices.map((service) => (
           <article
  key={service.title}
  className="group overflow-hidden border border-[rgba(10,58,104,0.08)] rounded-[8px] bg-white shadow-[0_15px_34px_rgba(8,20,40,0.08)] transition-[transform,box-shadow] duration-[220ms] hover:-translate-y-1 hover:shadow-[0_22px_44px_rgba(8,20,40,0.12)]"
>
              <div className="overflow-hidden bg-[#d7e3ef] h-[235px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={620}
                  height={360}
                  className="w-full h-full object-cover object-center transition-[transform,filter] duration-[280ms] hover:scale-[1.04] hover:saturate-[1.03] hover:contrast-[1.03]"
                />
              </div>
              <div className="grid gap-[0.7rem] px-[1.45rem] py-[1.35rem] pb-[1.55rem] min-h-[190px]">
                <span
  className={`detailing-service-icon relative inline-grid place-items-center w-[38px] h-[38px] rounded-[12px] bg-[#eef6ff] text-[#063e66] shadow-[inset_0_0_0_1px_rgba(6,62,102,0.08)] transition-colors duration-200 group-hover:bg-[#063e66] group-hover:text-white icon-${service.icon}`}
  aria-hidden="true"
>
  <DetailingIcon name={service.icon} />
</span>
                <h2 className="m-0 text-[#0d2745] text-[1.05rem] font-[750]">{service.title}</h2>
                <p className="max-w-[21ch] m-0 text-[#475a70] text-[0.92rem] leading-[1.55]">{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-[0.72rem] w-[min(100%,950px)] max-w-[950px] mx-auto mt-12 py-[1.65rem_0_1.15rem]" aria-label="Detailing service pagination">
          <button
            className="flex-none w-auto min-w-[78px] h-11 px-[1.15rem] border-0 rounded-[2px] bg-[#f0f6fd] text-[#063e66] text-[0.95rem] font-semibold leading-none cursor-pointer hover:bg-[#063e66] hover:text-white disabled:opacity-55"
            type="button"
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="contents">
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNum = index + 1;
              return (
                <button
                  key={pageNum}
                  className={`flex-none w-11 min-w-[44px] h-11 border-0 rounded-[2px] text-[0.95rem] font-semibold leading-none cursor-pointer ${pageNum === currentPage ? 'bg-[#063e66] text-white' : 'bg-[#f0f6fd] text-[#063e66] hover:bg-[#063e66] hover:text-white'}`}
                  type="button"
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
          <button
            className="flex-none w-auto min-w-[78px] h-11 px-[1.15rem] border-0 rounded-[2px] bg-[#f0f6fd] text-[#063e66] text-[0.95rem] font-semibold leading-none cursor-pointer hover:bg-[#063e66] hover:text-white disabled:opacity-55"
            type="button"
            onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

        {/* CTA strip */}
        <div className="flex items-center justify-between gap-[1.4rem] max-w-[1120px] mx-auto mt-12 rounded-[8px] bg-[#062f55] text-white px-[1.65rem] py-[1.45rem] max-[640px]:flex-col max-[640px]:items-start">
          <div>
            <strong className="block text-[1.1rem]">Ready to Make Your Car Shine?</strong>
            <p className="m-0 mt-1 text-[rgba(255,255,255,0.78)] text-[0.92rem]">Book an appointment today and experience the difference.</p>
          </div>
          <Link
            href="/car-detailing/book"
            className="inline-flex items-center justify-center min-w-[132px] min-h-[42px] rounded-[4px] bg-white text-[#063e66] font-bold hover:bg-[#eaf6fb] no-underline max-[640px]:w-full"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
