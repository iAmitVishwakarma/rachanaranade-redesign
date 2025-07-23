import { create } from 'zustand';

const useMembershipStore = create((set) => ({
  plans: membership_plans,
}));

export default useMembershipStore;