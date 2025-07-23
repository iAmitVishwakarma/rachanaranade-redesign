import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function NewsletterCTA() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="bg-teal-50 py-16 px-6 md:px-20" data-aos="fade-up">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Stay Updated with Finance Insights
        </h2>
        <p className="text-gray-600 mb-8">
          Subscribe to CA Rachana’s newsletter and get the latest updates on stock market, investing tips, and course releases.
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 w-full sm:w-auto rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-full transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
