import React from 'react';
import { motion } from 'framer-motion';
import useTestimonialStore from '../stores/testimonialStore'; // ZUSTAND STORE

// Import Swiper React components and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Star } from 'lucide-react';

// --- Reusable Testimonial Card Component (No changes here) ---
const TestimonialCard = ({ testimonial , bg }) => {
    const renderStars = (rating) => (
        <div className="flex justify-center text-yellow-400">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill={i < rating ? 'currentColor' : 'none'} strokeWidth={1.5} />
            ))}
        </div>
    );

    return (
        <div className={" p-7 m-2 rounded-2xl shadow-lg h-full flex flex-col justify-center items-center text-center " + bg}>
            <img src={testimonial.profile_image+"u"+testimonial.id} alt={testimonial.name} className="w-20 h-20 mx-auto rounded-full object-cover mb-5 shadow-md" />
            <div className="mb-4">{renderStars(testimonial.rating)}</div>
            <p className="text-gray-700 italic text-base leading-relaxed mb-6 flex-grow"><b className='text-2xl font-bold tracking-wider'>“</b>{testimonial.quote}”</p>
            <div>
                <h4 className="font-bold text-lg text-darkText">{testimonial.name}</h4>
                {testimonial.is_verified && <p className="text-xs text-green-600 font-semibold mt-1">Verified Learner</p>}
            </div>
        </div>
    );
};


// --- Main Testimonial Slider Component ---
const TestimonialSlider = () => {
    const { testimonials, loading, error } = useTestimonialStore();

    if (loading) return <div className="text-center py-20">Loading testimonials...</div>;
    if (error) return <div className="text-center py-20 text-red-500">Error: {error}</div>;
    if (!testimonials || testimonials.length === 0) return null;

    return (
        <section className="bg-gray-50 py-20 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                    <h2 className="text-4xl font-extrabold text-darkText mb-4">What Our Students Say</h2>
                    <p className="text-lg text-lightText mb-12 max-w-2xl mx-auto">We’re proud to have empowered over a million students on their financial journey.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
                    <Swiper
                        modules={[Pagination, Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        centeredSlides={true} // <-- THIS IS THE KEY CHANGE
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        pagination={{ clickable: true, el: '.swiper-custom-pagination', renderBullet: (index, className) => `<span class="${className}"></span>` }}
                        // navigation={true}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        className="relative pb-16"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id} className='scale-80 opacity-60  hover:opacity-100 transition-all duration-300 ease-in-out bg-gradient-to-tl'>
                           {({isActive})=> isActive ? <TestimonialCard testimonial={testimonial} bg={"bg-gradient-to-bl from-gray-400/10 to-red-50/30"} /> : <TestimonialCard testimonial={testimonial} bg={"bg-gray-50"} /> }     
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-custom-pagination !flex justify-center mt-4"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialSlider;