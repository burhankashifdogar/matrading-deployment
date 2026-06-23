import { PageShell } from '@/components/page-shell';

export default function DetailingBookingPage() {
  return (
    <div className="stack">
      <PageShell
        eyebrow="Detailing Booking"
        title="Book an appointment"
        description="A clean booking form for now, with a structure that can later connect to an admin inbox and database."
      />

      <section className="two-column">
        <div className="site-card panel-pad">
          <form className="form-grid">
            <div className="form-row">
              <div className="field">
                <label htmlFor="fullName">Full name</label>
                <input id="fullName" placeholder="Enter your name" />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone number</label>
                <input id="phone" placeholder="Enter your phone number" />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="car">Car details</label>
                <input id="car" placeholder="Car make / model / year" />
              </div>
              <div className="field">
                <label htmlFor="service">Service</label>
                <select id="service" defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Exterior Detailing</option>
                  <option>Interior Detailing</option>
                  <option>Ceramic Coating</option>
                  <option>Engine Bay Cleaning</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="date">Preferred date</label>
                <input id="date" type="date" />
              </div>
              <div className="field">
                <label htmlFor="time">Preferred time</label>
                <input id="time" type="time" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="notes">Additional notes</label>
              <textarea id="notes" placeholder="Anything we should know?" />
            </div>

            <button className="button primary" type="button">
              Submit Booking
            </button>
          </form>
        </div>

        <aside className="site-card panel-pad stack">
          <h3>Appointment Summary</h3>
          <p className="section-copy">
            Once this becomes dynamic, the same form can create booking records, trigger notifications,
            and feed directly into the admin panel.
          </p>
          <ul className="list">
            <li className="list-item">
              <span className="list-dot" />
              <span>Service selected: not yet selected</span>
            </li>
            <li className="list-item">
              <span className="list-dot" />
              <span>Date: not yet selected</span>
            </li>
            <li className="list-item">
              <span className="list-dot" />
              <span>Time: not yet selected</span>
            </li>
          </ul>
        </aside>
      </section>
    </div>
  );
}
