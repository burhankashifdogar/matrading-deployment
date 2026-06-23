import Image from 'next/image';
import Link from 'next/link';

import type { Car } from '@/types/site';

type CarCardProps = {
  car: Car;
};

export function CarCard({ car }: CarCardProps) {
  return (
    <article className="car-card">
      <div className="card-image-wrap">
        <Image className="card-image" src={car.images[0]} alt={car.title} width={800} height={500} />
      </div>
      <div className="card-body">
        <div className="eyebrow card-eyebrow">Car Sales</div>
        <h3 className="card-title">{car.title}</h3>
        <div className="card-details">
          <span>{car.year}</span>
          <span>{car.transmission}</span>
          <span>{car.fuelType}</span>
        </div>
        <div className="price">{car.price}</div>
        <div className="meta-row">
          <span className="meta">{car.mileage}</span>
          <span className="meta">{car.bodyType}</span>
        </div>
        <div className="action-row">
          <Link className="button primary" href={`/car-sales/${car.slug}`}>
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
