import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
          The Best Deals on Mobile Phones
        </h1>
        <p className="text-xl md:text-2xl mb-10">
          Shop the latest mobile phones from top brands at unbeatable prices.
        </p>
        <button className="bg-white text-gray-900 font-bold py-3 px-5 rounded-lg hover:bg-gray-200 transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;