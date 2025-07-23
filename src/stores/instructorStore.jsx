import { create } from 'zustand';
import { instructors } from '../data/appData';

const useInstructorStore = create((set) => ({
  instructors: instructors,
}));

export default useInstructorStore;