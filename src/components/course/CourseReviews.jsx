import React from 'react';
import { Star } from 'lucide-react';

const CourseReviews = ({ testimonials }) => {
    if (!testimonials || testimonials.length === 0) {
        return null; // Don't show the section if there are no reviews
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-darkText mb-6">Reviews from Students</h2>
            <div className="space-y-8">
                {testimonials.map(testimonial => (
                    <div key={testimonial.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                        <div className="flex items-center mb-3">
                            <img src={testimonial.profile_image} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 shadow" />
                            <div>
                                <p className="font-bold text-lg">{testimonial.name}</p>
                                <div className="flex">
                                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={16} className="text-yellow-400" fill="currentColor" />)}
                                </div>
                            </div>
                        </div>
                        <p className="text-lightText italic">"{testimonial.quote}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseReviews;