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
  {
    title: 'Exterior Detailing',
    description: 'Complete exterior cleaning and polishing.',
    image: '/img2.jpg',
    icon: 'shine'
  },
  {
    title: 'Interior Detailing',
    description: 'Deep cleaning of interior surfaces.',
    image: '/interior.jpg',
    icon: 'seat'
  },
  {
    title: 'Paint Protection',
    description: "Protect your car's paint from damage.",
    image: '/painting.jpg',
    icon: 'shield'
  },
  {
    title: 'Ceramic Coating',
    description: 'Long-lasting protection with ceramic finish.',
    image: '/ceramic coating.jpg',
    icon: 'coating'
  },
  {
    title: 'Deep Cleaning',
    description: 'Thorough cleaning of every corner.',
    image: '/deep.jpg',
    icon: 'clean'
  },
  {
    title: 'Engine Bay Cleaning',
    description: 'Clean and degrease engine compartment.',
    image: '/engine cleaning.jpg',
    icon: 'engine'
  }
];

const SERVICES_PER_PAGE = 6;

function DetailingIcon({ name }: { name: DetailingIconName }) {
  const commonProps = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.9,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const
  };

  switch (name) {
    case 'seat':
      return (
        <svg {...commonProps}>
          <path d="M7 4h6.5c1.4 0 2.5 1.1 2.5 2.5v5.2" />
          <path d="M7 4v8.5c0 1.4 1.1 2.5 2.5 2.5H18" />
          <path d="M5 18h14" />
          <path d="M7 15l-1.5 3" />
          <path d="M17 15l1.5 3" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...commonProps}>
          <path d="M12 3l7 3v5c0 4.5-2.8 8-7 10-4.2-2-7-5.5-7-10V6l7-3z" />
          <path d="M9 12l2 2 4-5" />
        </svg>
      );
    case 'coating':
      return (
        <svg {...commonProps}>
          <path d="M12 3s5 5.4 5 10a5 5 0 0 1-10 0c0-4.6 5-10 5-10z" />
          <path d="M9.5 14.5c.7 1.2 1.6 1.8 2.8 1.8" />
          <path d="M17.5 5.5l2-2" />
          <path d="M20 8h2" />
        </svg>
      );
    case 'clean':
      return (
        <svg {...commonProps}>
          <path d="M5 14l5-5 5 5" />
          <path d="M8 11v7" />
          <path d="M12 11v7" />
          <path d="M16 11v7" />
          <path d="M6 18h12" />
          <path d="M17 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
        </svg>
      );
    case 'engine':
      return (
        <svg {...commonProps}>
          <path d="M7 8h8l2 2v6H7V8z" />
          <path d="M4 12h3" />
          <path d="M17 12h3v3" />
          <path d="M9 8V5h5" />
          <path d="M10 5V3" />
          <path d="M13 5V3" />
          <path d="M9.5 12h5" />
        </svg>
      );
    case 'shine':
    default:
      return (
        <svg {...commonProps}>
          <path d="M6 16h9.5c1.2 0 2.1-.9 2.1-2.1V11l-2-4.2A2.4 2.4 0 0 0 13.4 5H8.8a2.4 2.4 0 0 0-2.2 1.5L5 11v5z" />
          <path d="M7 16v2" />
          <path d="M16 16v2" />
          <path d="M7 11h9" />
          <path d="M8 13h.1" />
          <path d="M15 13h.1" />
          <path d="M19 4l.6 1.4L21 6l-1.4.6L19 8l-.6-1.4L17 6l1.4-.6L19 4z" />
        </svg>
      );
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
    <div className="detailing-page">
      <section className="detailing-hero-band">
        <div className="content-wrap detailing-hero-inner">
          <h1>Our Detailing Services</h1>
          <p>Professional care for your car to make it shine again.</p>
        </div>
      </section>

      <section className="content-wrap detailing-services-wrap">
        <div className="detailing-services-grid">
          {visibleServices.map((service) => (
            <article className="detailing-service-card" key={service.title}>
              <div className="detailing-service-image">
                <Image src={service.image} alt={service.title} width={620} height={360} />
              </div>
              <div className="detailing-service-body">
                <span className={`detailing-service-icon icon-${service.icon}`} aria-hidden="true">
                  <DetailingIcon name={service.icon} />
                </span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="pagination-wrap detailing-pagination" aria-label="Detailing service pagination">
          <button className="pagination-arrow" type="button" onClick={() => setCurrentPage((page) => Math.max(1, page - 1))} disabled={currentPage === 1}>
            Previous
          </button>

          <div className="pagination-numbers">
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNum = index + 1;

              return (
                <button
                  key={pageNum}
                  className={`page-btn ${pageNum === currentPage ? 'active' : ''}`}
                  type="button"
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            className="pagination-arrow"
            type="button"
            onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

        <div className="detailing-cta-strip">
          <div>
            <strong>Ready to Make Your Car Shine?</strong>
            <p>Book an appointment today and experience the difference.</p>
          </div>
          <Link href="/car-detailing/book">Get a Quote</Link>
        </div>
      </section>
    </div>
  );
}
