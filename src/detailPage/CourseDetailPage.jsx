import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import useCourseStore from '../stores/courseStore';
import useInstructorStore from '../stores/instructorStore';
import useTestimonialStore from '../stores/testimonialStore';
import CourseHero from '../components/course/CourseHero';
import CourseSidebar from '../components/course/CourseSidebar';
import WhatYouWillLearn from '../components/course/WhatYouWillLearn';
import CourseReviews from '../components/course/CourseReviews';
import CourseContent from '../components/course/CourseContent';
import FeaturedCourses from '../components/FeaturedCourses'; // For related courses

const CourseDetailPage = () => {
    const { slug } = useParams();
    const { courses } = useCourseStore();
    const { instructors } = useInstructorStore();
    const { testimonials } = useTestimonialStore();

    const course = courses.find(c => c.slug === slug);
    
    if (!course) {
        return <Navigate to="/courses" replace />;
    }

    const instructor = instructors.find(i => i.id === course.instructor_id);
    const courseTestimonials = testimonials.filter(t => t.course_id === course.id);

    return (
        <div className="bg-background">
            <CourseHero course={course} instructor={instructor} />

            <div className="container mx-auto px-4 py-12 sm:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Side: Course Details */}
                    <div className="lg:col-span-2 space-y-12">
                        <WhatYouWillLearn points={course.what_you_will_learn} />
                        <CourseContent modules={course.content} />
                        <CourseReviews testimonials={courseTestimonials} />
                    </div>

                    {/* Right Side: Sticky Sidebar */}
                    <aside className="lg:col-span-1">
                        <CourseSidebar course={course} />
                    </aside>
                </div>
            </div>
            
            {/* Related Courses Section */}
            <div className="bg-white py-4">
                 <FeaturedCourses />
            </div>
        </div>
    );
};

export default CourseDetailPage;