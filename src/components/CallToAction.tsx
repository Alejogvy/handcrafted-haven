import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-accent text-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-title mb-6">
          Join our community of artisans
        </h2>
        <button className="bg-white text-accent font-text font-semibold px-6 py-3 rounded-2xl shadow hover:bg-secondary hover:text-primary transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
