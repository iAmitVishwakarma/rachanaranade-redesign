import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import useCourseStore from '../stores/courseStore';
import { Link } from 'react-router-dom';
import { Star, Users, Search } from 'lucide-react';
import CourseCard from '../components/CourseCard';

const CoursesPage = () => {
    const courses = useCourseStore((state) => state.courses);
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    // Get unique categories dynamically from the course data
    const categories = useMemo(() => {
        const cats = courses.map(c => c.category);
        return ['All', ...new Set(cats)];
    }, [courses]);

    // Filter courses based on both category and search term
    const filteredCourses = useMemo(() => {
        return courses
            .filter(course => activeCategory === 'All' || course.category === activeCategory)
            .filter(course => course.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [activeCategory, searchTerm, courses])

    return (
        <div className="bg-background min-h-screen">
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-12">
                    <motion.h1 
                        className="text-5xl font-extrabold text-darkText"
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                    >
                        All Courses
                    </motion.h1>
                    <motion.p 
                        className="text-lg text-lightText mt-2"
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Unlock your potential with expert-led courses designed to build your investing confidence and secure your future.
                    </motion.p>
                </div>

                {/* Search and Category Filters */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div className="relative w-full md:w-1/3">
                        <input
                            type="text"
                            placeholder="Search courses by title..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                    <div className="flex justify-center flex-wrap gap-3">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${activeCategory === cat ? 'bg-teal-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Course Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    layout
                >
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <motion.div
                                key={course.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                            >
                                <CourseCard course={course} />
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-center col-span-full text-gray-500 py-20">No courses found for this criteria.</p>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default CoursesPage;