import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/images/rachana-portrait.png';
import FeaturedCourses from '../components/FeaturedCourses';
import TestimonialSlider from '../components/TestimonialSlider';
import NewsletterCTA from '../components/NewsletterCTA';
import StatsSection from '../components/StatsSection';
import AboutTimeline from '../components/AboutTimeline';
import MagneticButton from '../components/MagneticButton';

export default function Home() {
  return (
    <>
      <section className="bg-teal-50 min-h-[65vh] flex items-center px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-teal-800 leading-tight mb-4">
              Learn Stock Market in Simple Hindi
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Join over <span className="font-semibold text-teal-600">10 lakh+ learners</span> & begin your journey to financial literacy with India’s most trusted educator.
            </p>
          <div className="flex gap-4 flex-wrap">
  <MagneticButton>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-teal-600 hover:bg-teal-700 transition text-white px-6 py-3 rounded-full font-semibold shadow"
    >
      Explore Courses
    </motion.button>
  </MagneticButton>
  <MagneticButton>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-full font-semibold shadow"
    >
      Watch Demo
    </motion.button>
  </MagneticButton>
</div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="w-full md:w-3/4 mx-auto"
          >
            <img
             src={heroImg}
            // src='../assets/images/rachana-portrait.png'
              alt="CA Rachana Ranade"
              className="mx-auto w-full object-cover rounded-lg drop-shadow-black drop-shadow-xs"
            />
          </motion.div>
        </div>
      </section>
      <StatsSection />
      <FeaturedCourses />
      <TestimonialSlider />
      <NewsletterCTA />
    </>
  );
}