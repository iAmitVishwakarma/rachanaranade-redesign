import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2015',
    title: 'The First Spark: YouTube Channel Launch',
    desc: 'Ek simple idea ke saath shuruaat hui - finance ko sabke liye aasan banana. Pehla video record hua aur ek movement ne janam liya.',
  },
  {
    year: '2018',
    title: 'Building a Community: 100K Subscribers Milestone',
    desc: 'Hazaaron logon ka vishwas jeeta. Hamari community ne ek strong parivaar ka roop le liya.',
  },
  {
    year: '2021',
    title: 'A New Era: 1 Million Strong & Beyond',
    desc: 'COVID ke dauraan, humne quality content se aisi growth dekhi jiski kalpana nahi ki thi. Hum ek million se zyada ho gaye!',
  },
  {
    year: '2024',
    title: 'Impacting India: 10 Lakh+ Students Empowered',
    desc: 'Aaj, CA Rachana Ranade sirf ek naam nahi, balki India ke top financial educators mein se ek vishwas hai.',
  }
];

// Animation variants for the timeline items
const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const AboutTimeline = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto ">
        <h2 className="text-3xl  relative md:text-4xl font-extrabold text-center text-darkText mb-20">
          From Zero to Financial Hero: The Journey
          <div className='w-3xl absolute left-1/2  -translate-1/2 mx-auto h-5 rounded-[100%] bg-accent/5 shadow-xl shadow-black/40'></div>
        </h2>

        <div className="relative border-l-2 mt-10 border-primary/50">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              className="relative pl-10 md:pl-12 pb-15 shadow  pt-7 "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              {/* The timeline dot */}
              <div className="absolute left-[-11px] top-1 w-5 h-5 mt-10 shadow-primary shadow-xl bg-primary rounded-full border-4 border-white"></div>
              
              {/* The content card */}
              <p className="text-sm font-semibold w-17 text-center rounded-2xl p-1 text-white  bg-primary mb-1">{item.year}</p>
              <h3 className="text-xl sm:text-2xl font-bold text-darkText">
                {item.title}
              </h3>
              <p className="text-lightText mt-2 text-base sm:text-lg tracking-tight">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;