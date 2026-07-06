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
    <div className="bg-[#f5f7fc] py-8 pb-16">
      <section className="w-full px-[clamp(20px,5vw,64px)] grid grid-cols-[1.1fr_1fr] gap-[clamp(1.5rem,4vw,3rem)] items-start max-[980px]:grid-cols-1">
        {/* Left: Intro Panel */}
        <div className="grid gap-[1.2rem] pt-4 justify-items-start">
          {/* Eyebrow */}
          <span className="text-[#1fa7b8] text-[0.76rem] font-extrabold tracking-[0.22em] uppercase">
            Get in touch
          </span>

          {/* Title */}
          <h1 className="m-0 max-w-[50ch] text-[#063e66] text-[clamp(2.2rem,4vw,4rem)] leading-[1.08] tracking-[-0.04em] font-medium max-[700px]:text-[clamp(2.1rem,10vw,3rem)]">
            Let&apos;s Discuss Your Automotive Vision.
          </h1>

          {/* Subtitle */}
          <p className="max-w-[60ch] m-0 text-[#53657a] text-[0.98rem] leading-[1.7]">
            Whether you&apos;re looking for a bespoke detailing consultation or inquiring about our curated vehicle collection, our team of specialists is ready to assist with clinical precision.
          </p>

          {/* Contact Details */}
          <div className="grid gap-4 mt-[0.8rem] w-full max-w-[480px]">
            {contactItems.map((item) => (
              <div className="grid grid-cols-[48px_minmax(0,1fr)] gap-[0.9rem] items-start" key={item.title}>
                {/* Icon */}
                <span
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#eaf3fd] text-[#063e66] shadow-[inset_0_0_0_1px_rgba(6,62,102,0.05)]"
                  aria-hidden="true"
                >
                  <ContactIcon name={item.icon} />
                </span>

                {/* Content */}
                <div>
                  <strong className="block text-[#0b2745] text-[1.02rem] font-[750] mb-[0.15rem]">
                    {item.title}
                  </strong>
                  {item.title === 'Phone' && (
                    <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="block text-[#0d2d52] font-bold text-[0.9rem] leading-[1.45]">
                      {item.lines[0]}
                    </a>
                  )}
                  {item.title === 'Email' && (
                    <a href={`mailto:${brand.email}`} className="block text-[#0d2d52] font-bold text-[0.9rem] leading-[1.45]">
                      {item.lines[0]}
                    </a>
                  )}
                  <span className="block text-[#6b7d93] text-[0.9rem] leading-[1.45]">
                    {item.lines[1]}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right: Form Panel */}
        <div className="w-full">
          <div className="w-full mt-[4.2rem] bg-white rounded-sm shadow-[0_18px_42px_rgba(8,20,40,0.04)] p-[2rem_2rem_1.6rem]">
            <h2 className="m-0 text-[#0b2745] text-[clamp(1.75rem,2.5vw,2.15rem)] leading-[1.05] tracking-[-0.04em]">
              Send us a Message
            </h2>
            <p className="mt-[0.7rem] mb-[1.6rem] text-[#6b7d93] text-[0.95rem] leading-[1.6]">
              Fill out the form below and one of our consultants will reach out to you shortly.
            </p>

            <form className="grid gap-[1.1rem]">
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-[1.1rem] max-[700px]:grid-cols-1">
                <div className="grid gap-[0.45rem]">
                  <label htmlFor="contactFullName" className="text-[#6b7d93] text-[0.68rem] font-extrabold tracking-[0.18em] uppercase">
                    Full Name
                  </label>
                  <input
                    id="contactFullName"
                    placeholder="John Doe"
                    className="w-full border-0 border-b border-[rgba(6,62,102,0.14)] bg-transparent py-[0.25rem] pb-[0.65rem] text-[#0b2745] text-[0.94rem] outline-none placeholder:text-[#c9d1db]"
                  />
                </div>
                <div className="grid gap-[0.45rem]">
                  <label htmlFor="contactEmail" className="text-[#6b7d93] text-[0.68rem] font-extrabold tracking-[0.18em] uppercase">
                    Email Address
                  </label>
                  <input
                    id="contactEmail"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border-0 border-b border-[rgba(6,62,102,0.14)] bg-transparent py-[0.25rem] pb-[0.65rem] text-[#0b2745] text-[0.94rem] outline-none placeholder:text-[#c9d1db]"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-[1.1rem] max-[700px]:grid-cols-1">
                <div className="grid gap-[0.45rem]">
                  <label htmlFor="contactPhone" className="text-[#6b7d93] text-[0.68rem] font-extrabold tracking-[0.18em] uppercase">
                    Phone Number
                  </label>
                  <input
                    id="contactPhone"
                    placeholder="+44 000 000 0000"
                    className="w-full border-0 border-b border-[rgba(6,62,102,0.14)] bg-transparent py-[0.25rem] pb-[0.65rem] text-[#0b2745] text-[0.94rem] outline-none placeholder:text-[#c9d1db]"
                  />
                </div>
                <div className="grid gap-[0.45rem]">
                  <label htmlFor="contactSubject" className="text-[#6b7d93] text-[0.68rem] font-extrabold tracking-[0.18em] uppercase">
                    Subject
                  </label>
                  <select
                    id="contactSubject"
                    defaultValue=""
                    className="w-full border-0 border-b border-[rgba(6,62,102,0.14)] bg-transparent py-[0.25rem] pb-[0.65rem] text-[#0b2745] text-[0.94rem] outline-none"
                  >
                    <option value="" disabled>General Inquiry</option>
                    <option>General Inquiry</option>
                    <option>Car Sales</option>
                    <option>Car Detailing</option>
                    <option>Book Appointment</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="grid gap-[0.45rem]">
                <label htmlFor="contactMessage" className="text-[#6b7d93] text-[0.68rem] font-extrabold tracking-[0.18em] uppercase">
                  Message
                </label>
                <textarea
                  id="contactMessage"
                  placeholder="How can we help you today?"
                  className="w-full border-0 border-b border-[rgba(6,62,102,0.14)] bg-transparent py-[0.25rem] pb-[0.65rem] text-[#0b2745] text-[0.94rem] outline-none placeholder:text-[#c9d1db] min-h-[150px] resize-y"
                />
              </div>

              {/* Submit */}
              <button
                className="inline-flex items-center justify-center gap-[0.65rem] w-[148px] min-h-[40px] mt-4 border-0 rounded-sm bg-[#063e66] text-white text-[0.92rem] font-bold shadow-[0_10px_22px_rgba(6,62,102,0.16)] hover:bg-[#0b567f] transition-colors cursor-pointer"
                type="button"
              >
                Send Message <span aria-hidden="true">&rarr;</span>
              </button>

              {/* Privacy Note */}
              <p className="mt-[0.65rem] text-[#9aa6b5] text-[0.72rem] leading-[1.45]">
                By clicking send, you agree to our Privacy Policy and consent to being contacted regarding your inquiry.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}