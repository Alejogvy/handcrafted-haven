// src/data/products.ts

export interface Product {
    id: string
    title: string
    description: string
    price: number
    image: string
    category: string
  }
  
  export const products: Product[] = [
    {
      id: '1',
      title: 'Maceta de Barro Hecha a Mano',
      description: 'Perfecta para decorar tu hogar con un toque rústico.',
      price: 25.99,
      image: '/images/passover.webp',
      category: 'Decoración',
    },
    {
      id: '2',
      title: 'Bolso Tejido Andino',
      description: 'Diseñado por artesanos locales con fibras naturales.',
      price: 45.00,
      image: '/images/bowls.webp',
      category: 'Accesorios',
    },
    {
      id: '3',
      title: 'Collar de Piedra Natural',
      description: 'Pieza única elaborada con cuarzo y plata.',
      price: 32.50,
      image: '/images/feathers.webp',
      category: 'Joyería',
    },
  ]
  