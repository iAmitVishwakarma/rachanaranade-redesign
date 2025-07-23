import { create } from 'zustand';
import { blogs } from '../data/appData';

const useBlogStore = create((set) => ({
  posts: blogs,
}));

export default useBlogStore;