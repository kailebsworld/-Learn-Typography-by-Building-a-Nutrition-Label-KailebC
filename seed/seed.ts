export const products = [
  {
    title: 'ARCHIVAL TEE',
    slug: 'archival-tee',
    price: 6800,
    compareAtPrice: 7800,
    description: 'Signature tee in heavyweight cotton with archival print. Made in limited runs.',
    images: ['/images/products/archival-tee-1.jpg'],
    sku: 'sku_archival_tee_s',
    variants: [
      { sku: 'sku_archival_tee_s', size: 'S', color: 'Steel', stock: 10 },
      { sku: 'sku_archival_tee_m', size: 'M', color: 'Steel', stock: 8 },
      { sku: 'sku_archival_tee_l', size: 'L', color: 'Steel', stock: 5 },
      { sku: 'sku_archival_tee_xl', size: 'XL', color: 'Steel', stock: 3 }
    ],
    drop: 'drop-01',
    featured: true
  },
  {
    title: 'STEEL LOGO HOODIE',
    slug: 'steel-logo-hoodie',
    price: 12500,
    description: 'Brushed fleece hoodie with tonal steel embroidery and oversized hood.',
    images: ['/images/products/steel-hoodie-1.jpg'],
    sku: 'sku_steel_hoodie_s',
    variants: [
      { sku: 'sku_steel_hoodie_s', size: 'S', color: 'Steel', stock: 6 },
      { sku: 'sku_steel_hoodie_m', size: 'M', color: 'Steel', stock: 7 },
      { sku: 'sku_steel_hoodie_l', size: 'L', color: 'Steel', stock: 4 },
      { sku: 'sku_steel_hoodie_xl', size: 'XL', color: 'Steel', stock: 2 }
    ],
    drop: 'drop-01',
    featured: true
  },
  {
    title: 'BLUE TOTE',
    slug: 'blue-tote',
    price: 3800,
    description: 'Reinforced canvas tote with cobalt screen print and internal pocket.',
    images: ['/images/products/blue-tote-1.jpg'],
    sku: 'sku_blue_tote',
    variants: [{ sku: 'sku_blue_tote', size: 'OS', color: 'Blue', stock: 12 }],
    drop: 'drop-01',
    featured: false
  }
]

export const archiveProjects = [
  {
    title: 'Support Print Series',
    slug: 'support-print-series',
    year: 2023,
    tags: ['Print', 'Campaign'],
    cover: '/images/archive/support-print-cover.jpg',
    gallery: [
      '/images/archive/support-print-1.jpg',
      '/images/archive/support-print-2.jpg',
      '/images/archive/support-print-3.jpg'
    ],
    credits: ['Direction: 621 ARCHIVAL', 'Photography: I. Cherno']
  },
  {
    title: 'Drop 01 Lookbook',
    slug: 'drop-01-lookbook',
    year: 2024,
    tags: ['Lookbook'],
    cover: '/images/archive/drop01-cover.jpg',
    gallery: [
      '/images/archive/drop01-1.jpg',
      '/images/archive/drop01-2.jpg',
      '/images/archive/drop01-3.jpg'
    ],
    credits: ['Direction: 621 ARCHIVAL', 'Styling: K. Mykola']
  }
]

export const drops = [
  {
    title: 'Drop 01 — Steel Forms',
    slug: 'drop-01',
    launchDate: '2024-03-01T00:00:00.000Z',
    hero: '/images/archive/drop01-hero.jpg',
    body: 'Limited release supporting queer-led spaces in Kyiv.'
  }
]

export const siteSettings = {
  title: '621 ARCHIVAL',
  description: 'Design that cuts clean and lasts.',
  announcement: {
    text: 'Support independent queer-led design.',
    url: '/shop',
    enabled: true
  },
  nav: [
    { title: 'Archive', href: '/archive' },
    { title: 'Shop', href: '/shop' },
    { title: 'About', href: '/about' }
  ],
  footerLinks: [
    { title: 'Shipping', href: '/policies/shipping' },
    { title: 'Returns', href: '/policies/returns' },
    { title: 'Privacy', href: '/policies/privacy' }
  ]
}
