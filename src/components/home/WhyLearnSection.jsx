import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, Users } from 'lucide-react';

const benefits = [
  {
    icon: BookOpen,
    title: 'Practical & Simple Learning',
    description: 'Real-world examples jo complex topics ko bhi aasan bana de.',
  },
  {
    icon: Video,
    title: 'A-Grade Content Quality',
    description: 'High-quality, well-structured video lessons aapke time par, aapki jagah par.',
  },
  {
    icon: Users,
    title: 'India\'s Top Finance Community',
    description: 'Ek aisi community jahan aap discuss kar sakte hain, sawaal pooch sakte hain aur aage badh sakte hain.',
  },
];

const WhyLearnSection = () => {
  return (
    <section className="bg-primary/90 text-white py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Kyun Seekhein Rachana se?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white/10 p-8 rounded-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="inline-block p-4 bg-white/20 rounded-full mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="opacity-90 text-sm sm:text-base">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLearnSection;