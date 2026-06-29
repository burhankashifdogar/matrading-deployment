import { brand } from '@/data/site';

const contactItems = [
  {
    title: 'Phone',
    lines: [brand.phone, 'Concierge line available 24/7'],
    icon: 'phone'
  },
  {
    title: 'Email',
    lines: [brand.email, 'Typical response time: 2 hours'],
    icon: 'email'
  },
  {
    title: 'Studio Address',
    lines: [brand.address, 'Precision Park, Lahore'],
    icon: 'location'
  },
  {
    title: 'Working Hours',
    lines: ['Mon - Fri: 08:00 - 19:00', 'Sunday: By Appointment'],
    icon: 'clock'
  }
];

const socialLinks = [
  { label: 'Facebook', href: '#', icon: 'facebook' },
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'Calendar', href: '#', icon: 'calendar' }
];

function ContactIcon({ name }: { name: string }) {
  const commonProps = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const
  };

  switch (name) {
    case 'phone':
      return (
        <svg {...commonProps}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z" />
        </svg>
      );
    case 'email':
      return (
        <svg {...commonProps}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case 'location':
      return (
        <svg {...commonProps}>
          <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11z" />
          <circle cx="12" cy="10" r="2.2" />
        </svg>
      );
    case 'clock':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case 'facebook':
      return (
        <svg {...commonProps}>
          <path d="M14 3h3V0h-3a5 5 0 0 0-5 5v3H6v4h3v12h4V12h3l1-4h-4V5a2 2 0 0 1 2-2z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...commonProps}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'calendar':
      return (
        <svg {...commonProps}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M8 3v4M16 3v4M3 11h18" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ContactPage() {
  return (
    <div className="contact-page contact-page-split">
      <section className="content-wrap contact-hero-grid">
        <div className="contact-intro-panel">
          <span className="contact-eyebrow">Get in touch</span>
          <h1 className="contact-hero-title">Let&apos;s Discuss Your Automotive Vision.</h1>
          <p>
            Whether you&apos;re looking for a bespoke detailing consultation or inquiring about our curated vehicle collection, our team of specialists is ready to assist with clinical precision.
          </p>

          <div className="contact-details-stack">
            {contactItems.map((item) => (
              <div className="contact-detail-item" key={item.title}>
                <span className={`contact-detail-icon icon-${item.icon}`} aria-hidden="true">
                  <ContactIcon name={item.icon} />
                </span>
                <div>
                  <strong>{item.title}</strong>
                  {item.title === 'Phone' && <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{item.lines[0]}</a>}
                  {item.title === 'Email' && <a href={`mailto:${brand.email}`}>{item.lines[0]}</a>}
                  {item.title === 'Studio Address' && <p>{item.lines[0]}</p>}
                  {item.title === 'Working Hours' && <p>{item.lines[0]}</p>}
                  <span>{item.lines[1]}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-social-block">
            <span>Connect with us</span>
            <div className="contact-social-row">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} className="contact-social-link" aria-label={link.label}>
                  <ContactIcon name={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-form-panel">
          <div className="contact-form-card">
            <h2>Send us a Message</h2>
            <p>Fill out the form below and one of our consultants will reach out to you shortly.</p>

            <form className="contact-form-grid">
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contactFullName">Full Name</label>
                  <input id="contactFullName" placeholder="John Doe" />
                </div>
                <div className="contact-field">
                  <label htmlFor="contactEmail">Email Address</label>
                  <input id="contactEmail" type="email" placeholder="john@example.com" />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contactPhone">Phone Number</label>
                  <input id="contactPhone" placeholder="+44 000 000 0000" />
                </div>
                <div className="contact-field">
                  <label htmlFor="contactSubject">Subject</label>
                  <select id="contactSubject" defaultValue="">
                    <option value="" disabled>
                      General Inquiry
                    </option>
                    <option>General Inquiry</option>
                    <option>Car Sales</option>
                    <option>Car Detailing</option>
                    <option>Book Appointment</option>
                  </select>
                </div>
              </div>

              <div className="contact-field contact-message-field">
                <label htmlFor="contactMessage">Message</label>
                <textarea id="contactMessage" placeholder="How can we help you today?" />
              </div>

              <button className="contact-submit-btn" type="button">
                Send Message <span aria-hidden="true">&rarr;</span>
              </button>

              <p className="contact-privacy-note">
                By clicking send, you agree to our Privacy Policy and consent to being contacted regarding your inquiry.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

