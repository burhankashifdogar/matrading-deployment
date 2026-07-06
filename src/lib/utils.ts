export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

export function formatPhoneForWhatsApp(phone: string) {
  return `https://wa.me/${phone.replace(/\D/g, '')}`;
}

export function formatWhatsAppMessageLink(phone: string, message: string) {
  const cleanPhone = phone.replace(/\D/g, '');
  return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(message)}`;
}