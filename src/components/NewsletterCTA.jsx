import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function NewsletterCTA() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="bg-gradient-to-r from-teal-100 to-blue-100 backdrop-blur-md py-20 px-6 md:px-20" data-aos="fade-up" data-aos-delay="200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-teal-800 mb-6">
          Unlock Exclusive Finance Wisdom
        </h2>
        <p className="text-gray-700 text-lg mb-10">
          Join Thousands of Smart Investors with CA Rachana’s Newsletter for the Latest Stock Market Trends, Expert Investing Strategies, and Early Course Access!
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-4 w-full sm:w-96 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-600/60 to-teal-900 hover:from-teal-700 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
}