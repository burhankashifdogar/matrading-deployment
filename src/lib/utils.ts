export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

export function formatPhoneForWhatsApp(phone: string) {
  return `https://wa.me/${phone.replace(/\D/g, '')}`;
}
