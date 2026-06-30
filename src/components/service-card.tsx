import Link from 'next/link';

import type { Service } from '@/types/site';

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="bg-surface border border-[rgba(13,27,42,0.1)] rounded-[28px] shadow-card overflow-hidden p-5">
      <div className="inline-flex items-center gap-2 text-brand-2 text-[0.78rem] font-extrabold uppercase tracking-[0.16em]">
        Detailing
      </div>
      <h3 className="m-0 text-[1.05rem] leading-[1.25] font-semibold mt-1">{service.title}</h3>
      <p className="text-muted text-[0.88rem] mt-1.5">{service.description}</p>
      <ul className="grid gap-[0.85rem] p-0 m-0 list-none mt-[0.9rem]">
        {service.highlights.map((item) => (
          <li key={item} className="flex gap-3 items-start text-muted">
            <span className="w-2.5 h-2.5 mt-1.5 rounded-full bg-gradient-to-br from-brand to-brand-2 flex-none" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex gap-[0.6rem] flex-wrap mt-4">
        <Link
          className="inline-flex items-center justify-center gap-2 rounded-[12px] px-5 py-3 bg-gradient-to-br from-brand to-brand-2 text-white font-bold text-[0.92rem] shadow-[0_14px_28px_rgba(10,58,104,0.18)] transition hover:-translate-y-px no-underline"
          href="/car-detailing/book"
        >
          Book Service
        </Link>
      </div>
    </article>
  );
}
