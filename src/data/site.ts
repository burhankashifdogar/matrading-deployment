import type { BlogPost, Car, NavItem, Service } from '@/types/site';

export const brand = {
  name: 'M.A Trading',
  domain: 'matrading.pk',
  phone: '+92 312 999999',
  whatsapp: '+92312999999',
  email: 'info@matrading.pk',
  address: '123 Main Boulevard, Lahore, Pakistan'
};

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Car Sales', href: '/car-sales' },
  { label: 'Car Detailing', href: '/car-detailing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' }
];

export const featuredCars: Car[] = [
  {
    slug: 'toyota-corolla-2021',
    title: 'Toyota Corolla',
    year: 2021,
    price: 'PKR 4,250,000',
    bodyType: 'Sedan',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    mileage: '45,000 km',
    featured: true,
    description: 'Well-maintained, clean interior, accident-free, and ready for immediate delivery.',
    specs: [
      { label: 'Engine', value: '1.8L' },
      { label: 'Color', value: 'White' },
      { label: 'Registered', value: 'Lahore' },
      { label: 'Condition', value: 'Excellent' }
    ],
    images: ['/img1.jpg', '/car1.jpg', '/car2.jpg']
  },
  {
    slug: 'honda-civic-2020',
    title: 'Honda Civic Oriel',
    year: 2020,
    price: 'PKR 4,850,000',
    bodyType: 'Sedan',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    mileage: '38,500 km',
    description: 'Elegant design, smooth drive, and a strong service history.',
    specs: [
      { label: 'Engine', value: '1.5L Turbo' },
      { label: 'Color', value: 'Black' },
      { label: 'Registered', value: 'Islamabad' },
      { label: 'Condition', value: 'Premium' }
    ],
    images: ['/car1.jpg', '/car2.jpg', '/car3.jpg']
  },
  {
    slug: 'hyundai-elantra-2022',
    title: 'Hyundai Elantra',
    year: 2022,
    price: 'PKR 4,450,000',
    bodyType: 'Sedan',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    mileage: '18,600 km',
    description: 'Modern cabin, advanced features, and pristine condition.',
    specs: [
      { label: 'Engine', value: '2.0L' },
      { label: 'Color', value: 'Silver' },
      { label: 'Registered', value: 'Karachi' },
      { label: 'Condition', value: 'Like New' }
    ],
    images: ['/car2.jpg', '/car1.jpg', '/car3.jpg']
  },
  {
    slug: 'suzuki-swift-2021',
    title: 'Suzuki Swift',
    year: 2021,
    price: 'PKR 2,450,000',
    bodyType: 'Hatchback',
    fuelType: 'Petrol',
    transmission: 'Manual',
    mileage: '28,900 km',
    description: 'Compact, economical, and a great option for city driving.',
    specs: [
      { label: 'Engine', value: '1.2L' },
      { label: 'Color', value: 'White' },
      { label: 'Registered', value: 'Karachi' },
      { label: 'Condition', value: 'Excellent' }
    ],
    images: ['/car3.jpg', '/car1.jpg', '/car2.jpg']
  }
];

export const services: Service[] = [
  {
    slug: 'exterior-detailing',
    title: 'Exterior Detailing',
    description: 'Deep cleaning, polishing, and gloss restoration for a fresh finish.',
    highlights: ['Foam wash', 'Paint decontamination', 'Wax protection']
  },
  {
    slug: 'interior-detailing',
    title: 'Interior Detailing',
    description: 'Vacuuming, deep cleaning, sanitization, and leather care.',
    highlights: ['Steam cleaning', 'Fabric treatment', 'Dashboard dressing']
  },
  {
    slug: 'ceramic-coating',
    title: 'Ceramic Coating',
    description: 'Long-lasting protection with enhanced shine and hydrophobic finish.',
    highlights: ['Gloss enhancement', 'Scratch resistance', 'UV protection']
  },
  {
    slug: 'engine-bay-cleaning',
    title: 'Engine Bay Cleaning',
    description: 'Safe engine compartment cleaning to keep the bay neat and maintained.',
    highlights: ['Degreasing', 'Dressings', 'Protective care']
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'tips-to-keep-your-car-in-perfect-condition',
    title: '5 Tips to Keep Your Car in Perfect Condition',
    category: 'Car Care',
    date: 'May 15, 2026',
    summary: 'Simple maintenance habits that keep your vehicle looking and driving better.'
  },
  {
    slug: 'what-to-check-before-buying-a-used-car',
    title: 'What to Check Before Buying a Used Car',
    category: 'Buying Guide',
    date: 'May 10, 2026',
    summary: 'A practical checklist to reduce risk and make smarter purchase decisions.'
  },
  {
    slug: 'benefits-of-ceramic-coating-for-your-car',
    title: 'Benefits of Ceramic Coating for Your Car',
    category: 'Detailing',
    date: 'May 1, 2026',
    summary: 'Why ceramic coating is worth considering for long-term paint protection.'
  },
  {
    slug: 'how-to-prepare-your-car-for-sale',
    title: 'How to Prepare Your Car Before Selling',
    category: 'Selling Guide',
    date: 'April 24, 2026',
    summary: 'Small presentation and service checks that help buyers feel more confident.'
  },
  {
    slug: 'interior-cleaning-mistakes-to-avoid',
    title: 'Interior Cleaning Mistakes to Avoid',
    category: 'Car Care',
    date: 'April 18, 2026',
    summary: 'Common cleaning habits that can damage trims, leather, fabric, and dashboard surfaces.'
  },
  {
    slug: 'when-your-car-needs-professional-detailing',
    title: 'When Your Car Needs Professional Detailing',
    category: 'Detailing',
    date: 'April 10, 2026',
    summary: 'Clear signs that your vehicle needs deeper care than a regular wash can provide.'
  }
];
