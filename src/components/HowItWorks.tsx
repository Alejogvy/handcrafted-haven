import React from 'react';

const HowItWorks = () => {
  return (
    <section className="bg-secondary/20 dark:bg-zinc-800 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-title text-primary dark:text-secondary text-center mb-10">
          How It Works
        </h2>
        <ol className="space-y-6 text-lg font-text text-primary dark:text-white list-decimal list-inside">
          <li>Create a seller account</li>
          <li>List your handmade products</li>
          <li>Connect with buyers</li>
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
