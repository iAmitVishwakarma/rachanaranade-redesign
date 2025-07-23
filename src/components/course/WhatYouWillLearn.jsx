import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const WhatYouWillLearn = ({ points }) => {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-darkText mb-6">What you'll learn</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {points.map((point, index) => (
                    <motion.li 
                        key={index} 
                        className="flex items-start text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span>{point}</span>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
};

export default WhatYouWillLearn;