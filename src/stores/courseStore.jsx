import { create } from 'zustand';
import { courses } from '../data/appData';

const useCourseStore = create(() => ({
  courses: courses,
}));

export default useCourseStore;