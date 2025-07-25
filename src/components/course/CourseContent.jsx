import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen, PlayCircle } from 'lucide-react';

const CourseContent = ({ modules }) => {
    const [openModule, setOpenModule] = useState(0); // Open the first module by default

    const toggleModule = (index) => {
        setOpenModule(openModule === index ? null : index);
    };

    if (!modules || modules.length === 0) {
        return (
             <div>
                <h2 className="text-3xl font-bold text-darkText mb-6">Course Content</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-r-lg">
                    <div className="flex">
                        <div className="py-1"><BookOpen className="h-6 w-6 text-yellow-500 mr-4"/></div>
                        <div>
                            <p className="font-bold">Curriculum Coming Soon!</p>
                            <p className="text-sm">We're working on adding a detailed module breakdown for this course.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-darkText mb-6">Course Content</h2>
            <div className="space-y-4">
                {modules.map((module, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleModule(index)}
                            className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                            <span className="font-bold text-lg text-darkText">{module.module}</span>
                            <motion.div
                                animate={{ rotate: openModule === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown size={24} className="text-gray-600" />
                            </motion.div>
                        </button>
                        <AnimatePresence>
                            {openModule === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                >
                                    <ul className="p-4 space-y-3">
                                        {module.lectures.map((lecture, lecIndex) => (
                                            <li key={lecIndex} className="flex items-center text-lightText">
                                                <PlayCircle size={18} className="mr-3 text-primary" />
                                                <span>{lecture}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseContent;