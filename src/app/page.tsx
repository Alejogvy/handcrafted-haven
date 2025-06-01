import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import HowItWorks from '@/components/HowItWorks';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <HowItWorks />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
