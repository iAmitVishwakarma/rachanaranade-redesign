import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Heart, TrendingUp, Mail, Linkedin } from 'lucide-react';
import storyImage from '/Images/rachana-portrait.webp';
import AboutTimeline from '../components/AboutTimeline';

const stats = [
    { value: "4.7M+", label: "YouTube Subscribers" },
    { value: "10+", label: "Years of Teaching" },
    { value: "1M+", label: "Students Empowered" },
];

const principles = [
    { icon: Award, title: "Excellence in Simplicity", description: "Har complex topic ko itna aasan bana do ki koi bhi samajh sake. Yahi hamara mantra hai." },
    { icon: Heart, title: "Student-First Approach", description: "Aapki success hamari success hai. Hum har kadam par aapke saath hain." },
    { icon: TrendingUp, title: "Real-World Application", description: "Sirf theory nahi, hum aapko practical knowledge dete hain jo real market mein kaam aaye." }
];

const AboutPage = () => {
    return (
        <div className="bg-background">
            {/* 1. Hero Section */}
            <section className="relative text-center py-24 sm:py-32 px-4 overflow-hidden bg-white">
                 <div className="absolute inset-0 bg-gradient-to-t from-teal-50 to-white z-0"></div>
                <motion.div 
                    className="relative z-10"
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-primary font-semibold mb-2 tracking-wider">THE RACHANA RANADE STORY</p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-darkText tracking-tight mb-4">
                        Ek Teacher by Passion, <br/> Ek CA by Profession.
                    </h1>
                    <p className="text-base sm:text-lg text-lightText max-w-3xl mx-auto">
                        Mera safar numbers se shuru hua, par meri manzil logon ki zindagi badalne mein thi. Yeh kahani hai ek mission ki - financial literacy ko India ke har ghar tak pahunchane ki.
                    </p>
                </motion.div>
            </section>
            
            {/* 2. NEW "About Me" Section (Inspired by your image) */}
            <section className="py-16 sm:py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl tracking-tighter relative md:w-lg  md:mx-auto mx-10   after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-primary md:text-4xl font-extrabold font-poppins text-center text-darkText mb-16">About Me</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">
                        {/* Left Column: Biography & Contact */}
                        <motion.div 
                            className="space-y-10 text-center lg:text-left"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div>
                                <h3 className="font-bold text-2xl text-darkText mb-2">Biography</h3>
                                <p className="text-lightText">A Chartered Accountant by profession, I found my true calling in simplifying finance. My mission is to empower every Indian with the knowledge to take control of their financial future.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-2xl text-darkText mb-3">Connect</h3>
                                <div className="space-y-2">
                                    <a href="mailto:support@rachanaranade.com" className="flex items-center justify-center lg:justify-start gap-3 text-lightText hover:text-primary transition-colors">
                                        <Mail size={20} />
                                        <span>support@rachanaranade.com</span>
                                    </a>
                                    <a href="https://linkedin.com/in/carachanaranade" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center lg:justify-start gap-3 text-lightText hover:text-primary transition-colors">
                                        <Linkedin size={20} />
                                        <span>LinkedIn Profile</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Center Column: Image */}
                        <motion.div 
                            className="relative flex justify-center "
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent/70 to-primary/70 rounded-3xl transform -rotate-6 transition-transform duration-500 hover:rotate-0"></div>
                            <img src={storyImage} alt="Rachana Ranade" className="relative w-full max-w-sm rounded-3xl shadow-2xl z-10" />
                        </motion.div>

                        {/* Right Column: Skills/Philosophy */}
                        <motion.div 
                            className="space-y-8"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                        >
                            {principles.map((principle) => (
                                <div key={principle.title} className="flex items-start gap-4">
                                    <div className="bg-teal-100 p-3 rounded-lg mt-1">
                                        <principle.icon className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-darkText">{principle.title}</h3>
                                        <p className="text-lightText mt-1">{principle.description}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Timeline Section */}
            <AboutTimeline />

            {/* 4. Impact Section with Stats */}
            <section className="bg-primary text-white py-16 px-4">
                 <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <p className="text-4xl sm:text-5xl font-extrabold">{stat.value}</p>
                            <p className="text-teal-100 mt-2">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
            
            {/* 5. Call to Action */}
            <section className="bg-white py-20 px-4 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-darkText mb-4">Ready to Write Your Own Success Story?</h2>
                <p className="text-lg text-lightText max-w-xl mx-auto mb-8">Aapki financial journey yahin se shuru hoti hai. Chaliye, saath milkar aage badhte hain.</p>
                <Link to="/courses">
                    <motion.button 
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-accent text-white font-bold py-4 px-10 rounded-full text-lg sm:text-xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-orange-500/30"
                    >
                        Start Your Journey
                    </motion.button>
                </Link>
            </section>
        </div>
    );
};

export default AboutPage;