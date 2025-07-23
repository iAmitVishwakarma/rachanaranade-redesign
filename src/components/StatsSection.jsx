import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
  const countersRef = useRef([]);

  useEffect(() => {
    countersRef.current.forEach((el, index) => {
      const finalValue = parseInt(el.dataset.value);
      const counter = { val: 0 };

      gsap.to(counter, {
        val: finalValue,
        duration: 2,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          el.textContent = Math.floor(counter.val).toLocaleString();
        },
      });
    });
  }, []);

  const stats = [
    { label: 'Learners Enrolled', value: 1000000 },
    { label: 'Courses Sold', value: 350000 },
    { label: 'YouTube Subscribers', value: 4700000 },
    { label: 'Years of Experience', value: 11 },
  ];

  return (
    <section className="bg-teal-600 text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i}>
            <div
              className="text-3xl font-bold"
              ref={(el) => (countersRef.current[i] = el)}
              data-value={stat.value}
            >
              0
            </div>
            <div className="text-sm mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
