import React from 'react';

const Hero = () => {
  return (
    <section className="bg-secondary text-primary dark:bg-zinc-800 dark:text-white py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-title font-bold mb-6">
          Welcome to Handcrafted Haven
        </h1>
        <p className="text-lg md:text-xl font-text">
          Discover unique, handmade products from talented local artisans.
        </p>
      </div>
    </section>
  );
};

export default Hero;
