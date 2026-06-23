import { PageShell } from '@/components/page-shell';
import { brand } from '@/data/site';
import { formatPhoneForWhatsApp } from '@/lib/utils';

export default function ContactPage() {
  return (
    <div className="stack">
      <PageShell
        eyebrow="Contact Us"
        title="Get in touch"
        description="A conversion-focused contact page with forms and direct contact options."
      />

      <section className="two-column">
        <div className="site-card panel-pad stack">
          <h3>Contact details</h3>
          <p className="section-copy">{brand.address}</p>
          <div className="stack">
            <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>Phone: {brand.phone}</a>
            <a href={`mailto:${brand.email}`}>Email: {brand.email}</a>
            <a href={formatPhoneForWhatsApp(brand.whatsapp)} target="_blank" rel="noreferrer">
              WhatsApp: {brand.whatsapp}
            </a>
          </div>
        </div>

        <div className="site-card panel-pad">
          <form className="form-grid">
            <div className="form-row">
              <div className="field">
                <label htmlFor="contactName">Full name</label>
                <input id="contactName" placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="contactPhone">Phone number</label>
                <input id="contactPhone" placeholder="Your phone number" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="contactMessage">Message</label>
              <textarea id="contactMessage" placeholder="How can we help?" />
            </div>
            <button className="button primary" type="button">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
