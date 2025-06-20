export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  features?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    title: 'Handcrafted Clay Pot',
    description: 'Perfect for decorating your home with a rustic touch.',
    price: 25.99,
    image: '/images/passover.webp',
    category: 'Decoration',
  },
  {
    id: 4,
    title: 'Filigree Art',
    description: 'Delicate pieces crafted with silver and gold threads.',
    price: 55.00,
    image: '/images/filigrana.webp',
    category: 'Jewelry',
    features: ['Handmade', '925 Silver', 'Traditional design'],
  },
  {
    id: 5,
    title: 'Lace Art',
    description: 'Handmade lace perfect for decoration or clothing.',
    price: 35.00,
    image: '/images/art_encaje.webp',
    category: 'Textiles',
    features: ['100% cotton', 'Artisan design', 'Natural colors'],
  },
  {
    id: 6,
    title: 'Ceramic Skulls',
    description: 'Decorative pieces with traditional Mexican motifs.',
    price: 22.50,
    image: '/images/calaveras_ceramica.webp',
    category: 'Decoration',
    features: ['Hand-painted ceramic', 'Vibrant colors'],
  },
  {
    id: 7,
    title: 'Handcrafted Ceramics',
    description: 'Tableware and ornaments made with ancestral techniques.',
    price: 40.00,
    image: '/images/ceramicas.webp',
    category: 'Decoration',
  },
  {
    id: 8,
    title: 'Traditional Charango',
    description: 'String musical instrument typical of the Andes.',
    price: 120.00,
    image: '/images/charango.webp',
    category: 'Instruments',
  },
  {
    id: 9,
    title: 'Wooden Figures',
    description: 'Hand-carved sculptures and ornaments from fine wood.',
    price: 48.75,
    image: '/images/figuras_madera.webp',
    category: 'Decoration',
  },
  {
    id: 10,
    title: 'Handwoven Huaraches',
    description: 'Sandals handwoven with natural materials.',
    price: 30.00,
    image: '/images/huaraches.webp',
    category: 'Footwear',
  },
  {
    id: 11,
    title: 'Tigua Masks',
    description: 'Traditional masks made for festivals and decoration.',
    price: 65.00,
    image: '/images/mascaras_tigua.webp',
    category: 'Decoration',
  },
  {
    id: 12,
    title: 'Panama Hats',
    description: 'Hats woven with traditional Ecuadorian technique.',
    price: 75.00,
    image: '/images/paja_toquilla.webp',
    category: 'Accessories',
  },
  {
    id: 13,
    title: 'Mexican Piñatas',
    description: 'Handcrafted piñatas for celebrations and parties.',
    price: 25.00,
    image: '/images/pinatas.webp',
    category: 'Decoration',
  },
  {
    id: 14,
    title: 'Andean Ponchos',
    description: 'Ponchos woven with natural fibers and organic dyes.',
    price: 90.00,
    image: '/images/ponchos.webp',
    category: 'Clothing',
  },
  {
    id: 15,
    title: 'Blown Glass',
    description: 'Unique pieces made with traditional glass techniques.',
    price: 85.00,
    image: '/images/vidrio_soplado.webp',
    category: 'Decoration',
  },
  // ... other existing products
];