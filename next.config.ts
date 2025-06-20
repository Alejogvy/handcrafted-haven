/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Recomendado para Vercel
  images: {
    domains: [], // Vacío porque no usas imágenes externas
  },
}

module.exports = nextConfig