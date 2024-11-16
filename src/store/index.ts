import { create } from 'zustand';

export interface CounterState {
  count: number;
  increment: (by: number) => void;
  decrement: (by: number) => void;
}

export const useCounterStore = create<CounterState>()((set) => ({
  count: 0,
  increment: (by) => set((state) => ({ count: state.count + by })),
  decrement: (by) => set((state) => ({ count: state.count - by })),
}));
