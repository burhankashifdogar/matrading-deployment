"use client";

import { useMemo, useState } from 'react';
import Link from 'next/link';

import { CarCard } from '@/components/car-card';
import { featuredCars } from '@/data/site';

const CARS_PER_PAGE = 4;
const makeOptions = [
  { label: 'Toyota', count: 12 },
  { label: 'Honda', count: 8 },
  { label: 'Mercedes-Benz', count: 5 },
  { label: 'BMW', count: 4 },
  { label: 'Audi', count: 3 }
];
const fuelOptions = ['Petrol', 'Diesel'];
const transmissionOptions = ['Automatic', 'Manual'];

export default function CarSalesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMakes, setSelectedMakes] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState(1000000);
  const [maxPrice, setMaxPrice] = useState(50000000);
  const [selectedFuels, setSelectedFuels] = useState<string[]>([]);
  const [selectedTransmissions, setSelectedTransmissions] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getPriceValue = (price: string) => {
    const match = price.match(/\d+/g);
    if (match) return parseInt(match.join(''));
    return 0;
  };

  const filteredCars = useMemo(() => {
    return featuredCars.filter((car) => {
      const matchesSearch =
        car.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.slug.toLowerCase().includes(searchQuery.toLowerCase());

      const make = car.title.split(' ')[0];
      if (selectedMakes.length > 0 && !selectedMakes.includes(make)) return false;

      const priceVal = getPriceValue(car.price);
      if (priceVal < minPrice || priceVal > maxPrice) return false;

      if (selectedFuels.length > 0 && !selectedFuels.includes(car.fuelType)) return false;
      if (selectedTransmissions.length > 0 && !selectedTransmissions.includes(car.transmission)) return false;

      return matchesSearch;
    });
  }, [searchQuery, selectedMakes, minPrice, maxPrice, selectedFuels, selectedTransmissions]);

  const totalPages = Math.max(1, Math.ceil(filteredCars.length / CARS_PER_PAGE));
  const visiblePaginationPages = Math.max(totalPages, 4);
  const startIndex = (currentPage - 1) * CARS_PER_PAGE;
  const endIndex = startIndex + CARS_PER_PAGE;
  const paginatedCars = filteredCars.slice(startIndex, endIndex);

  const toggleMake = (make: string) => {
    setSelectedMakes((prev) => (prev.includes(make) ? prev.filter((m) => m !== make) : [...prev, make]));
    setCurrentPage(1);
  };

  const toggleFuel = (fuel: string) => {
    setSelectedFuels((prev) => (prev.includes(fuel) ? prev.filter((f) => f !== fuel) : [...prev, fuel]));
    setCurrentPage(1);
  };

  const toggleTransmission = (trans: string) => {
    setSelectedTransmissions((prev) => (prev.includes(trans) ? prev.filter((t) => t !== trans) : [...prev, trans]));
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedMakes([]);
    setMinPrice(1000000);
    setMaxPrice(50000000);
    setSelectedFuels([]);
    setSelectedTransmissions([]);
    setCurrentPage(1);
  };

  return (
    <div className="stack">
      <section className="car-sales-hero">
        <div className="content-wrap car-sales-hero-inner">
          <h1>Find Your Perfect Car</h1>
          <div className="car-sales-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">&gt;</span>
            <span>Car Sales</span>
          </div>
        </div>
      </section>

      <section className="content-wrap split-grid">
        <aside className="filters-sidebar car-filter-panel">
          <div className="filter-header-row">
            <h2>Filters</h2>
            <button className="filter-reset-link" onClick={resetFilters} type="button">
              Reset All
            </button>
          </div>

          <div className="filter-section search-section">
            <div className="filter-search-wrap">
              <input
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search make or model..."
              />
              <span className="filter-search-icon" aria-hidden="true" />
            </div>
          </div>

          <div className="filter-section">
            <h4 className="filter-section-title">Vehicle Make</h4>
            <div className="make-list">
              {makeOptions.map((make) => (
                <label key={make.label} className="make-item">
                  <input type="checkbox" checked={selectedMakes.includes(make.label)} onChange={() => toggleMake(make.label)} />
                  <span className="custom-checkbox" aria-hidden="true" />
                  <span>
                    {make.label} <span className="count">({make.count})</span>
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h4 className="filter-section-title">Price Range (PKR)</h4>
            <input
              type="range"
              min={1000000}
              max={50000000}
              step={1000000}
              value={maxPrice}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                setMaxPrice(value);
                setCurrentPage(1);
              }}
              className="price-slider"
            />
            <div className="price-range-display">
              <span>1M</span>
              <span>50M</span>
            </div>
          </div>

          <div className="filter-section">
            <h4 className="filter-section-title">Fuel Type</h4>
            <div className="toggle-group">
              {fuelOptions.map((fuel) => (
                <button key={fuel} className={`toggle-btn ${selectedFuels.includes(fuel) ? 'active' : ''}`} onClick={() => toggleFuel(fuel)} type="button">
                  {fuel}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h4 className="filter-section-title">Transmission</h4>
            <div className="toggle-group transmission-group">
              {transmissionOptions.map((t) => (
                <button key={t} className={`toggle-btn ${selectedTransmissions.includes(t) ? 'active' : ''}`} onClick={() => toggleTransmission(t)} type="button">
                  {t}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="cars-section">
          <div className="inventory-toolbar">
            <div className="inventory-count">
              Showing {startIndex + 1} - {Math.min(endIndex, filteredCars.length)} of {filteredCars.length} results
            </div>
            <div className="inventory-sort">
              <label htmlFor="sort">Sort by:</label>
              <select id="sort" className="sort-select" defaultValue="latest">
                <option value="latest">Latest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid-cards cars-list">
            {paginatedCars.length > 0 ? (
              paginatedCars.map((car) => <CarCard key={car.slug} car={car} />)
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem' }}>
                <p>No cars found matching your filters. Try adjusting your search.</p>
              </div>
            )}
          </div>

          {filteredCars.length > 0 && (
            <div className="pagination-wrap">
              {currentPage > 1 && (
                <button className="pagination-arrow" onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}>
                  Previous
                </button>
              )}

              <div className="pagination-numbers">
                {Array.from({ length: visiblePaginationPages }, (_, i) => {
                  const pageNum = i + 1;
                  const isNear = Math.abs(pageNum - currentPage) <= 2;
                  const isFirst = pageNum === 1;
                  const isLast = pageNum === visiblePaginationPages;

                  if (isNear || isFirst || isLast) {
                    return (
                      <button key={pageNum} className={`page-btn ${pageNum === currentPage ? 'active' : ''}`} onClick={() => setCurrentPage(pageNum)}>
                        {pageNum}
                      </button>
                    );
                  } else if (pageNum === 2 || pageNum === visiblePaginationPages - 1) {
                    return <span key={`dots-${pageNum}`}>...</span>;
                  }
                  return null;
                })}
              </div>

              <button className="pagination-arrow" onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages}>
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}




