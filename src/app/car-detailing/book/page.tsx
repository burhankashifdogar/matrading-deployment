"use client";

import { useState } from 'react';

const trustItems = [
  { title: 'Precision Work', description: 'Every inch meticulously examined.', icon: 'car' },
  { title: 'Total Protection', description: 'Industry-leading ceramic finishes.', icon: 'shield' },
  { title: 'Timely Delivery', description: 'Respecting your high-value time.', icon: 'timer' },
  { title: 'Premium Grade', description: 'Finest chemical treatments only.', icon: 'badge' }
];

const promiseItems = ['Certified Technicians', '100% Satisfaction Guarantee', 'Eco-Friendly Solutions'];

export default function DetailingBookingPage() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <div className="bg-[#f4f7fc] pt-[2.2rem] pb-16">
      {/* Hero */}
      <section className="w-full px-[clamp(16px,2vw,24px)] w-[min(100%,1040px)] mx-auto mb-8">
        <h1 className="m-0 text-[#063e66] text-[clamp(2rem,3vw,2.85rem)] leading-none font-extrabold tracking-[-0.05em]">
          BOOK YOUR
          <br />
          <span className="text-brand-2">PRECISION CARE</span>
        </h1>
        <p className="max-w-[590px] mt-3 mb-0 text-[#52647a] text-[0.95rem] leading-[1.75]">
          Restore your vehicle&apos;s showroom luster with our meticulous detailing services. Every session is an exercise in automotive perfection.
        </p>
      </section>

      {/* Booking layout */}
      <section className="w-full px-[clamp(16px,2vw,24px)] flex justify-center">
        <div className="grid grid-cols-[minmax(0,720px)_minmax(280px,330px)] gap-[2.6rem] w-[min(100%,1040px)] items-start max-[980px]:grid-cols-1">
          {/* Form card */}
          <div className="bg-white border border-[rgba(6,62,102,0.06)] shadow-[0_18px_42px_rgba(8,20,40,0.045)] p-[2.75rem] max-[640px]:p-[1.4rem]">
            <form className="grid gap-8">
              {/* Section 1 */}
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

              {/* Section 2 */}
              <div className="grid gap-5 pb-[1.95rem] border-b border-[rgba(6,62,102,0.07)]">
                <div className="flex items-center gap-[0.65rem] text-[#063e66]">
                  <span className="inline-grid w-[26px] h-6 place-items-center rounded-[2px] bg-[#eaf3fd] text-[#063e66] text-[0.72rem] font-extrabold">02</span>
                  <strong className="text-[0.88rem] font-[650]">Service Excellence</strong>
                </div>
                <div className="grid gap-[0.45rem]">
                  <label htmlFor="service" className="text-[#0c2440] text-[0.78rem] font-bold tracking-[0.04em]">Select Detailing Package</label>
                  <select id="service" value={selectedService} onChange={(e) => setSelectedService(e.target.value)} className="w-full border border-[#cbd6e4] rounded-none bg-[#edf3fb] text-[#102a43] py-[0.85rem] px-[0.9rem] outline-none text-[0.9rem] min-h-12 transition-[border-color,box-shadow] focus:border-[#063e66] focus:shadow-[0_0_0_3px_rgba(6,62,102,0.1)]">
                    <option value="" disabled>Choose a package...</option>
                    <option>Exterior Detailing</option>
                    <option>Interior Detailing</option>
                    <option>Paint Protection</option>
                    <option>Ceramic Coating</option>
                    <option>Deep Cleaning</option>
                    <option>Engine Bay Cleaning</option>
                  </select>
                </div>
              </div>

              {/* Section 3 */}
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

          {/* Sidebar */}
          <aside className="grid gap-[1.6rem]">
            {/* Summary card */}
            <div className="bg-[#063e66] text-white px-[1.75rem] py-8 shadow-[0_20px_44px_rgba(6,62,102,0.18)]">
              <h2 className="m-0 mb-5 pb-4 border-b border-[rgba(255,255,255,0.12)] text-white text-base font-[750]">Appointment Summary</h2>
              <div className="grid gap-5 pb-[1.35rem] border-b border-[rgba(255,255,255,0.12)]">
                {[
                  { label: 'Service', value: selectedService || 'Not selected' },
                  { label: 'Date', value: selectedDate || 'Not selected' },
                  { label: 'Time', value: selectedTime || 'Not selected' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between gap-4 text-[rgba(255,255,255,0.78)] text-[0.92rem]">
                    <span className="text-[rgba(255,255,255,0.9)] font-[650]">{label}</span>
                    <strong className="max-w-[150px] text-[rgba(255,255,255,0.72)] text-[0.9rem] font-semibold text-right">{value}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Promise list */}
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

      {/* Trust row */}
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
