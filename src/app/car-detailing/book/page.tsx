"use client";

import { useMemo, useState } from 'react';

type BookingRow = {
  category: string;
  pkr: string;
  remarks: string;
};

type BookingService = {
  title: string;
  helper: string;
  rows: BookingRow[];
};

const bookingServices: BookingService[] = [
  {
    title: 'Detailings (Cleaning)',
    helper: 'Professional cleaning based on your vehicle category.',
    rows: [
      { category: 'Sedans', pkr: '6000-8000', remarks: 'Free service for vehicles purchased by MA Trading' },
      { category: 'Hatchbacks', pkr: '4000-6000', remarks: 'Free service for vehicles purchased by MA Trading' },
      { category: 'Cross Overs', pkr: '8000-12000', remarks: 'Free service for vehicles purchased by MA Trading' },
      { category: 'SUVs', pkr: '14000-18000', remarks: 'Free service for vehicles purchased by MA Trading' }
    ]
  },
  {
    title: 'Documents Inspection',
    helper: 'Document inspection pricing for the same category types.',
    rows: [
      { category: 'Sedans', pkr: '8000-10000', remarks: 'Free service for vehicles purchased by MA Trading' },
      { category: 'Hatchbacks', pkr: '4000-6000', remarks: 'Free service for vehicles purchased by MA Trading' },
      { category: 'Cross Overs', pkr: '10000-15000', remarks: 'Free service for vehicles purchased by MA Trading' },
      { category: 'SUVs', pkr: '15000-20000', remarks: 'Free service for vehicles purchased by MA Trading' }
    ]
  }
];

const trustItems = [
  { title: 'Precision Work', description: 'Every inch meticulously examined.', icon: 'car' },
  { title: 'Total Protection', description: 'Industry-leading ceramic finishes.', icon: 'shield' },
  { title: 'Timely Delivery', description: 'Respecting your high-value time.', icon: 'timer' },
  { title: 'Premium Grade', description: 'Finest chemical treatments only.', icon: 'badge' }
];

const promiseItems = ['Certified Technicians', '100% Satisfaction Guarantee', 'Eco-Friendly Solutions'];

