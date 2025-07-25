import { create } from 'zustand';
import { membership_plans } from '../data/appData';

const useMembershipPlanStore = create((set) => ({
  plans: membership_plans,
}));

export default useMembershipPlanStore;