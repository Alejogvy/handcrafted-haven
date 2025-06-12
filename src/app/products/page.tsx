// src/app/products/page.tsx
'use client';

import { products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Catálogo de Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-xl shadow-sm">
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={200}
              className="rounded mb-4 object-cover w-full h-48"
            />
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="mt-2 font-bold">${product.price}</p>
            <Link href={`/products/${product.id}`} className="text-blue-600 hover:underline text-sm">
              Ver detalle
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
