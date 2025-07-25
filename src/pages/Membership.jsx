import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Users, Tv, Download, Plus, Minus } from 'lucide-react';
import TestimonialSlider from '../components/TestimonialSlider'; // Re-using your existing component

// --- Reusable FAQ Item Component ---
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 py-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
            >
                <span>{question}</span>
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0, marginTop: isOpen ? '1rem' : '0rem' }}
                className="overflow-hidden"
            >
                <p className="text-gray-600">{answer}</p>
            </motion.div>
        </div>
    );
};


// --- Main Membership Page Component ---
const MembershipPage = () => {

    const benefits = [
        { icon: Zap, title: "Unlimited Course Access", description: "Get full access to all existing and future courses without any limits." },
        { icon: Users, title: "Exclusive Community", description: "Join our private community to network with peers and get support." },
        { icon: Tv, title: "Live Webinars", description: "Participate in monthly live Q&A sessions and webinars with CA Rachana." },
        { icon: Download, title: "Downloadable Notes", description: "Download premium notes, templates, and resources for offline learning." }
    ];

    const pricingPlans = [
        { name: "Monthly", price: "₹999", period: "/month", features: ["Full Course Access", "Community Support", "Email Support"], popular: false },
        { name: "Yearly", price: "₹9,999", period: "/year", features: ["Full Course Access", "Community Support", "Live Webinars", "Downloadable Notes", "Priority Support"], popular: true },
        { name: "Lifetime", price: "₹24,999", period: "one-time", features: ["All Yearly Benefits", "Lifetime Validity", "Exclusive Workshops"], popular: false }
    ];

    const faqs = [
        { question: "Can I cancel my subscription anytime?", answer: "Yes, you can cancel your monthly or yearly subscription at any time from your account dashboard. You will retain access until the end of your billing period." },
        { question: "Is there a free trial available?", answer: "We currently do not offer a free trial, but we have several free introductory videos on our YouTube channel to give you a feel for the teaching style." },
        { question: "What happens after I purchase a plan?", answer: "You will get instant access to all the membership benefits corresponding to your plan. You can start learning immediately." },
        { question: "Can I upgrade my plan later?", answer: "Absolutely! You can upgrade from a Monthly to a Yearly or Lifetime plan at any time. The price will be adjusted accordingly." },
        { question: "Do you offer refunds?", answer: "Due to the digital nature of our content, we generally do not offer refunds. Please review the course previews before purchasing." }
    ];

    return (
        <div className="bg-background">
            {/* 1. Hero Section */}
            <section className="bg-white text-center py-20 sm:py-32 px-4">
                <motion.h1 
                    className="text-4xl sm:text-6xl font-extrabold text-darkText tracking-tight mb-4"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                >
                    Unlock Your Financial Potential.
                </motion.h1>
                <motion.p 
                    className="text-lg text-lightText max-w-2xl mx-auto mb-8"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Join our exclusive membership to get unlimited access to all courses, live sessions, and a supportive community of learners.
                </motion.p>
                <motion.button 
                    className="bg-teal-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Join Now
                </motion.button>
            </section>

            {/* 2. Membership Benefits */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-darkText mb-12">What's Included in Your Membership?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div 
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-md text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="inline-block p-4 bg-teal-100 rounded-full mb-4">
                                    <benefit.icon className="text-teal-600" size={32} />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-lightText">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Pricing Table */}
            

            {/* 4. Testimonials */}
            <TestimonialSlider />

            {/* 5. FAQ Section */}
            <section className="bg-white py-20 px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-darkText text-center mb-12">Frequently Asked Questions</h2>
                    {faqs.map(faq => <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />)}
                </div>
            </section>

            {/* 6. Final Call-to-Action */}
            <section className="py-20 px-4 text-center shadow-2xs shadow-teal-500/2">
                <h2 className="text-3xl font-bold text-darkText mb-4">Ready to Start Your Financial Journey?</h2>
                <p className="text-lg text-lightText max-w-xl mx-auto mb-8">Become a member today and gain the confidence to manage your finances like a pro.</p>
                <button className="bg-orange-500 text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Join Membership Now
                </button>
            </section>
         
        </div>
    );
};

export default MembershipPage; 