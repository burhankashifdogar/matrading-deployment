import type { BlogPost, Car, NavItem, Service, StockVehicle } from '@/types/site';

export const brand = {
  name: 'M.A Trading',
  domain: 'matrading.pk',
  phone: '0305 2446683',
  whatsapp: '+923052446683',
  email: 'info@matrading.pk',
  address: '123 Main Boulevard, Lahore, Pakistan'
};

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Car Sales', href: '/car-sales' },
  { label: 'Detailings', href: '/car-detailing' },
  { label: 'Inspection', href: '/inspection' },
  { label: 'About', href: '/about' },
  { label: 'Our Team', href: '/our-team' },
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

export const availableStock: StockVehicle[] = [
  {
    slug: 'toyota-corolla-2015-gli-white-islamabad',
    make: 'Toyota Corolla',
    model: 2015,
    variant: 'Gli (1.3)',
    colour: 'White',
    registrationCity: 'Islamabad',
    mileageKm: 111578,
    demandPkr: 3250000,
    images: [
      '/inventory/Toyota%20Corolla-%20White%202015%20front.jpeg',
      '/inventory/Toyota%20Corolla-%20White%202015%202.jpeg',
      '/inventory/Toyota%20Corolla-%20White%202015%203.jpeg'
    ]
  },
  {
    slug: 'toyota-corolla-2010-gli-black-lahore',
    make: 'Toyota Corolla',
    model: 2010,
    variant: 'Gli (1.3)',
    colour: 'Black',
    registrationCity: 'Lahore',
    mileageKm: 158767,
    demandPkr: 2700000,
    images: [
      '/inventory/Toyota%20Corolla-black%20front.JPG',
      '/inventory/Toyota%20Corolla-black%202.jpeg',
      '/inventory/Toyota%20Corolla-black%203.jpeg',
      '/inventory/Toyota%20Corolla-black%204.jpeg',
      '/inventory/Toyota%20Corolla-black%205.jpeg',
      '/inventory/Toyota%20Corolla-black%206.jpeg',
      '/inventory/Toyota%20Corolla-black%207.JPG'
    ]
  },
    {
    slug: 'honda-city-2015-aspire-brown-lahore',
    make: 'Honda City',
    model: 2015,
    variant: 'Aspire 1.5',
    colour: 'Brown',
    registrationCity: 'Lahore',
    mileageKm: 101870,
    demandPkr: 2950000,
    images: [
      '/inventory/Honda%20city%20altas.jpeg',
      '/inventory/Honda%20city%20altas2.jpeg',
      '/inventory/Honda%20city%20altas3.jpeg',
      '/inventory/Honda%20city%20altas4.jpeg',
      '/inventory/Honda%20city%20altas5.jpeg',
      '/inventory/Honda%20city%20altas6.jpeg'
    ]  },
  {
    slug: 'honda-vezel-hybrid-black-lahore',
    make: 'Honda Vezel Z Sensing',
    model: 2016,
    modelLabel: '2016',
    variant: 'Hybrid',
    colour: 'Black',
    registrationCity: 'Islamabad',
    registrationCityLabel: 'Islamabad',
    mileageKm: 0,
    mileageLabel: 'Mileage N/A',
    demandPkr: 5700000,
    pricePkrLabel: 'PKR 57 Lac',
    importYear: 2022,
    summary: [
      { label: 'Type', value: 'Honda Vezel Z Sensing' },
      { label: 'Colour', value: 'Black (Interior & Exterior)' },
      { label: 'Registration', value: 'Islamabad' },
      { label: 'Model', value: '2016' },
      { label: 'Import', value: '2022' },
      { label: 'Owner', value: 'First owner' }
    ],
    description: 'Honda Vezel Z Sensing in black with black interior and exterior, registered in Islamabad and imported in 2022.',
    highlights: [
      'First owner, driven single handed',
      'Brand new GT tyres',
      'Paddle shifter',
      'Adaptive cruise control',
      'Automatic mirrors, wipers and lights',
      'Heated seats for both occupants',
      'Genuine Modulo kit in silver',
      'Lane assist',
      'Brake hold',
      'A-one room condition',
      'ABS brakes',
      'Eco, Normal and Sport modes',
      'Fuel average 20-22',
      'Hybrid battery condition 100%'
    ],
    images: [
      '/inventory/Honda%20vezel.jpeg',
      '/inventory/Honda%20vezel2.jpeg',
      '/inventory/Honda%20vezel3.jpeg',
      '/inventory/Honda%20vezel4.jpeg',
      '/inventory/Honda%20vezel5.jpeg',
      '/inventory/Honda%20vezel6.jpeg',
      '/inventory/Honda%20vezel7.jpeg',
      '/inventory/Honda%20vezel8.jpeg',
      '/inventory/Honda%20vezel9.jpeg',
      '/inventory/Honda%20vezel10.jpeg',
      '/inventory/Honda%20vezel11.jpeg'
    ]
  },
    {
    slug: 'toyota-corolla-2013-altis-white-islamabad',
    make: 'Toyota Corolla',
    model: 2013,
    variant: 'Altis 1.6',
    colour: 'White',
    registrationCity: 'Islamabad',
    mileageKm: 29291,
    demandPkr: 3500000,
    images: [
      '/inventory/Toyota%20Corolla-%20White%202013%20Front.JPG',
      '/inventory/Toyota%20Corolla-%20White%202013%203.jpeg',
      '/inventory/Toyota%20Corolla-%20White%202013%204.jpeg',
      '/inventory/Toyota%20Corolla-%20White%202013%205.jpeg'
    ]
  },
    {
    slug: 'toyota-corolla-2019-gli-white-lahore',
    make: 'Toyota Corolla',
    model: 2019,
    variant: 'Gli (1.3)',
    colour: 'White',
    registrationCity: 'Lahore',
    mileageKm: 55759,
    demandPkr: 4275000,
    images: [
      '/inventory/Toyota%20corolla%202019%20Front.jpg',
      '/inventory/Toyota%20corolla%202019%202.jpg'
    ]
  },
    {
    slug: 'toyota-corolla-2012-gli-silver-lahore',
    make: 'Toyota Corolla',
    model: 2012,
    variant: 'Gli (1.3)',
    colour: 'Silver',
    registrationCity: 'Lahore',
    mileageKm: 134788,
    demandPkr: 2850000,
    images: [
      '/inventory/Toyota%20Corolla%20silver%20front.JPG',
      '/inventory/Toyota%20Corolla%20silver%202.jpeg',
      '/inventory/Toyota%20Corolla%20silver%203.jpeg',
      '/inventory/Toyota%20Corolla%20silver%204.jpeg',
      '/inventory/Toyota%20Corolla%20silver%205.jpeg',
      '/inventory/Toyota%20Corolla%20silver%206.jpeg',
      '/inventory/Toyota%20Corolla%20silver%207.JPG'
    ]
  },
    {
    slug: 'honda-city-2022-cvt-white-lahore',
    make: 'Honda City',
    model: 2022,
    variant: 'CVT 1.2',
    colour: 'White',
    registrationCity: 'Lahore',
    mileageKm: 47898,
    demandPkr: 4250000,
    images: [
      '/inventory/Honda%20city%202022%20front.jpeg',
      '/inventory/Honda%20city%202022%202.jpeg'
    ]
  },
    {
    slug: 'toyota-fortuner-2020-27-v-black-islamabad',
    make: 'Toyota Fortuner',
    model: 2020,
    variant: '2.7 V',
    colour: 'Black',
    registrationCity: 'Islamabad',
    mileageKm: 100100,
    demandPkr: 13500000,
    images: [
      '/inventory/Toyota%20fortuner%202.7%20front.jpeg',
      '/inventory/Toyota%20fortuner%202.7%20interior.jpeg'
    ]
  },
    {
    slug: 'suzuki-alto-2022-vxr-silver-lahore',
    make: 'Suzuki Alto',
    model: 2022,
    variant: 'VXR 660cc',
    colour: 'Silver',
    registrationCity: 'Lahore',
    mileageKm: 100000,
    demandPkr: 2650000,
    images: [
      '/inventory/suzuki.JPG',
      '/inventory/suzuki2.JPG',
      '/inventory/suzuki3.jpeg',
      '/inventory/suzuki4.jpeg',
      '/inventory/suzuki5.jpeg',
      '/inventory/suzuki6.jpeg',
      '/inventory/suzuki7.jpeg',
      '/inventory/suzuki8.JPG',
      '/inventory/suzuki9.jpeg'
    ]
  },
  
  {
    slug: 'honda-civic-2015-vti-prosmatec-silver-islamabad',
    make: 'Honda Civic VTi Prosmatec',
    model: 2015,
    modelLabel: '2015',
    variant: '1.8 i-VTEC',
    colour: 'Silver',
    registrationCity: 'Islamabad',
    registrationCityLabel: 'Islamabad',
    mileageKm: 211000,
    demandPkr: 3500000,
    pricePkrLabel: 'PKR 35 Lac',
    summary: [
      { label: 'Type', value: 'Honda Civic VTi Prosmatec 1.8 i-VTEC' },
      { label: 'Colour', value: 'Silver' },
      { label: 'Registration', value: 'Islamabad' },
      { label: 'Model', value: '2015' },
      { label: 'Mileage', value: '211,000 KM' },
      { label: 'Owner', value: 'First owner' }
    ],
    description: 'Honda Civic VTi Prosmatec 1.8 i-VTEC in silver, Islamabad registered, first owner, and driven 211,000 km.',
    highlights: [
      'First owner',
      'Isb registered',
      '211,000 KM driven',
      '1.8 i-VTEC engine',
      'Prosmatec transmission',
      'Demand 35 lacs'
    ],
    images: [
      '/inventory/Honda%20civic%20silver.jpeg',
      '/inventory/Honda%20civic%20silver2.jpeg',
      '/inventory/Honda%20civic%20silver3.jpeg',
      '/inventory/Honda%20civic%20silver4.jpeg',
      '/inventory/Honda%20civic%20silver5.jpeg'
    ]
  },
  {
    slug: 'honda-civic-2019-oriel-black-islamabad',
    make: 'Honda Civic',
    model: 2019,
    variant: 'Oriel',
    colour: 'Black',
    registrationCity: 'Islamabad',
    mileageKm: 61476,
    demandPkr: 5250000,
    images: [
      '/inventory/honda%20civic%20oriel.jpeg',
      '/inventory/honda%20civic%20oriel%20interior.jpeg'
    ]
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
