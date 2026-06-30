import Image from 'next/image';
import Link from 'next/link';

import type { Car } from '@/types/site';

type CarCardProps = {
  car: Car;
};

export function CarCard({ car }: CarCardProps) {
  const engine = car.specs.find((spec) => spec.label === 'Engine')?.value;
  const color = car.specs.find((spec) => spec.label === 'Color')?.value;

  return (
    <article className="bg-white rounded-lg shadow-[0_18px_36px_rgba(8,20,40,0.08)] border border-[rgba(10,27,50,0.08)] overflow-hidden max-w-full transition-transform duration-[280ms] hover:-translate-y-1 hover:shadow-card-hover">
      <div className="overflow-hidden rounded-t-lg">
        <Image
          className="w-full h-[280px] object-cover bg-[#d7e3ef] transition-[transform,filter] duration-[350ms] hover:scale-[1.03] hover:-translate-y-0.5 hover:saturate-[1.02] hover:contrast-[1.03]"
          src={car.images[0]}
          alt={car.title}
          width={800}
          height={500}
        />
      </div>
      <div className="p-[0.95rem]">
        <h3 className="m-0 text-[1.05rem] leading-[1.25] font-semibold">{car.title}</h3>
        <div className="flex flex-wrap gap-[0.6rem] mt-[0.7rem] mb-[0.85rem] text-muted text-[0.84rem]">
          <span>{car.year}</span>
          <span>{car.transmission}</span>
          <span>{car.fuelType}</span>
        </div>
        <div className="font-extrabold text-brand my-[0.25rem] mb-3">{car.price}</div>
        <div className="flex gap-2 flex-wrap mt-1.5">
          <span className="text-[0.78rem] px-[0.65rem] py-[0.35rem] rounded-full bg-surface-2 text-brand-3">{car.mileage}</span>
          {engine && <span className="text-[0.78rem] px-[0.65rem] py-[0.35rem] rounded-full bg-surface-2 text-brand-3">{engine}</span>}
          {color && <span className="text-[0.78rem] px-[0.65rem] py-[0.35rem] rounded-full bg-surface-2 text-brand-3">{color}</span>}
        </div>
        <div className="flex gap-[0.6rem] flex-wrap justify-start mt-4">
          <Link
            className="inline-flex items-center justify-center w-full rounded-[12px] px-4 py-3 bg-white text-brand border border-[rgba(10,58,104,0.22)] font-bold text-[0.92rem] transition-[background-color,color,border-color,transform,box-shadow] duration-200 hover:bg-brand hover:text-white hover:border-brand hover:shadow-[0_14px_26px_rgba(10,58,104,0.18)] no-underline"
            href={`/car-sales/${car.slug}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
