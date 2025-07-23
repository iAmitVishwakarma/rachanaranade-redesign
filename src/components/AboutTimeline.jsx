import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: '2012',
    title: 'Started CA Rachana YouTube Channel',
    desc: 'Began with free videos to simplify finance for everyone.',
  },
  {
    year: '2016',
    title: 'Launched First Online Course',
    desc: 'Basics of Stock Market — 10K students enrolled in first month!',
  },
  {
    year: '2020',
    title: '1 Million Subscribers Achieved',
    desc: 'Grew rapidly during COVID lockdown with quality content.',
  },
  {
    year: '2024',
    title: '10 Lakh+ Students & Pan-India Reach',
    desc: 'Today, CA Rachana is a top financial educator in India.',
  }
];

export default function AboutTimeline() {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = gsap.utils.toArray('.timeline-card');

    gsap.from(elements, {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <section className="bg-gray-100 py-20 px-6 md:px-20">
      <div ref={containerRef} className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-800 mb-12">
          Our Journey
        </h2>

        <div className="relative border-l-4 border-teal-500 pl-6 space-y-12">
          {milestones.map((item, index) => (
            <div key={index} className="timeline-card relative">
              <div className="absolute left-[-0.7rem] top-1.5 w-4 h-4 bg-teal-600 rounded-full border-4 border-white"></div>
              <h3 className="text-xl font-semibold text-gray-800">
                {item.year} — {item.title}
              </h3>
              <p className="text-gray-600 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
