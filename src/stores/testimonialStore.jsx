import { create } from 'zustand';
import { testimonials } from '../data/appData';

const useTestimonialStore = create(() => ({
  testimonials: testimonials,
}));

export default useTestimonialStore;