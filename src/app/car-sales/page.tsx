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
    <div className="grid gap-4">
      {/* Hero */}
      <section className="car-sales-hero text-white py-[2.3rem] text-center">
  <div className="w-full px-[clamp(16px,2vw,24px)] relative z-[1]">
    <div className="grid gap-[1.1rem] justify-items-center">
      <h1 className="m-0 text-white text-[clamp(1.65rem,2.5vw,2.35rem)] font-bold tracking-[-0.02em]">Find Your Perfect Car</h1>
      <div className="flex items-center justify-center gap-[0.65rem] text-[rgba(255,255,255,0.88)] text-[0.92rem] font-semibold" aria-label="Breadcrumb">
        <Link href="/" className="text-white hover:text-[#9fe8f2]">Home</Link>
        <span aria-hidden="true">&gt;</span>
        <span>Car Sales</span>
      </div>
    </div>
  </div>
</section>

      {/* Split grid: filters + cars */}
<section className="w-full px-[clamp(16px,2vw,24px)] grid grid-cols-[440px_minmax(0,900px)] gap-[1.6rem] items-start max-[1450px]:grid-cols-[360px_minmax(0,1fr)] max-[900px]:grid-cols-1">        {/* Sidebar filters */}
<aside className="h-fit min-w-[370px] max-w-[370px] bg-white p-[2rem_1.55rem] text-brand-3 max-[1450px]:min-w-[360px] max-[1450px]:max-w-[360px] max-[900px]:w-full max-[900px]:min-w-0 max-[900px]:max-w-none max-[1080px]:p-6">
     <div className="flex items-center justify-between gap-4 mb-8">
            <h2 className="m-0 text-[#07345f] text-[1.7rem] font-bold leading-none">Filters</h2>
            <button className="border-0 bg-transparent text-[#001f3f] cursor-pointer text-[0.82rem] tracking-[0.18em] p-0 hover:text-brand-2" onClick={resetFilters} type="button">
              Reset All
            </button>
          </div>

          {/* Search */}
          <div className="grid gap-[0.7rem] mb-[1.9rem]">
            <div className="relative">
              <input
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                placeholder="Search make or model..."
                className="w-full border-0 bg-[#eef4ff] text-[#19334f] rounded-[4px] py-4 pr-12 pl-4 outline-none text-[0.98rem] placeholder:text-[#6b7890] focus:shadow-[0_0_0_2px_rgba(10,58,104,0.16)]"
              />
              <span className="filter-search-icon" aria-hidden="true" />
            </div>
          </div>

          {/* Vehicle Make */}
          <div className="grid gap-4 mb-8">
            <h4 className="m-0 text-[#0a2746] text-[0.72rem] font-bold tracking-[0.24em] uppercase">Vehicle Make</h4>
            <div className="grid gap-[0.85rem]">
              {makeOptions.map((make) => (
              <label key={make.label} className="make-item flex items-center gap-3 text-[#052844] cursor-pointer text-[0.98rem]">
  <input type="checkbox" checked={selectedMakes.includes(make.label)} onChange={() => toggleMake(make.label)} className="absolute opacity-0 pointer-events-none" />
  <span className="custom-checkbox w-[15px] h-[15px] border border-[#c5ceda] rounded-[2px] bg-white inline-flex items-center justify-center flex-none" aria-hidden="true" />
  <span>
    {make.label} <span className="text-[#052844]">({make.count})</span>
  </span>
</label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="grid gap-4 mb-8">
            <h4 className="m-0 text-[#0a2746] text-[0.72rem] font-bold tracking-[0.24em] uppercase">Price Range (PKR)</h4>
            <input
              type="range"
              min={1000000}
              max={50000000}
              step={1000000}
              value={maxPrice}
              onChange={(e) => { setMaxPrice(parseInt(e.target.value)); setCurrentPage(1); }}
              className="price-slider"
            />
            <div className="flex justify-between text-[#001f3f] font-bold text-[0.94rem]">
              <span>1M</span>
              <span>50M</span>
            </div>
          </div>

          {/* Fuel Type */}
          <div className="grid gap-4 mb-8">
            <h4 className="m-0 text-[#0a2746] text-[0.72rem] font-bold tracking-[0.24em] uppercase">Fuel Type</h4>
            <div className="flex flex-wrap gap-[0.65rem]">
              {fuelOptions.map((fuel) => (
                <button
                  key={fuel}
                  className={`min-w-[72px] border py-[0.82rem] px-4 rounded-[10px] cursor-pointer font-medium text-sm transition-[background-color,color,border-color] duration-[180ms] ${selectedFuels.includes(fuel) ? 'bg-brand text-white border-brand' : 'bg-[#eef4ff] text-[#002b54] border-transparent hover:border-[rgba(10,58,104,0.22)]'}`}
                  onClick={() => toggleFuel(fuel)}
                  type="button"
                >
                  {fuel}
                </button>
              ))}
            </div>
          </div>

          {/* Transmission */}
          <div className="grid gap-4 mb-8">
            <h4 className="m-0 text-[#0a2746] text-[0.72rem] font-bold tracking-[0.24em] uppercase">Transmission</h4>
            <div className="grid grid-cols-2 gap-[0.65rem]">
              {transmissionOptions.map((t) => (
                <button
                  key={t}
                  className={`border py-[0.82rem] px-4 rounded-[3px] cursor-pointer font-medium text-sm transition-[background-color,color,border-color] duration-[180ms] ${selectedTransmissions.includes(t) ? 'bg-[#9ed0ff] text-[#002b54] border-brand' : 'bg-white text-[#002b54] border-[#c7d0dc]'}`}
                  onClick={() => toggleTransmission(t)}
                  type="button"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Cars section */}
        <div className="min-w-0">
          {/* Toolbar */}
          <div className="flex items-center justify-between gap-4 mb-[1.45rem] text-[#243a53] text-[0.9rem] max-[720px]:flex-col max-[720px]:items-start">
            <div className="text-[#263852] font-medium">
              Showing {startIndex + 1} - {Math.min(endIndex, filteredCars.length)} of {filteredCars.length} results
            </div>
            <div className="flex items-center gap-[0.7rem] text-[#30445e] text-[0.88rem]">
              <label htmlFor="sort">Sort by:</label>
              <select
                id="sort"
                className="min-w-[142px] border border-[#dfe7f1] rounded-[2px] bg-white text-[#142c48] py-[0.72rem] pl-[0.85rem] pr-9 outline-none focus:border-brand focus:shadow-[0_0_0_3px_rgba(10,58,104,0.12)]"
                defaultValue="latest"
              >
                <option value="latest">Latest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Car cards list */}
          <div className="cars-list grid gap-[1.35rem]">
            {paginatedCars.length > 0 ? (
              paginatedCars.map((car) => (
                <div key={car.slug} className="grid grid-cols-[minmax(230px,290px)_minmax(0,1fr)] border border-[rgba(9,39,70,0.06)] rounded-[2px] bg-white shadow-[0_14px_34px_rgba(10,31,58,0.08)] overflow-hidden transition-[transform,box-shadow] duration-[180ms] hover:-translate-y-[3px] hover:shadow-[0_20px_44px_rgba(10,31,58,0.12)] max-[980px]:grid-cols-[220px_minmax(0,1fr)] max-[720px]:grid-cols-1">
                  {/* Image */}
                  <div className="flex-none w-full h-[176px] overflow-hidden max-[720px]:w-full max-[720px]:max-w-none max-[720px]:h-[220px]">
                    <img
                      src={car.images[0]}
                      alt={car.title}
                      className="w-full h-full object-cover transition-transform duration-200 hover:scale-[1.035]"
                    />
                  </div>
                  {/* Body */}
                  <div className="flex flex-col justify-between gap-3 flex-1 grid grid-cols-[minmax(0,1fr)_auto] py-[1.45rem] px-[1.55rem] pb-[1.15rem] grid-rows-[auto_auto_auto_1fr] col-gap-6 row-gap-[0.55rem] min-h-[176px] content-center max-[980px]:grid-cols-1 max-[980px]:p-5">
                    <h3 className="m-0 text-[#043b66] text-[1.08rem] font-extrabold tracking-[-0.01em] col-start-1">{car.title}</h3>
                    <div className="flex flex-wrap gap-[0.45rem] text-[#00819a] text-[0.85rem] font-bold col-start-1">
                      <span>{car.year}</span>
                      <span className="before:content-['|'] before:text-[#00819a] before:ml-[0.45rem]">{car.transmission}</span>
                      <span className="before:content-['|'] before:text-[#00819a] before:ml-[0.45rem]">{car.fuelType}</span>
                    </div>
                    <div className="mt-[0.3rem] text-[#043b66] text-[1.32rem] font-extrabold col-start-1">{car.price}</div>
                    <div className="flex flex-wrap gap-[1.15rem] mt-[0.1rem] text-[#455a70] text-[0.82rem] col-start-1">
                      <span className="relative pl-4 cars-list meta">{car.mileage}</span>
                      <span className="relative pl-4 cars-list meta">{car.fuelType}</span>
                    </div>
                    {/* Action button in grid column 2 */}
                    <div className="row-span-4 flex items-center col-start-2 col-end-3 max-[980px]:col-start-1 max-[980px]:col-end-1 max-[980px]:row-span-1 max-[980px]:mt-[0.4rem]">
                      <a
                        href={`/car-sales/${car.slug}`}
                        className="inline-flex min-w-[160px] justify-center items-center rounded-[2px] bg-[#063e66] text-white py-[0.78rem] px-[1.35rem] font-bold text-sm transition hover:bg-[#005f86] hover:-translate-y-px no-underline"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center p-8">
                <p>No cars found matching your filters. Try adjusting your search.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredCars.length > 0 && (
            <div className="flex items-center justify-center gap-[0.72rem] w-[min(100%,950px)] max-w-[950px] mx-auto mt-12 py-[1.65rem_0_1.15rem]">
              {currentPage > 1 && (
                <button
                  className="flex-none w-auto min-w-[78px] h-11 px-[1.15rem] border-0 rounded-[2px] bg-[#f0f6fd] text-[#063e66] text-[0.95rem] font-semibold leading-none cursor-pointer hover:bg-[#063e66] hover:text-white"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                >
                  Previous
                </button>
              )}

              <div className="contents">
                {Array.from({ length: visiblePaginationPages }, (_, i) => {
                  const pageNum = i + 1;
                  const isNear = Math.abs(pageNum - currentPage) <= 2;
                  const isFirst = pageNum === 1;
                  const isLast = pageNum === visiblePaginationPages;

                  if (isNear || isFirst || isLast) {
                    return (
                      <button
                        key={pageNum}
                        className={`flex-none w-11 min-w-[44px] h-11 border-0 rounded-[2px] text-[0.95rem] font-semibold leading-none cursor-pointer ${pageNum === currentPage ? 'bg-[#063e66] text-white' : 'bg-[#f0f6fd] text-[#063e66] hover:bg-[#063e66] hover:text-white'}`}
                        onClick={() => setCurrentPage(pageNum)}
                      >
                        {pageNum}
                      </button>
                    );
                  } else if (pageNum === 2 || pageNum === visiblePaginationPages - 1) {
                    return <span key={`dots-${pageNum}`}>...</span>;
                  }
                  return null;
                })}
              </div>

              <button
                className="flex-none w-auto min-w-[78px] h-11 px-[1.15rem] border-0 rounded-[2px] bg-[#f0f6fd] text-[#063e66] text-[0.95rem] font-semibold leading-none cursor-pointer hover:bg-[#063e66] hover:text-white disabled:opacity-55"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
