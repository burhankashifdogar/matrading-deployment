"use client";

import { useMemo, useState } from 'react';
import Link from 'next/link';

import { availableStock } from '@/data/site';
import { SectionHeading } from '@/components/section-heading';

const CARS_PER_PAGE = 4;
const stockImages = ['/img1.jpg', '/car1.jpg', '/car2.jpg', '/car3.jpg'];
const formatNumber = (value: number) => new Intl.NumberFormat('en-PK').format(value);

const uniqueSorted = (values: string[]) => Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));

export default function CarSalesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMakes, setSelectedMakes] = useState<string[]>([]);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [selectedColours, setSelectedColours] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState(1000000);
  const [maxPrice, setMaxPrice] = useState(50000000);
  const [currentPage, setCurrentPage] = useState(1);

  const makeOptions = useMemo(
    () =>
      uniqueSorted(availableStock.map((item) => item.make)).map((label) => ({
        label,
        count: availableStock.filter((item) => item.make === label).length
      })),
    []
  );

  const modelOptions = useMemo(
    () =>
      uniqueSorted(availableStock.map((item) => String(item.model))).map((label) => ({
        label,
        count: availableStock.filter((item) => String(item.model) === label).length
      })),
    []
  );

  const colourOptions = useMemo(
    () =>
      uniqueSorted(availableStock.map((item) => item.colour)).map((label) => ({
        label,
        count: availableStock.filter((item) => item.colour === label).length
      })),
    []
  );

  const cityOptions = useMemo(
    () =>
      uniqueSorted(availableStock.map((item) => item.registrationCity)).map((label) => ({
        label,
        count: availableStock.filter((item) => item.registrationCity === label).length
      })),
    []
  );

  const filteredStock = useMemo(() => {
    return availableStock.filter((item) => {
      const matchesSearch = [item.make, item.variant, item.colour, item.registrationCity, String(item.model)]
        .join(' ')
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      if (selectedMakes.length > 0 && !selectedMakes.includes(item.make)) return false;
      if (selectedModels.length > 0 && !selectedModels.includes(String(item.model))) return false;
      if (selectedColours.length > 0 && !selectedColours.includes(item.colour)) return false;
      if (selectedCities.length > 0 && !selectedCities.includes(item.registrationCity)) return false;

      if (item.demandPkr < minPrice || item.demandPkr > maxPrice) return false;

      return matchesSearch;
    });
  }, [searchQuery, selectedMakes, selectedModels, selectedColours, selectedCities, minPrice, maxPrice]);

  const totalPages = Math.max(1, Math.ceil(filteredStock.length / CARS_PER_PAGE));
  const visiblePaginationPages = Math.max(totalPages, 4);
  const startIndex = (currentPage - 1) * CARS_PER_PAGE;
  const endIndex = startIndex + CARS_PER_PAGE;
  const paginatedStock = filteredStock.slice(startIndex, endIndex);

  const toggleValue = (value: string, setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedMakes([]);
    setSelectedModels([]);
    setSelectedColours([]);
    setSelectedCities([]);
    setMinPrice(1000000);
    setMaxPrice(50000000);
    setCurrentPage(1);
  };

  return (
    <div className="grid gap-4">
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

      <section className="w-full px-[clamp(16px,2vw,24px)] grid grid-cols-[440px_minmax(0,900px)] gap-[1.6rem] items-start max-[1450px]:grid-cols-[360px_minmax(0,1fr)] max-[900px]:grid-cols-1">
        <aside className="h-fit min-w-[370px] max-w-[370px] bg-white p-[2rem_1.55rem] text-brand-3 max-[1450px]:min-w-[360px] max-[1450px]:max-w-[360px] max-[900px]:w-full max-[900px]:min-w-0 max-[900px]:max-w-none max-[1080px]:p-6">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h2 className="m-0 text-[#07345f] text-[1.7rem] font-bold leading-none">Filters</h2>
            <button className="border-0 bg-transparent text-[#001f3f] cursor-pointer text-[0.82rem] tracking-[0.18em] p-0 hover:text-brand-2" onClick={resetFilters} type="button">
              Reset All
            </button>
          </div>

          <div className="grid gap-[0.7rem] mb-[1.9rem]">
            <div className="relative">
              <input
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search make, model, variant..."
                className="w-full border-0 bg-[#eef4ff] text-[#19334f] rounded-[4px] py-4 pr-12 pl-4 outline-none text-[0.98rem] placeholder:text-[#6b7890] focus:shadow-[0_0_0_2px_rgba(10,58,104,0.16)]"
              />
              <span className="filter-search-icon" aria-hidden="true" />
            </div>
          </div>

          <div className="grid gap-4 mb-8">
            <h4 className="m-0 text-[#0a2746] text-[0.72rem] font-bold tracking-[0.24em] uppercase">Vehicle Make</h4>
            <div className="grid gap-[0.85rem]">
              {makeOptions.map((make) => (
                <label key={make.label} className="make-item flex items-center gap-3 text-[#052844] cursor-pointer text-[0.98rem]">
                  <input type="checkbox" checked={selectedMakes.includes(make.label)} onChange={() => toggleValue(make.label, setSelectedMakes)} className="absolute opacity-0 pointer-events-none" />
                  <span className="custom-checkbox w-[15px] h-[15px] border border-[#c5ceda] rounded-[2px] bg-white inline-flex items-center justify-center flex-none" aria-hidden="true" />
                  <span>
                    {make.label} <span className="text-[#052844]">({make.count})</span>
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid gap-4 mb-8">
            <h4 className="m-0 text-[#0a2746] text-[0.72rem] font-bold tracking-[0.24em] uppercase">Model</h4>
            <div className="grid gap-[0.85rem]">
              {modelOptions.map((model) => (
                <label key={model.label} className="make-item flex items-center gap-3 text-[#052844] cursor-pointer text-[0.98rem]">
                  <input type="checkbox" checked={selectedModels.includes(model.label)} onChange={() => toggleValue(model.label, setSelectedModels)} className="absolute opacity-0 pointer-events-none" />
                  <span className="custom-checkbox w-[15px] h-[15px] border border-[#c5ceda] rounded-[2px] bg-white inline-flex items-center justify-center flex-none" aria-hidden="true" />
                  <span>
                    {model.label} <span className="text-[#052844]">({model.count})</span>
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid gap-4 mb-8">
            <h4 className="m-0 text-[#0a2746] text-[0.72rem] font-bold tracking-[0.24em] uppercase">Colour</h4>
            <div className="grid gap-[0.85rem]">
              {colourOptions.map((colour) => (
                <label key={colour.label} className="make-item flex items-center gap-3 text-[#052844] cursor-pointer text-[0.98rem]">
                  <input type="checkbox" checked={selectedColours.includes(colour.label)} onChange={() => toggleValue(colour.label, setSelectedColours)} className="absolute opacity-0 pointer-events-none" />
                  <span className="custom-checkbox w-[15px] h-[15px] border border-[#c5ceda] rounded-[2px] bg-white inline-flex items-center justify-center flex-none" aria-hidden="true" />
                  <span>
                    {colour.label} <span className="text-[#052844]">({colour.count})</span>
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid gap-4 mb-8">
            <h4 className="m-0 text-[#0a2746] text-[0.72rem] font-bold tracking-[0.24em] uppercase">Registration City</h4>
            <div className="grid gap-[0.85rem]">
              {cityOptions.map((city) => (
                <label key={city.label} className="make-item flex items-center gap-3 text-[#052844] cursor-pointer text-[0.98rem]">
                  <input type="checkbox" checked={selectedCities.includes(city.label)} onChange={() => toggleValue(city.label, setSelectedCities)} className="absolute opacity-0 pointer-events-none" />
                  <span className="custom-checkbox w-[15px] h-[15px] border border-[#c5ceda] rounded-[2px] bg-white inline-flex items-center justify-center flex-none" aria-hidden="true" />
                  <span>
                    {city.label} <span className="text-[#052844]">({city.count})</span>
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid gap-4 mb-8">
            <h4 className="m-0 text-[#0a2746] text-[0.72rem] font-bold tracking-[0.24em] uppercase">Price Range (PKR)</h4>
            <input
              type="range"
              min={1000000}
              max={50000000}
              step={1000000}
              value={maxPrice}
              onChange={(e) => {
                setMaxPrice(parseInt(e.target.value));
                setCurrentPage(1);
              }}
              className="price-slider"
            />
            <div className="flex justify-between text-[#001f3f] font-bold text-[0.94rem]">
              <span>1M</span>
              <span>50M</span>
            </div>
          </div>
        </aside>

        <div className="min-w-0">
          <div className="flex items-center justify-between gap-4 mb-[1.45rem] text-[#243a53] text-[0.9rem] max-[720px]:flex-col max-[720px]:items-start">
            <div className="text-[#263852] font-medium">
              Showing {startIndex + 1} - {Math.min(endIndex, filteredStock.length)} of {filteredStock.length} results
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

          <div className="cars-list grid gap-[1.35rem]">
            {paginatedStock.length > 0 ? (
              paginatedStock.map((item, index) => {
                const image = stockImages[index % stockImages.length];

                return (
                  <div key={item.slug} className="grid grid-cols-[minmax(230px,290px)_minmax(0,1fr)] border border-[rgba(9,39,70,0.06)] rounded-[2px] bg-white shadow-[0_14px_34px_rgba(10,31,58,0.08)] overflow-hidden transition-[transform,box-shadow] duration-[180ms] hover:-translate-y-[3px] hover:shadow-[0_20px_44px_rgba(10,31,58,0.12)] max-[980px]:grid-cols-[220px_minmax(0,1fr)] max-[720px]:grid-cols-1">
                    <div className="flex-none w-full h-[176px] overflow-hidden max-[720px]:w-full max-[720px]:max-w-none max-[720px]:h-[220px]">
                      <img
                        src={image}
                        alt={item.make}
                        className="w-full h-full object-cover transition-transform duration-200 hover:scale-[1.035]"
                      />
                    </div>
                    <div className="flex flex-col justify-between gap-3 flex-1 grid grid-cols-[minmax(0,1fr)_auto] py-[1.45rem] px-[1.55rem] pb-[1.15rem] grid-rows-[auto_auto_auto_1fr] col-gap-6 row-gap-[0.55rem] min-h-[176px] content-center max-[980px]:grid-cols-1 max-[980px]:p-5">
                      <h3 className="m-0 text-[#043b66] text-[1.08rem] font-extrabold tracking-[-0.01em] col-start-1">{item.make}</h3>
                      <div className="flex flex-wrap gap-[0.45rem] text-[#00819a] text-[0.85rem] font-bold col-start-1">
                        <span>{item.model}</span>
                        <span className="before:content-['|'] before:text-[#00819a] before:ml-[0.45rem]">{item.variant}</span>
                        <span className="before:content-['|'] before:text-[#00819a] before:ml-[0.45rem]">{item.colour}</span>
                      </div>
                      <div className="mt-[0.3rem] text-[#043b66] text-[1.32rem] font-extrabold col-start-1">PKR {formatNumber(item.demandPkr)}</div>
                      <div className="flex flex-wrap gap-[1.15rem] mt-[0.1rem] text-[#455a70] text-[0.82rem] col-start-1">
                        <span className="relative pl-4">{formatNumber(item.mileageKm)} km</span>
                        <span className="relative pl-4">{item.registrationCity}</span>
                        <span className="relative pl-4">GBP {formatNumber(item.demandPound)}</span>
                      </div>
                      <div className="row-span-4 flex items-center col-start-2 col-end-3 max-[980px]:col-start-1 max-[980px]:col-end-1 max-[980px]:row-span-1 max-[980px]:mt-[0.4rem]">
                        <a
                          href={`/car-sales/${item.slug}`}
                          className="inline-flex min-w-[160px] justify-center items-center rounded-[2px] bg-[#063e66] text-white py-[0.78rem] px-[1.35rem] font-bold text-sm transition hover:bg-[#005f86] hover:-translate-y-px no-underline"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full text-center p-8">
                <p>No cars found matching your filters. Try adjusting your search.</p>
              </div>
            )}
          </div>

          {filteredStock.length > 0 && (
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

