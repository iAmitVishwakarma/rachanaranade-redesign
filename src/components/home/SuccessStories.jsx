import React from 'react';
import useTestimonialStore from '../../stores/testimonialStore';
import { motion } from 'framer-motion';

const SuccessStories = () => {
    const { testimonials } = useTestimonialStore();

    // Take the first 3 testimonials for the homepage
    const homeTestimonials = testimonials.slice(0, 3);

    return (
        <section className="bg-background py-16 sm:py-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-darkText mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Success Stories
                </motion.h2>
                <motion.p 
                    className="text-lg text-lightText mb-12 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    Here’s what our students have to say about their learning journey with us.
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {homeTestimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <p className="text-lightText italic mb-4">"{testimonial.quote}"</p>
                            <div className="flex items-center gap-3">
                                {/* Using a placeholder as the image URL is invalid */}
                                <img src={`https://i.pravatar.cc/150?u=${testimonial.id}`} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <p className="font-bold text-darkText">{testimonial.name}</p>
                                    <p className="text-sm text-green-600 font-medium">Verified Learner</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;