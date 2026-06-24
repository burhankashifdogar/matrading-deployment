"use client";

import { useState } from 'react';

const trustItems = [
  {
    title: 'Precision Work',
    description: 'Every inch meticulously examined.',
    icon: 'car'
  },
  {
    title: 'Total Protection',
    description: 'Industry-leading ceramic finishes.',
    icon: 'shield'
  },
  {
    title: 'Timely Delivery',
    description: 'Respecting your high-value time.',
    icon: 'timer'
  },
  {
    title: 'Premium Grade',
    description: 'Finest chemical treatments only.',
    icon: 'badge'
  }
];

const promiseItems = ['Certified Technicians', '100% Satisfaction Guarantee', 'Eco-Friendly Solutions'];

export default function DetailingBookingPage() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <div className="booking-page booking-page-premium">
      <section className="content-wrap booking-precision-hero">
        <h1>Book Your Precision Care</h1>
        <p>
          Restore your vehicle&apos;s showroom luster with our meticulous detailing services. Every session is an exercise in automotive perfection.
        </p>
      </section>

      <section className="content-wrap booking-shell premium-booking-shell">
        <div className="premium-booking-layout">
          <div className="premium-booking-form-card">
            <form className="premium-booking-form">
              <div className="booking-form-section">
                <div className="booking-section-title">
                  <span>01</span>
                  <strong>Personal Information</strong>
                </div>

                <div className="booking-form-row">
                  <div className="booking-field">
                    <label htmlFor="fullName">Full Name</label>
                    <input id="fullName" placeholder="Alexander Sterling" />
                  </div>
                  <div className="booking-field">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="booking-field full-width">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" type="email" placeholder="alexander@prestige.com" />
                </div>
              </div>

              <div className="booking-form-section">
                <div className="booking-section-title">
                  <span>02</span>
                  <strong>Service Excellence</strong>
                </div>

                <div className="booking-field full-width">
                  <label htmlFor="service">Select Detailing Package</label>
                  <select id="service" value={selectedService} onChange={(event) => setSelectedService(event.target.value)}>
                    <option value="" disabled>
                      Choose a package...
                    </option>
                    <option>Exterior Detailing</option>
                    <option>Interior Detailing</option>
                    <option>Paint Protection</option>
                    <option>Ceramic Coating</option>
                    <option>Deep Cleaning</option>
                    <option>Engine Bay Cleaning</option>
                  </select>
                </div>
              </div>

              <div className="booking-form-section">
                <div className="booking-section-title">
                  <span>03</span>
                  <strong>Schedule Appointment</strong>
                </div>

                <div className="booking-form-row">
                  <div className="booking-field">
                    <label htmlFor="date">Preferred Date</label>
                    <input id="date" type="date" value={selectedDate} onChange={(event) => setSelectedDate(event.target.value)} />
                  </div>
                  <div className="booking-field">
                    <label htmlFor="time">Preferred Time</label>
                    <input id="time" type="time" value={selectedTime} onChange={(event) => setSelectedTime(event.target.value)} />
                  </div>
                </div>
              </div>

              <button className="booking-submit premium-booking-submit" type="button">
                Confirm Booking Request
              </button>
            </form>
          </div>

          <aside className="premium-booking-sidebar">
            <div className="premium-summary-card">
              <h2>Appointment Summary</h2>
              <div className="summary-simple-list">
                <div className="summary-simple-row">
                  <span>Service</span>
                  <strong>{selectedService || 'Not selected'}</strong>
                </div>
                <div className="summary-simple-row">
                  <span>Date</span>
                  <strong>{selectedDate || 'Not selected'}</strong>
                </div>
                <div className="summary-simple-row">
                  <span>Time</span>
                  <strong>{selectedTime || 'Not selected'}</strong>
                </div>
              </div>
            </div>

            <div className="premium-promise-list">
              {promiseItems.map((item) => (
                <div className="premium-promise-item" key={item}>
                  <span aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="content-wrap premium-trust-row" aria-label="Detailing benefits">
        {trustItems.map((item) => (
          <div className="premium-trust-item" key={item.title}>
            <span className={`premium-trust-icon icon-${item.icon}`} aria-hidden="true" />
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
