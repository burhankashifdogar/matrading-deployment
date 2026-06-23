import Link from 'next/link';

import type { Service } from '@/types/site';

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="panel service-card panel-pad">
      <div className="eyebrow">Detailing</div>
      <h3 className="card-title">{service.title}</h3>
      <p className="card-subtitle">{service.description}</p>
      <ul className="list" style={{ marginTop: '0.9rem' }}>
        {service.highlights.map((item) => (
          <li key={item} className="list-item">
            <span className="list-dot" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="action-row">
        <Link className="button primary" href="/car-detailing/book">
          Book Service
        </Link>
      </div>
    </article>
  );
}
