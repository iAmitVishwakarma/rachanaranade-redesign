import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useCourseStore from '../stores/courseStore';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import { ArrowRight } from 'lucide-react';


export default function FeaturedCourses() {
 const { courses, loading, error } = useCourseStore();

  if (loading) return <div className="text-center py-16">Loading courses...</div>;
  if (error) return <div className="text-center py-16 text-red-500">Error: {error}</div>;


  return (
    <section className="bg-background py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-darkText">Most Popular Courses</h2>
                    <p className="text-lg text-lightText mt-2">Join thousands of learners on their journey to financial literacy.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.slice(2,5).map((course, index) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <CourseCard course={course} />
                        </motion.div>
                    ))}
                </div>
                
                {/* Improved "All Courses" Link */}
                <div className="text-center mt-16">
                    <Link to="/courses">
                        <motion.button
                            whileHover={{ scale: 1.05, gap: '1rem' }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-white text-teal-600 font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <span>Explore All Courses</span>
                            <ArrowRight size={20} />
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
  );
}
