import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const CourseHero = ({ course, instructor }) => {
    return (
        <section className="bg-white pt-24 pb-16 shadow-sm">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <Link to="/courses" className="text-teal-600 font-semibold mb-4 inline-block hover:underline">&larr; Back to Courses</Link>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-darkText tracking-tight">{course.title}</h1>
                    <p className="text-xl text-lightText mt-4">A comprehensive guide to mastering {course.title.toLowerCase()}.</p>
                    
                    <div className="flex flex-wrap items-center mt-6 gap-6 text-sm">
                        {instructor && (
                            <div className="flex items-center ">
                                <div className='w-14 h-14 rounded-full overflow-hidden shadow-md mr-3'>
                                    <img src={instructor.profile_image} alt={instructor.name}
                                 className="" />
                                </div>
                                
                                <div>
                                    <p className="text-lightText">Created by</p>
                                    <p className="font-bold text-lg text-darkText">{instructor.name}</p>
                                </div>
                            </div>
                        )}
                        <div className="flex items-center gap-1.5">
                            <Star size={20} className="text-yellow-400" fill="currentColor" />
                            <span className="font-bold text-darkText">{course.rating}</span>
                            <span className="text-lightText">({course.rating_count} ratings)</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CourseHero;