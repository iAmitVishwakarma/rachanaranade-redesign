import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BarChart2, Users, BookOpen, Mic } from 'lucide-react';

// Assume you have these images in your assets folder
import heroImage from '../assets/images/rachana-portrait.png'; // A confident, welcoming hero shot
import storyImage from '../assets/images/rachana-portraitsd.png'; // A more candid or teaching-style photo

// --- Main About Page Component ---
const AboutPage = () => {
    
    // Data for different sections
    const roles = [
        { icon: BookOpen, title: "Educator", description: "Simplifying finance for over 1 million students through structured courses." },
        { icon: Mic, title: "Content Creator", description: "Reaching millions on YouTube with free, high-quality financial education." },
        { icon: Users, title: "Community Builder", description: "Nurturing a supportive community of learners on their path to financial freedom." }
    ];

    const stats = [
        { value: "4.7M+", label: "YouTube Subscribers" },
        { value: "10+", label: "Years of Teaching" },
        { value: "1M+", label: "Students Empowered" },
    ];

    return (
        <div className="bg-background">
            {/* 1. Hero Section - Inspired by Warikoo's direct address */}
            <section  className="bg-gradient-to-b from-white via-teal-50 to-teal-100 text-center py-20 sm:py-24 px-4">
   <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <p className="text-teal-600 font-semibold mb-2">MY STORY</p>
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-darkText tracking-tight mb-4">
                        I believe financial education<br />should be a right, not a privilege.
                    </h1>
                    <p className="text-lg text-lightText max-w-3xl mx-auto">
                        Hi, I'm Rachana Ranade. I'm a Chartered Accountant who discovered my true passion lies not just in numbers, but in teaching. This is the story of how I started a small YouTube channel that has now blossomed into a community of millions.
                    </p>
                </motion.div>
            </section>

            {/* 2. My Journey Section (2-column layout) */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.8 }}
                    >
                        <img src={storyImage} alt="Rachana Ranade teaching" className="rounded-2xl shadow-xl w-full" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold text-darkText mb-4">It all started with a simple question...</h2>
                        <div className="space-y-4 text-lightText">
                            <p>
                                As a practicing CA, I met many intelligent people who were confused by the stock market. They found it complex, intimidating, and filled with jargon. I realized there was a huge gap between traditional financial advice and the everyday person who just wanted to understand how to grow their money safely.
                            </p>
                            <p>
                                In 2015, I decided to record a few videos in simple Hindi, explaining basic concepts. I never imagined the response. It turned out, millions of people were looking for exactly that – someone to break it all down without making them feel small. That's how my journey as a full-time educator began.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. My Roles Section (Similar to Warikoo's Identity Breakdown) */}
            <section className="bg-white py-20 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-darkText mb-12">What I Do</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {roles.map((role, index) => (
                            <motion.div 
                                key={index}
                                className="bg-gray-50 p-8 rounded-xl"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="inline-block p-4 bg-teal-100 rounded-full mb-4">
                                    <role.icon className="text-teal-600" size={32} />
                                </div>
                                <h3 className="text-xl font-semibold text-darkText mb-2">{role.title}</h3>
                                <p className="text-lightText text-sm">{role.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Impact Section with Stats */}
            <section className="bg-teal-600 text-white py-16 px-4">
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
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
                <h2 className="text-3xl font-bold text-darkText mb-4">My mission is to help you take charge of your money.</h2>
                <p className="text-lg text-lightText max-w-xl mx-auto mb-8">Whether you are a beginner or an experienced investor, I have a course that can help you on your journey.</p>
                <Link to="/courses">
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-orange-500 text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-orange-600 transition-all duration-300 shadow-lg"
                    >
                        Start Learning Today
                    </motion.button>
                </Link>
            </section>
        </div>
    );
};

export default AboutPage;