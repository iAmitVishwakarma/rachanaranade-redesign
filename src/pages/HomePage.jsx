import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import rachna from "../assets/rachana-ranade-portrait.png"; // Assuming you have a portrait image

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-md sticky top-0 bg-white z-50">
        <h1 className="text-xl font-bold text-teal-600">CA Rachana Ranade</h1>
        <ul className="flex space-x-6">
          <li>Home</li>
          <li>Courses</li>
          <li>About</li>
          <li>Login</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 md:px-24 flex flex-col md:flex-row items-center gap-8 bg-teal-50" data-aos="fade-up">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4 text-teal-700">Learn Stock Market in Simple Hindi</h2>
          <p className="text-lg mb-6">Join 10L+ learners and start your financial journey today with CA Rachana Ranade.</p>
          <div className="flex gap-4">
            <button className="bg-teal-600 text-white px-6 py-3 rounded shadow hover:bg-teal-700 transition">Join Course</button>
            <button className="bg-orange-500 text-white px-6 py-3 rounded shadow hover:bg-orange-600 transition">Watch Demo</button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={rachna} alt="CA Rachana Ranade" className="w-full rounded shadow-lg" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white text-center" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div>
            <h3 className="text-3xl font-bold text-teal-600">10L+</h3>
            <p className="text-gray-600">Learners</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-teal-600">5M+</h3>
            <p className="text-gray-600">YouTube Subscribers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-teal-600">100+</h3>
            <p className="text-gray-600">Live Sessions</p>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 px-6 md:px-24 bg-gray-50" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-center mb-10">Featured Courses</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition">
              <img
                src={`https://i.imgur.com/EuYF8jL.png`}
                alt="Course"
                className="rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Stock Market for Beginners</h3>
              <p className="text-gray-600 mb-4">Master the basics of stock market and start investing smartly.</p>
              <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 px-6 md:px-24" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-center mb-10">Student Testimonials</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {["Amazing content!", "Very helpful and beginner friendly!"].map((text, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded shadow hover:shadow-md transition">
              <p className="text-gray-700 italic">“{text}”</p>
              <p className="text-sm text-gray-500 mt-2">- Happy Student</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-teal-600 text-white py-12 text-center px-6" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="mb-6">Get updates on new courses and videos straight to your inbox.</p>
        <div className="flex flex-col md:flex-row max-w-xl mx-auto gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 rounded text-gray-800"
          />
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded text-white">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
        © {new Date().getFullYear()} CA Rachana Ranade. All rights reserved.
      </footer>
    </div>
  );
}