export default function DetailingBookingPage() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const activeService = useMemo(
    () => bookingServices.find((service) => service.title === selectedService) || null,
    [selectedService]
  );

  const categoryOptions = activeService?.rows ?? [];
  const selectedCategoryData = useMemo(
    () => categoryOptions.find((row) => row.category === selectedCategory) || null,
    [categoryOptions, selectedCategory]
  );

  return (
    <div className="bg-[#f4f7fc] pt-[2.2rem] pb-16">
      <section className="w-full px-[clamp(16px,2vw,24px)] w-[min(100%,1040px)] mx-auto mb-8">
        <div className="inline-flex items-center rounded-full bg-white/80 px-4 py-2 text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-[#063e66] shadow-[0_10px_22px_rgba(8,20,40,0.06)]">
          Book Detailing Service
        </div>
        <h1 className="m-0 mt-4 text-[#063e66] text-[clamp(2rem,3vw,2.85rem)] leading-none font-extrabold tracking-[-0.05em]">
          BOOK YOUR
          <br />
          <span className="text-brand-2">SERVICE SLOT</span>
        </h1>
        <p className="max-w-[590px] mt-3 mb-0 text-[#52647a] text-[0.95rem] leading-[1.75]">
          Choose from the same detailing services and categories shown on the pricing page, then pick a date and time that suits you.
        </p>
      </section>

      <section className="w-full px-[clamp(16px,2vw,24px)] flex justify-center">
        <div className="grid grid-cols-[minmax(0,720px)_minmax(280px,330px)] gap-[2.6rem] w-[min(100%,1040px)] items-start max-[980px]:grid-cols-1">
          <div className="bg-white border border-[rgba(6,62,102,0.06)] shadow-[0_18px_42px_rgba(8,20,40,0.045)] p-[2.75rem] max-[640px]:p-[1.4rem]">
            <form className="grid gap-8">
              <div className="grid gap-5 pb-[1.95rem] border-b border-[rgba(6,62,102,0.07)]">
                <div className="flex items-center gap-[0.65rem] text-[#063e66]">
                  <span className="inline-grid w-[26px] h-6 place-items-center rounded-[2px] bg-[#eaf3fd] text-[#063e66] text-[0.72rem] font-extrabold">01</span>
                  <strong className="text-[0.88rem] font-[650]">Personal Information</strong>
                </div>
                <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
                  <div className="grid gap-[0.45rem]">
                    <label htmlFor="fullName" className="text-[#0c2440] text-[0.78rem] font-bold tracking-[0.04em]">Full Name</label>
                    <input id="fullName" placeholder="Alexander Sterling" className="w-full border border-[#cbd6e4] rounded-none bg-[#edf3fb] text-[#102a43] py-[0.85rem] px-[0.9rem] outline-none text-[0.9rem] min-h-12 transition-[border-color,box-shadow] focus:border-[#063e66] focus:shadow-[0_0_0_3px_rgba(6,62,102,0.1)]" />
                  </div>
                  <div className="grid gap-[0.45rem]">
                    <label htmlFor="phone" className="text-[#0c2440] text-[0.78rem] font-bold tracking-[0.04em]">Phone Number</label>
                    <input id="phone" placeholder="+1 (555) 000-0000" className="w-full border border-[#cbd6e4] rounded-none bg-[#edf3fb] text-[#102a43] py-[0.85rem] px-[0.9rem] outline-none text-[0.9rem] min-h-12 transition-[border-color,box-shadow] focus:border-[#063e66] focus:shadow-[0_0_0_3px_rgba(6,62,102,0.1)]" />
                  </div>
                </div>
                <div className="grid gap-[0.45rem]">
                  <label htmlFor="email" className="text-[#0c2440] text-[0.78rem] font-bold tracking-[0.04em]">Email Address</label>
                  <input id="email" type="email" placeholder="alexander@prestige.com" className="w-full border border-[#cbd6e4] rounded-none bg-[#edf3fb] text-[#102a43] py-[0.85rem] px-[0.9rem] outline-none text-[0.9rem] min-h-12 transition-[border-color,box-shadow] focus:border-[#063e66] focus:shadow-[0_0_0_3px_rgba(6,62,102,0.1)]" />
                </div>
              </div>

              <div className="grid gap-5 pb-[1.95rem] border-b border-[rgba(6,62,102,0.07)]">
                <div className="flex items-center gap-[0.65rem] text-[#063e66]">
                  <span className="inline-grid w-[26px] h-6 place-items-center rounded-[2px] bg-[#eaf3fd] text-[#063e66] text-[0.72rem] font-extrabold">02</span>
                  <strong className="text-[0.88rem] font-[650]">Service Selection</strong>
                </div>
                <div className="grid gap-[0.45rem]">
                  <label htmlFor="service" className="text-[#0c2440] text-[0.78rem] font-bold tracking-[0.04em]">Select Service</label>
                  <select
                    id="service"
                    value={selectedService}
                    onChange={(e) => {
                      setSelectedService(e.target.value);
                      setSelectedCategory('');
                    }}
                    className="w-full border border-[#cbd6e4] rounded-none bg-[#edf3fb] text-[#102a43] py-[0.85rem] px-[0.9rem] outline-none text-[0.9rem] min-h-12 transition-[border-color,box-shadow] focus:border-[#063e66] focus:shadow-[0_0_0_3px_rgba(6,62,102,0.1)]"
                  >
                    <option value="" disabled>Choose a service...</option>
                    {bookingServices.map((service) => (
                      <option key={service.title} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                  {activeService ? <p className="m-0 text-[0.8rem] text-[#5d6b7d]">{activeService.helper}</p> : null}
                </div>
                <div className="grid gap-[0.45rem]">
                  <label htmlFor="category" className="text-[#0c2440] text-[0.78rem] font-bold tracking-[0.04em]">Select Category</label>
                  <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    disabled={!activeService}
                    className="w-full border border-[#cbd6e4] rounded-none bg-[#edf3fb] text-[#102a43] py-[0.85rem] px-[0.9rem] outline-none text-[0.9rem] min-h-12 transition-[border-color,box-shadow] focus:border-[#063e66] focus:shadow-[0_0_0_3px_rgba(6,62,102,0.1)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <option value="" disabled>
                      {activeService ? 'Choose a category...' : 'Select service first...'}
                    </option>
                    {categoryOptions.map((row) => (
                      <option key={row.category} value={row.category}>
                        {row.category}
                      </option>
                    ))}
                  </select>
                </div>
                {selectedCategoryData ? (
                  <div className="grid gap-2 rounded-[14px] border border-[rgba(6,62,102,0.08)] bg-[#f7fbfe] px-4 py-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-[#5d6b7d]">Estimated Price</span>
                      <strong className="text-[#063e66] text-[0.98rem]">PKR {selectedCategoryData.pkr}</strong>
                    </div>
                    <p className="m-0 text-[0.8rem] text-[#5d6b7d] leading-[1.55]">{selectedCategoryData.remarks}</p>
                  </div>
                ) : null}
              </div>

              <div className="grid gap-5">
                <div className="flex items-center gap-[0.65rem] text-[#063e66]">
                  <span className="inline-grid w-[26px] h-6 place-items-center rounded-[2px] bg-[#eaf3fd] text-[#063e66] text-[0.72rem] font-extrabold">03</span>
                  <strong className="text-[0.88rem] font-[650]">Schedule Appointment</strong>
                </div>
                <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
                  <div className="grid gap-[0.45rem]">
                    <label htmlFor="date" className="text-[#0c2440] text-[0.78rem] font-bold tracking-[0.04em]">Preferred Date</label>
                    <input id="date" type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="w-full border border-[#cbd6e4] rounded-none bg-[#edf3fb] text-[#102a43] py-[0.85rem] px-[0.9rem] outline-none text-[0.9rem] min-h-12 transition-[border-color,box-shadow] focus:border-[#063e66] focus:shadow-[0_0_0_3px_rgba(6,62,102,0.1)]" />
                  </div>
                  <div className="grid gap-[0.45rem]">
                    <label htmlFor="time" className="text-[#0c2440] text-[0.78rem] font-bold tracking-[0.04em]">Preferred Time</label>
                    <input id="time" type="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} className="w-full border border-[#cbd6e4] rounded-none bg-[#edf3fb] text-[#102a43] py-[0.85rem] px-[0.9rem] outline-none text-[0.9rem] min-h-12 transition-[border-color,box-shadow] focus:border-[#063e66] focus:shadow-[0_0_0_3px_rgba(6,62,102,0.1)]" />
                  </div>
                </div>
              </div>

              <button className="w-full min-h-[58px] border-0 rounded-none bg-[#063e66] text-white cursor-pointer text-base font-extrabold transition hover:bg-[#005f86] hover:-translate-y-px" type="button">
                Confirm Booking Request
              </button>
            </form>
          </div>

          <aside className="grid gap-[1.6rem]">
            <div className="bg-[#063e66] text-white px-[1.75rem] py-8 shadow-[0_20px_44px_rgba(6,62,102,0.18)]">
              <h2 className="m-0 mb-5 pb-4 border-b border-[rgba(255,255,255,0.12)] text-white text-base font-[750]">Appointment Summary</h2>
              <div className="grid gap-5 pb-[1.35rem] border-b border-[rgba(255,255,255,0.12)]">
                {[
                  { label: 'Service', value: selectedService || 'Not selected' },
                  { label: 'Category', value: selectedCategory || 'Not selected' },
                  { label: 'Date', value: selectedDate || 'Not selected' },
                  { label: 'Time', value: selectedTime || 'Not selected' }
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between gap-4 text-[rgba(255,255,255,0.78)] text-[0.92rem]">
                    <span className="text-[rgba(255,255,255,0.9)] font-[650]">{label}</span>
                    <strong className="max-w-[150px] text-[rgba(255,255,255,0.72)] text-[0.9rem] font-semibold text-right">{value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-[1.05rem] py-[0.65rem] px-[0.2rem]">
              {promiseItems.map((item) => (
                <div key={item} className="premium-promise-item flex items-center gap-3 text-[#063e66] text-[0.9rem] font-extrabold">
                  <span className="relative w-[18px] h-[18px] flex-none rounded-full text-[#063e66]" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="w-full px-[clamp(16px,2vw,24px)] grid grid-cols-4 gap-8 w-[min(100%,1040px)] mx-auto mt-[5.5rem] text-center max-[980px]:grid-cols-2 max-[980px]:mt-14 max-[640px]:grid-cols-1" aria-label="Detailing benefits">
        {trustItems.map((item) => (
          <div key={item.title} className="grid justify-items-center gap-2 text-[#8a95a3]">
            <span className={`premium-trust-icon relative w-[42px] h-[42px] text-[#7c8796] icon-${item.icon}`} aria-hidden="true" />
            <strong className="text-[#8994a1] text-[0.9rem] font-bold">{item.title}</strong>
            <p className="max-w-[210px] m-0 text-[#a2acb8] text-[0.76rem] leading-[1.55]">{item.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
