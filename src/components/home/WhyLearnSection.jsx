import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, Users } from 'lucide-react';

const benefits = [
  {
    icon: BookOpen,
    title: 'Practical Learning',
    description: 'Courses are designed with real-world examples to make complex topics easy.',
  },
  {
    icon: Video,
    title: 'High-Quality Content',
    description: 'Enjoy well-structured video lessons that you can watch anytime, anywhere.',
  },
  {
    icon: Users,
    title: 'Supportive Community',
    description: 'Join a community of learners to discuss ideas and get your doubts cleared.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const WhyLearnSection = () => {
  return (
    <section className="bg-primary/90 text-white py-16 sm:py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Why Learn With Rachana?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white/10 p-8 rounded-lg text-center"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="inline-block p-4 bg-white/20 rounded-full mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="opacity-90">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLearnSection;