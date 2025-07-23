import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import useCourseStore from '../stores/courseStore';
import useInstructorStore from '../stores/instructorStore';
import useTestimonialStore from '../stores/testimonialStore';

// Import the new, smaller components
import CourseHero from '../components/course/CourseHero';
import CourseSidebar from '../components/course/CourseSidebar';
import WhatYouWillLearn from '../components/course/WhatYouWillLearn';
import CourseReviews from '../components/course/CourseReviews';
import CourseContent from '../components/course/CourseContent';

const CourseDetailPage = () => {
    const { slug } = useParams(); // Use slug from the URL

    // Fetch all necessary data from Zustand stores
    const { courses } = useCourseStore();
    const { instructors } = useInstructorStore();
    const { testimonials } = useTestimonialStore();

    // Find the specific course, its instructor, and related testimonials
    const course = courses.find(c => c.slug === slug);
    const instructor = course ? instructors.find(i => i.id === course.instructor_id) : null;
    const courseTestimonials = course ? testimonials.filter(t => t.course_id === course.id) : [];

    // If the course is not found, redirect to the main courses page
    if (!course) {
        return <Navigate to="/courses" replace />;
    }

    return (
        <div className="bg-background">
            {/* 1. Hero Section */}
            <CourseHero course={course} instructor={instructor} />

            {/* 2. Main Layout (Content + Sticky Sidebar) */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Left Side: Course Content Details */}
                    <div className="lg:col-span-2 space-y-12">
                        <WhatYouWillLearn points={course.what_you_will_learn} />
                        <CourseContent />
                        <CourseReviews testimonials={courseTestimonials} />
                    </div>

                    {/* Right Side: Sticky Sidebar */}
                    <aside className="lg:col-span-1">
                        <CourseSidebar course={course} />
                    </aside>

                </div>
            </div>
        </div>
    );
};

export default CourseDetailPage;