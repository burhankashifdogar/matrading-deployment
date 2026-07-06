export type NavItem = {
  label: string;
  href: string;
};

export type Car = {
  slug: string;
  title: string;
  year: number;
  price: string;
  bodyType: string;
  fuelType: string;
  transmission: string;
  mileage: string;
  featured?: boolean;
  description: string;
  specs: Array<{ label: string; value: string }>;
  images: string[];
};

export type StockVehicle = {
  slug: string;
  make: string;
  model: number;
  variant: string;
  colour: string;
  registrationCity: string;
  mileageKm: number;
  demandPkr: number;
  demandPound: number;
  images?: string[];
  modelLabel?: string;
  mileageLabel?: string;
  pricePkrLabel?: string;
  pricePoundLabel?: string;
  registrationCityLabel?: string;
  importYear?: number;
  summary?: Array<{ label: string; value: string }>;
  description?: string;
  highlights?: string[];
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  highlights: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  summary: string;
};