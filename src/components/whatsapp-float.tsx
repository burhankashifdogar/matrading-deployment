import { brand } from '@/data/site';
import { formatWhatsAppMessageLink } from '@/lib/utils';

const message = 'Hi, I would like to enquire about your services.';
const whatsappHref = formatWhatsAppMessageLink(brand.whatsapp, message);

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-[0_16px_36px_rgba(37,211,102,0.35)] transition hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(37,211,102,0.42)] sm:bottom-5 sm:right-5 sm:px-5"
    >
      <span className="grid h-11 w-11 place-items-center rounded-full bg-white/15">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20.5 11.9a8.5 8.5 0 0 1-12.4 7.5L3 20.5l1.1-5A8.5 8.5 0 1 1 20.5 11.9Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9 8.8c.2-.4.4-.4.7-.4h.6c.2 0 .5.1.7.5l.9 2c.1.2.1.5-.1.7l-.5.6c-.2.2-.2.4 0 .6.4.8 1.3 1.6 2.1 2 .2.1.4.1.6 0l.7-.4c.2-.1.5-.1.7.1l1.7 1c.2.1.3.4.2.6-.2.7-.8 1.4-1.7 1.4-4.1 0-7.5-3.3-7.5-7.4 0-1 .4-1.7.9-2.3Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </a>
  );
}