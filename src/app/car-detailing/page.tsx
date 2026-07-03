"use client";

import Link from 'next/link';

type PriceRow = {
  category: string;
  pkr: string;
  gbp: string;
  remarks: string;
};

type DetailingService = {
  title: string;
  badge: string;
  note: string;
  rows: PriceRow[];
};

const detailingServices: DetailingService[] = [
  {
    title: 'Detailings (Cleaning)',
    badge: 'Cleaning',
    note: 'Category-wise pricing for professional cleaning. Free service applies to vehicles purchased by MA Trading.',
    rows: [
      { category: 'Sedans', pkr: '6000-8000', gbp: '16-21', remarks: 'Free service for vehicles purchased by MA Trading' },
      { category: 'Hatchbacks', pkr: '4000-6000', gbp: '10-16', remarks: 'Free service for vehicles purchased by MA Trading' },
      { category: 'Cross Overs', pkr: '8000-12000', gbp: '21-31', remarks: 'Free service for vehicles purchased by MA Trading' },
      { category: 'SUVs', pkr: '14000-18000', gbp: '37-47', remarks: 'Free service for vehicles purchased by MA Trading' }
    ]
  },
  {
    title: 'Documents Inspection',
    badge: 'Inspection',
    note: 'Inspection pricing follows the same category-based structure with the same free-service note for MA Trading purchases.',
    rows: [
      { category: 'Sedans', pkr: '8000-10000', gbp: '21-27', remarks: 'Free service for vehicles purchased by MA Trading' },
      { category: 'Hatchbacks', pkr: '4000-6000', gbp: '10-16', remarks: 'Free service for vehicles purchased by MA Trading' },
      { category: 'Cross Overs', pkr: '10000-15000', gbp: '27-40', remarks: 'Free service for vehicles purchased by MA Trading' },
      { category: 'SUVs', pkr: '15000-20000', gbp: '40-53', remarks: 'Free service for vehicles purchased by MA Trading' }
    ]
  }
];

export default function CarDetailingPage() {
  return (
    <div className="bg-white">
      <section className="detailing-hero-band text-white py-[2.8rem] text-center">
        <div className="w-full px-[clamp(16px,2vw,24px)] relative z-[1] grid gap-[0.7rem] justify-items-center">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm">
            Detailing Price List
          </span>
          <h1 className="m-0 text-white text-[clamp(1.7rem,2.5vw,2.45rem)] font-bold tracking-[-0.03em]">Our Detailing Services</h1>
          <p className="m-0 max-w-[62ch] text-[rgba(255,255,255,0.82)] text-[0.98rem] leading-[1.6]">
            Category-based pricing for cleaning and documents inspection, presented in a clean and easy-to-scan layout.
          </p>
        </div>
      </section>

      <section className="w-full px-[clamp(16px,2vw,24px)] pt-[3.6rem] pb-[3.8rem]">
        <div className="grid grid-cols-2 gap-8 mx-auto max-w-[1180px] max-[980px]:grid-cols-1">
          {detailingServices.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-[18px] border border-[rgba(10,58,104,0.09)] bg-white shadow-[0_16px_38px_rgba(8,20,40,0.09)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(8,20,40,0.16)]"
            >
              <div className="relative overflow-hidden px-[1.5rem] py-[1.45rem] border-b border-[rgba(10,58,104,0.08)] bg-[linear-gradient(135deg,#f8fbfe_0%,#eef6fd_100%)]">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,transparent,rgba(6,62,102,0.35),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-4 max-[560px]:flex-col max-[560px]:items-start">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-[#063e66] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white transition-transform duration-300 group-hover:scale-[1.03]">
                      {service.badge}
                    </span>
                    <h2 className="m-0 mt-3 text-[#0d2745] text-[1.18rem] font-[780] tracking-[-0.02em] transition-colors duration-300 group-hover:text-[#063e66]">{service.title}</h2>
                  </div>
                  <div className="rounded-full bg-white px-4 py-2 text-[0.8rem] font-semibold text-[#063e66] shadow-[0_8px_20px_rgba(6,62,102,0.08)] transition-transform duration-300 group-hover:-translate-y-0.5">
                    4 Categories
                  </div>
                </div>
                <p className="m-0 mt-3 max-w-[70ch] text-[#475a70] text-[0.93rem] leading-[1.6]">{service.note}</p>
              </div>

              <div className="px-[1rem] py-[1rem] max-[640px]:px-[0.75rem]">
                <table className="w-full table-fixed border-collapse">
                  <thead>
                    <tr className="bg-[#063e66] text-white">
                      <th className="w-[18%] text-left px-[0.95rem] py-[0.92rem] text-[0.84rem] font-semibold tracking-[0.04em] uppercase">Category</th>
                      <th className="w-[22%] text-left px-[0.95rem] py-[0.92rem] text-[0.84rem] font-semibold tracking-[0.04em] uppercase">Price PKR</th>
                      <th className="w-[16%] text-left px-[0.95rem] py-[0.92rem] text-[0.84rem] font-semibold tracking-[0.04em] uppercase">Price Â£</th>
                      <th className="w-[44%] text-left px-[0.95rem] py-[0.92rem] text-[0.84rem] font-semibold tracking-[0.04em] uppercase">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.rows.map((row, index) => (
                      <tr
                        key={`${service.title}-${row.category}`}
                        className={`transition-colors duration-200 hover:bg-[#eaf4fb] ${index % 2 === 0 ? 'bg-white' : 'bg-[#f8fbfe]'}`}
                      >
                        <td className="px-[0.95rem] py-[0.95rem] border-t border-[rgba(10,58,104,0.08)] font-semibold text-[#0d2745] align-top transition-colors duration-200 group-hover:text-[#063e66]">
                          {row.category}
                        </td>
                        <td className="px-[0.95rem] py-[0.95rem] border-t border-[rgba(10,58,104,0.08)] text-[#475a70] align-top">
                          {row.pkr}
                        </td>
                        <td className="px-[0.95rem] py-[0.95rem] border-t border-[rgba(10,58,104,0.08)] text-[#475a70] align-top">
                          {row.gbp}
                        </td>
                        <td className="px-[0.95rem] py-[0.95rem] border-t border-[rgba(10,58,104,0.08)] text-[#475a70] leading-[1.55] align-top break-words">
                          {row.remarks}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 mx-auto max-w-[1180px] rounded-[18px] border border-[rgba(10,58,104,0.08)] bg-[#fff8eb] px-[1.5rem] py-[1.15rem] shadow-[0_12px_28px_rgba(8,20,40,0.05)]">
          <p className="m-0 text-[0.94rem] leading-[1.7] text-[#5b4a2a] font-medium">
            Charges for other services including new parts and repairing of damaged vehicles may vary depending on market rates.
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-[1180px] grid gap-4 rounded-[18px] border border-[rgba(10,58,104,0.08)] bg-[#f7fbfe] px-[1.5rem] py-[1.4rem] shadow-[0_12px_28px_rgba(8,20,40,0.06)]">
          <div className="flex items-start justify-between gap-4 max-[640px]:flex-col">
            <div>
              <strong className="block text-[1rem] text-[#0d2745]">Need a quick booking?</strong>
              <p className="m-0 mt-1 text-[0.92rem] text-[#5d6b7d]">Use the booking page to select the package and confirm your service details.</p>
            </div>
            <Link
              href="/car-detailing/book"
              className="inline-flex items-center justify-center rounded-[999px] bg-[#063e66] px-5 py-[0.9rem] text-[0.92rem] font-bold text-white no-underline transition hover:-translate-y-px hover:bg-[#052f4f] max-[640px]:w-full"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

