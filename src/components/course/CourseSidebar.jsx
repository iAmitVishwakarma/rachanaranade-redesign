import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Tv, Award, BarChart3 } from 'lucide-react';

const CourseSidebar = ({ course }) => {
    const courseDetails = [
        { icon: Clock, label: "Duration", value: `${course.duration_in_hours} Hours` },
        { icon: Users, label: "Students", value: course.enrollment_count.toLocaleString() },
        { icon: BarChart3, label: "Level", value: course.category },
        { icon: Tv, label: "Platform", value: course.platform },
        { icon: Award, label: "Certificate", value: "Yes" },
    ];

    return (
        <motion.div 
            className="sticky top-24"
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.2 }}
        >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                <img src={course.image} alt={course.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                    <div className="flex items-baseline gap-3 mb-6">
                        <span className="text-4xl font-extrabold text-darkText">₹{course.price.toLocaleString()}</span>
                        <span className="text-xl text-lightText line-through">₹{course.original_price.toLocaleString()}</span>
                    </div>
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg"
                    >
                        Enroll Now
                    </motion.button>
                    <div className="space-y-4 mt-6 text-sm">
                        {courseDetails.map((detail) => (
                            <div key={detail.label} className="flex justify-between items-center text-gray-700">
                                <span className="flex items-center gap-3 font-semibold">
                                    <detail.icon size={18} className="text-teal-600" />
                                    {detail.label}
                                </span> 
                                <span className="font-bold text-darkText">{detail.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CourseSidebar;